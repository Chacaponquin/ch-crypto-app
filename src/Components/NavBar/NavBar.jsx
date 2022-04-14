import React, { useState } from "react";
import Logo from "../../assets/Logo";

const NavBar = () => {
  const labelsArray = {
    HOME: "Home",
    COINS: "Coins",
    CONTACT: "Contact",
  };
  const [labelSelect, setLabelSelect] = useState(labelsArray.HOME);

  return (
    <div className="flex px-20 py-5 items-center justify-between w-full sticky bg-gradient">
      <section className="flex w-16 h-16">
        <Logo size={55} />
      </section>

      <section className="flex items-center">
        {Object.values(labelsArray).map((label, i) => (
          <NavBarLabel
            key={i}
            label={label}
            labelSelect={labelSelect}
            setLabelSelect={setLabelSelect}
          />
        ))}

        <button className="rounded-full px-8 py-3 bg-colorButtonBg text-white font-semibold text-xl">
          Login
        </button>
      </section>
    </div>
  );
};

const NavBarLabel = ({ label, labelSelect, setLabelSelect }) => {
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div
      className="w-max mx-8 flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
    >
      <p
        className={`font-semibold text-lg pb-1 ${
          labelSelect !== label ? "text-slate-400" : "text-slate-900"
        }`}
        onClick={() => setLabelSelect(label)}
      >
        {label}
      </p>
      <div
        className={`bg-colorButtonBg w-0 rounded-full h-1 duration-300 transition-all ${
          hoverEffect || labelSelect === label ? "nav-effect" : ""
        }`}
      ></div>
    </div>
  );
};

export default NavBar;
