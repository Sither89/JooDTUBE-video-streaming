const filterVideos = (data, category) => {
  if (category === "All") {
    return data;
  }
  return data.filter((item) => item.category.includes(category));
};

export { filterVideos };
