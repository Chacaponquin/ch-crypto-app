import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutCrypto from "./AboutCrypto";
import CoinsTrend from "./CoinsTrend";
import CurrentMarket from "./CurrentMarket";
import FAQ from "./FAQ";
import Info from "./Info";

const HomePage = () => {
  const [coinsTrend, setCoinsTrend] = useState([
    "Bitcoin",
    "Bnb",
    "Etherium",
    "Tron",
  ]);

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
        console.log(data.data);
        setCoinsData(data.data.coins);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="px-40 pb-20">
      <Info />
      <CoinsTrend coinsTrend={coinsTrend} />
      {coinsData && <CurrentMarket coinsData={coinsData} />}
      <AboutCrypto />
      <FAQ />
    </div>
  );
};

export default HomePage;
