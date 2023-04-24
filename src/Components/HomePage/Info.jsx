import React from "react";
import play from "../../assets/play-icon.png";

const Info = () => {
  return (
    <section className="flex items-start xl:justify-between justify-center">
      <div className="flex flex-col max-w-lg xl:text-left text-center">
        <h1 className="font-extrabold text-6xl esm:text-5xl esm:leading-tight leading-snug">
          Availeble <p className="inline text-colorButtonBg">P2P</p>{" "}
          cryptocurrency lending platform
        </h1>

        <p className="py-8 esm:py-5 text-slate-600 font-semibold">
          Stay up-to-date with real-time information, news, and expert analysis.
          Join the revolution and make informed decisions about your
          investments. Start exploring now!
        </p>

        <div className="flex esm:flex-col gap-y-3 items-center xl:justify-start gap-x-6 w-full justify-center">
          <button className="w-[260px] rounded-full text-white font-semibold bg-colorButtonBg py-4 text-xl">
            Get Started
          </button>

          <button className="w-[260px] flex items-center rounded-full bg-slate-300 py-4 justify-center">
            <img src={play} alt="play-button" className="w-7 h-7" />
            <p className="text-lg font-semibold text-slate-600 ml-4">
              Watch Tutorial
            </p>
          </button>
        </div>
      </div>

      <div className="xl:block hidden">
        <img
          src="./home-photo.png"
          alt=""
          className="object-cover home-image"
        />
      </div>
    </section>
  );
};

export default Info;
