import React from "react";

const Searchingbar = ({ fetchData, searchMovie, setSearchMovie }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div className="flex justify-center p-8">
      <input
        type="text"
        className="p-2 w-80 placeholder-gray-500 bg-gray-200 rounded-l-lg border-2 border-gray-700"
        placeholder="Search Movies"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={fetchData}
        className="bg-[#40407a] px-4 py-2 text-white text-xl rounded-r-lg border-r-2 border-t-2 border-b-2 border-gray-700"
      >
        Search
      </button>
    </div>
  );
};

export default Searchingbar;
