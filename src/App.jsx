import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchingbar from "./components/Searchingbar";
import Moviecard from "./components/Moviecard";

const App = () => {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      setLoader(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      setAllMovieData(data.Search);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="bg">
        <Searchingbar
          fetchData={fetchData}
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
        />
        <Moviecard allMovieData={allMovieData} loader={loader} />
      </div>
    </div>
  );
};

export default App;
