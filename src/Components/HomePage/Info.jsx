import React from "react";
import play from "../../assets/play-icon.png";

const Info = () => {
  return (
    <section className="flex items-start justify-between">
      <div className="flex flex-col max-w-lg">
        <h1 className="font-extrabold text-6xl leading-snug">
          Availeble <p className="inline text-colorButtonBg">P2P</p>{" "}
          cryptocurrency lending platform
        </h1>

        <p className="py-8 text-slate-600 font-semibold">
          Libra is a complete{" "}
          <p className="inline text-colorButtonBg">free market</p> environment
          that contains all the elements that a credit business needs to
          function
        </p>

        <div className="flex items-center justify-around">
          <button className="rounded-full text-white font-semibold bg-colorButtonBg px-8 py-4 text-xl">
            Get Started
          </button>

          <button className="flex items-center rounded-full bg-slate-300 px-8 py-4">
            <img src={play} alt="play-button" className="w-7 h-7" />
            <p className="text-lg font-semibold text-slate-600 mx-4">
              Watch Tutorial
            </p>
          </button>
        </div>
      </div>

      <div className="">
        <img
          src="./home-photo.png"
          alt=""
          className="w-96 h-96 object-cover home-image"
        />
      </div>
    </section>
  );
};

export default Info;
