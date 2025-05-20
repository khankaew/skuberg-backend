const db = require("../database");

exports.getAll = async (req, res) => {
  const transfers = await db.transfer.findMany();
  const wallets = await db.wallet.findMany();

  const transfersWithWallets = transfers.map(transfer => ({
    ...transfer,
    fromWallet: wallets.find(w => w.address === transfer.from_address) || null,
    toWallet: wallets.find(w => w.address === transfer.to_address) || null,
  }));

  res.json(transfersWithWallets);
};
