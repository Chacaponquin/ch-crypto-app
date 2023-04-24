import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutCrypto from "./AboutCrypto";
import CoinsTrend from "./CoinsTrend";
import CurrentMarket from "./CurrentMarket";
import FAQ from "./FAQ";
import Info from "./Info";

const HomePage = () => {
  const COINS_TREND = ["Bitcoin", "Bnb", "Etherium", "Tron"];

  const [coinsData, setCoinsData] = useState(null);

  useEffect(() => {
    axios
      .get("https://coinranking1.p.rapidapi.com/coins", {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          tiers: "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "10",
          offset: "0",
        },
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "32ea61c07cmsh0e54b5b205a547fp16232bjsn63e17d86aa3a",
        },
      })
      .then(({ data }) => {
        setCoinsData(data.data.coins);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="flex justify-center w-full px-10">
      <div className="w-full flex-col flex max-w-[1100px]">
        <Info />
        <CoinsTrend coinsTrend={COINS_TREND} />
        {coinsData && <CurrentMarket coinsData={coinsData} />}
        <AboutCrypto />
        <FAQ />
      </div>
    </div>
  );
};

export default HomePage;
