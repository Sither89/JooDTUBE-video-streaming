import { createContext, useContext, useReducer, useEffect } from "react";
import { fetchVideos, fetchCategories } from "../utils/server-request";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = {
  categories: [],
  videos: [],
  selectedCategory: "All",
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return { ...state, videos: action.payload };

    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SELECT_CATEGORY":
      return { ...state, selectedCategory: action.payload };

    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  useEffect(() => {
    fetchVideos(dataDispatch);
    fetchCategories(dataDispatch);
  }, []);
  return (
    <DataContext.Provider value={{ dataDispatch, dataState }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
