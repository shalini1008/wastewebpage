import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../../Component/Layout";

function History() {
  const [showAnimation, setShowAnimation] = useState(false);

  const transactions = [
    {
      id: 135010,
      date: "12:28 pm, Thu, 28 Dec",
      details: "Scheduled garbage pickup at Zone A",
      img: "/qrr.png",
    },
    {
      id: 192761,
      date: "7:02 pm, Mon, 18 Dec",
      details: "Scheduled garbage pickup at Zone B",
      img: "/qrr.png",
    },
    {
      id: 172826,
      date: "11:30 am, Sun, 9 Dec",
      details: "Cancelled pickup at Zone A",
      img: "/qrr.png",
    },
  ];

  const handleFirstTransactionClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false); // Hide animation after completion
    }, 10000); // Animation duration (5 seconds)
  };

  return (
    <Layout>
      <div className="relative max-w-4xl mx-auto p-6 bg-gray-900 text-white shadow-md rounded-lg">
        <h2 className="text-4xl font-medium text-green-400">Transaction History</h2>
        <hr className="mt-4 mb-8 w-16 border-2 rounded-e border-green-400" />
        <ul className="space-y-8">
          {transactions.map((transaction, index) => (
            <li
              key={transaction.id}
              className={`p-6 bg-gray-800 rounded-md ${
                index === 0 ? "cursor-pointer hover:bg-gray-700" : ""
              }`}
              onClick={index === 0 ? handleFirstTransactionClick : undefined}
            >
              <div className="flex flex-col">
                <div className="inline-block">
                  <span className="font-bold text-gray-500"> REQUEST NUMBER: </span>{" "}
                  {transaction.id}
                  <p className="py-4">
                    <span className="font-medium text-2xl">{transaction.details} </span>
                  </p>
                  <p>
                    <span className="font-light text-gray-500"> Completed On </span>{" "}
                    {transaction.date}
                  </p>
                  <button className="border-2 mt-4 px-4 rounded text-lg">
                    Rate your experience
                  </button>
                </div>
                <div className="inline-block absolute right-16">
                  <img
                    src={transaction.img}
                    alt="User Profile"
                    className="w-36 h-36"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {showAnimation && (
          <div className="absolute inset-0 flex flex-col items-center justify-start bg-[rgb(17,24,39)] bg-opacity-80 pt-20">
            <h1 className="text-3xl font-bold text-green-400 mb-4">
              Congratulations! Your waste was segregated
            </h1>
            <motion.div
              className="w-40 h-40"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <img src="/coin.png" alt="Coin" className="w-full h-full" />
            </motion.div>
            <h2 className="text-2xl font-bold text-green-400 mt-4">
              Added 5 coins to the cart!
            </h2>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default History;
