import React from "react";

const Moviecard = ({ allMovieData, loader }) => {
  return (
    <div>
      {loader ? (
        <div className="flex justify-center ">
          <img
            className=" w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {allMovieData.map((item, index) => {
            const { Title, Year, Poster } = item;
            return (
              <div key={index} className=" p-4 md:w-1/4 w-full ">
                <div className=" bg-[#40407a] p-3 rounded-2xl h-full text-center">
                  <img src={Poster} className="rounded-lg w-full   mb-2" alt="" />
                  <h1 className="text-white text-2xl">{Title}</h1>
                  <h2 className="text-white text-xl">{Year}</h2>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Moviecard;
