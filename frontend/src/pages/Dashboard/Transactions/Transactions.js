import React, { useState } from "react";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [filterDate, setFilterDate] = useState("");
  const [orderId, setOrderId] = useState("");

  const tabs = ["All", "Completed", "Incomplete", "Failed", "Refund", "Archive"];

  // Sample transaction data (for demonstration)
  const transactions = [
    {
      orderId: "125C2CHC",
      date: "2025-01-26",
      title: "Career Skills",
      offeredBy: "TCS iON",
      price: "Free",
      status: "Completed",
    },
  ];

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle filter by date and order ID
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesDate = filterDate
      ? new Date(transaction.date).toISOString().split("T")[0] === filterDate
      : true;
    const matchesOrderId = orderId
      ? transaction.orderId.toLowerCase().includes(orderId.toLowerCase())
      : true;
    const matchesTab =
      activeTab === "All" || transaction.status === activeTab;
    return matchesDate && matchesOrderId && matchesTab;
  });

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-4">Transactions</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 text-sm md:text-base border-b pb-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`text-blue-600 font-medium pb-1 transition-all duration-200 ${
              activeTab === tab ? "border-b-2 border-blue-600" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <select className="border p-2 rounded-full w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">Filter by All</option>
          <option>past 1 month</option>
          <option>past 2 months</option>
          <option>past 3 months</option>
        </select>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <input
            type="date"
            className="border p-2 rounded-full w-full sm:w-auto border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Transaction Date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 rounded-full w-full sm:w-auto border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
        </div>
      </div>

      {/* Transaction Cards */}
      {filteredTransactions.length > 0 ? (
        filteredTransactions.map((transaction, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <div className="text-sm">
                <p>
                  <span className="font-semibold">Order ID:</span>{" "}
                  {transaction.orderId}...
                </p>
                <p>
                  <span className="font-semibold">Order Placed On:</span>{" "}
                  {new Date(transaction.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="text-sm text-blue-600 font-semibold mt-2 sm:mt-0">
                {transaction.price}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src="https://img.freepik.com/premium-vector/online-training-courses-landing-page-design-concept_254538-184.jpg"
                alt={transaction.title}
                className="w-40 h-30 object-cover rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">{transaction.title}</p>
                <p className="text-sm text-gray-500">
                  Offered by: {transaction.offeredBy}
                </p>
                <p className="text-sm text-blue-600 font-semibold mt-1">
                  {transaction.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4 text-center text-gray-500">
          No transactions found.
        </div>
      )}
    </div>
  );
};

export default Transactions;