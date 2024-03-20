import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  console.log(process.env.REACT_APP_ACCESS_KEY)
  console.log(process.env.REACT_APP_SECRET_KEY)
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=food&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <div className="App bg-slate-50 h-screen">
      <ImageContext.Provider value={value}>
        <Jumbutron>
          <SearchField />
        </Jumbutron>
        <Images />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
