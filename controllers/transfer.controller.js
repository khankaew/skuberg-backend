const db = require("../database");

exports.getAll = async (req, res) => {
  const transfers = await db.transfer.findMany({
    include: {
      from_wallet: {
        select: {
          id: true,
          address: true,
          balance: true,
          currency: true,
        },
      },
      to_wallet: {
        select: {
          id: true,
          address: true,
          balance: true,
          currency: true,
        },
      },
    },
  });

  res.json(transfers);
};
