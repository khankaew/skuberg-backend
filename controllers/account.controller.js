const db = require("../database");

exports.getAll = async (req, res) => {
  const accounts = await db.account.findMany({
    include: {
      wallets: {
        include: {
          currency: true,
        },
      },
    },
  });

  res.json(accounts);
};
