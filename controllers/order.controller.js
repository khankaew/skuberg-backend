const db = require("../database");

exports.getOrders = async (req, res) => {
  const orders = await db.order.findMany({
    include: {
      account: true,
      currency: true,
      buyTransactions: true,
      sellTransactions: true,
    },
  });

  const filteredOrders = orders.map((order) => {
    if (order.order_type === "SELL") {
      return {
        ...order,
        buyTransactions: [],
      };
    } else if (order.order_type === "BUY") {
      return {
        ...order,
        sellTransactions: [],
      };
    } else {
      return {
        ...order,
      };
    }
  });

  res.json(filteredOrders);
};

exports.getTransactions = async (req, res) => {
  const transactions = await db.transaction.findMany({
    include: {
      buy_order: true,
      sell_order: true,
    },
  });

  res.json(transactions);
};
