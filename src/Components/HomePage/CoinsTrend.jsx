import { BsCurrencyBitcoin } from "react-icons/bs";

const CoinsTrend = ({ coinsTrend }) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4 grid-rows-1 w-full rounded-lg bg-colorButtonBg mt-10 ">
      {coinsTrend.map((coin, i) => (
        <CoinBlock coin={coin} key={i} />
      ))}
    </div>
  );
};

const CoinBlock = ({ coin }) => {
  return (
    <section className="flex flex-col rounded-lg justify-center items-center space-y-2 fill-white py-5 px-5 text-center col-span-1 duration-300 transition-all text-white hover:bg-white hover:text-black hover:-translate-y-5 hover:fill-black">
      <BsCurrencyBitcoin size={50} />
      <h1 className="text-xl font-semibold col-span-1">{coin}</h1>
      <p>
        <strong className="font-semibold">22</strong> ofers from{" "}
        <strong className="font-semibold">4%</strong> per month
      </p>
    </section>
  );
};

export default CoinsTrend;
