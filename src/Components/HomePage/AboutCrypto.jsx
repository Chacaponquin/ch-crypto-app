import React from "react";
import coins_hand from "../../assets/coin-in-hand.png";

const AboutCrypto = () => {
  return (
    <div className="flex py-14 esm:py-10 items-center">
      <img
        className="object-cover aboutCrypto-image xl:block hidden"
        src={coins_hand}
        alt="coin-in-hand"
      />

      <section className="xl:pl-10 w-full xl:max-w-2xl">
        <h1 className="text-5xl esm:text-4xl font-extrabold">
          Do you know what cryptocurrencies are?
        </h1>
        <p className="pt-5 font-semibold text-gray-500 text-base">
          Cryptocurrencies are digital assets that use cryptography, an
          encryption technique, for security. Cryptocurrencies are primarily
          used to buy and sell goods and services, though some newer
          cryptocurrencies also function to provide a set of rules or
          obligations for its holders. They possess no intrinsic value in that
          they are not redeemable for another commodity, such as gold
        </p>
      </section>
    </div>
  );
};

export default AboutCrypto;
