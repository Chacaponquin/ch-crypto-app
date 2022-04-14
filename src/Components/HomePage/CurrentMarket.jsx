import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  stacked: true,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    animation: true,
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
};

const CurrentMarket = ({ coinsData }) => {
  const labels = ["Market", "Coin", "Last Price", "Change", "Behavior"];

  return (
    <div>
      <h1 className="text-5xl font-extrabold mt-10 mb-3">Current Market</h1>
      <table className="w-full table-auth bg-slate-200 rounded-2xl border-collapse text-left align-top">
        <thead className="">
          <tr className="">
            {labels.map((label, i) => (
              <th key={i} className="text-xl">
                <p className="px-5 pt-5 pb-5">{label}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coinsData.map((coin) => (
            <CoinInf coin={coin} key={coin.uuid} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CoinInf = ({ coin }) => {
  const data = {
    labels: coin.sparkline,
    datasets: [
      {
        label: "Bitcoin Behavior",
        data: coin.sparkline.map((variation) => Number(variation).toFixed(2)),
        borderColor: "#686de0",
        backgroundColor: "#686de0",
        pointColor: "#4834d4",
        fill: false,
        lineTension: 0.1,
        pointRadius: 0,
        borderWidth: 6,
        borderJoinStyle: "miter",
      },
    ],
  };
  return (
    <tr className="text-xl">
      <th className="">
        <section className="padding-section-table flex">
          <img src={coin.iconUrl} alt={coin.name} className="w-14 h-14" />
          <p className="font-semibold flex items-center ml-4">{coin.symbol}</p>
        </section>
      </th>

      <th>
        <p className="padding-section-table font-semibold">{coin.name}</p>
      </th>

      <th>
        <p className="padding-section-table font-semibold">
          {Number(coin.price).toFixed(2)}
        </p>
      </th>

      <th>
        <p
          className={`padding-section-table font-semibold ${
            coin.change >= 0 ? "text-black" : "text-red-500"
          }`}
        >
          {coin.change}
        </p>
      </th>

      <th>
        <Line
          options={options}
          data={data}
          redraw={true}
          className="padding-section-table"
        />
      </th>
    </tr>
  );
};

export default CurrentMarket;
