var fs = require('fs');
const contactVideo = require('../models/Video');
module.exports = async (req, res) => {
    res.setHeader("content-type", "video/mp4");
    var course_name = req.query.course;
    var ep = req.query.EP
    const video = await contactVideo.find();
    console.log("Video",video);
    let videoFilepath = "";
    video.forEach(video => {
        if (video.Course == course_name && video.EP == ep) {
            videoFilepath = video.filePathVideo;
        }
    });
    console.log("VideoPath:",videoFilepath);
    // videoFilepath = 'video/2022-11-09 00-10-20.mp4';
    fs.stat(videoFilepath, (err, stat) => {
        if (err) {
            console.error(`File stat error for ${videoFilepath}.`);
            console.error(err);
            res.sendStatus(500);
            return;
        }

        res.setHeader("content-length", stat.size);

        const fileStream = fs.createReadStream(videoFilepath);
        fileStream.on("error", error => {
            console.log(`Error reading file ${videoFilepath}.`);
            console.log(error);
            res.sendStatus(500);
        });

        fileStream.pipe(res)
    });
}