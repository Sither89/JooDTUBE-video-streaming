import "./Home.css";
import { CategoriesPane, VideosPane } from "./HomeComponents";

const Home = () => {
  return (
    <main>
      <CategoriesPane />
      <VideosPane />
    </main>
  );
};

export { Home };
