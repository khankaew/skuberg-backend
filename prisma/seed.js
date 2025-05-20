const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const currency = await prisma.currency.findMany();
  if (currency.length === 0) {
    await prisma.currency.createMany({
      data: [
        { currency_name: "USD" },
        { currency_name: "THB" },
        { currency_name: "BTC" },
        { currency_name: "ETH" },
        { currency_name: "XRP" },
        { currency_name: "DOGE" },
      ],
    });
  }

  const account = await prisma.account.findMany();
  if (account.length === 0) {
    await prisma.account.createMany({
      data: [
        {
          username: "userA",
          password:
            "$2y$10$7iY6HR9sgqrC7azs3EwZC.x/ZYOEk4yG4K9Ht6r75Shol.rXZHld2",
        },
        {
          username: "userB",
          password:
            "$2y$10$7iY6HR9sgqrC7azs3EwZC.x/ZYOEk4yG4K9Ht6r75Shol.rXZHld2",
        },
        {
          username: "userC",
          password:
            "$2y$10$7iY6HR9sgqrC7azs3EwZC.x/ZYOEk4yG4K9Ht6r75Shol.rXZHld2",
        },
      ],
    });
  }

  const wallet = await prisma.wallet.findMany();
  if (wallet.length === 0) {
    await prisma.wallet.createMany({
      data: [
        {
          account_id: 1,
          currency_id: 1,
          address: "wallet-usd-userA",
          balance: 100000,
        },
        {
          account_id: 1,
          currency_id: 3,
          address: "wallet-btc-userA",
          balance: 10,
        },
        {
          account_id: 1,
          currency_id: 4,
          address: "wallet-eth-userA",
          balance: 2000,
        },

        {
          account_id: 2,
          currency_id: 1,
          address: "wallet-usd-userB",
          balance: 100000,
        },
        {
          account_id: 2,
          currency_id: 3,
          address: "wallet-btc-userB",
          balance: 10,
        },
        {
          account_id: 2,
          currency_id: 4,
          address: "wallet-eth-userB",
          balance: 2000,
        },

        {
          account_id: 3,
          currency_id: 1,
          address: "wallet-usd-userC",
          balance: 100000,
        },
        {
          account_id: 3,
          currency_id: 3,
          address: "wallet-btc-userC",
          balance: 10,
        },
        {
          account_id: 3,
          currency_id: 4,
          address: "wallet-eth-userC",
          balance: 2000,
        },
      ],
    });
  }

  const transfer = await prisma.transfer.findMany();
  if (transfer.length === 0) {
    await prisma.transfer.createMany({
      data: [
        {
          transfer_type: "INTERNAL",
          from_address: "wallet-btc-userA",
          to_address: "wallet-btc-userB",
          coin_amount: 1.5001,
        },
        {
          transfer_type: "WITHDRAW",
          from_address: "wallet-btc-userA",
          to_address: "wallet-btc-other",
          coin_amount: 1.5001,
        },
        {
          transfer_type: "DEPOSIT",
          from_address: "wallet-btc-other",
          to_address: "wallet-btc-userB",
          coin_amount: 1.5001,
        },
      ],
    });
  }

  const order = await prisma.order.findMany();
  if (order.length === 0) {
    await prisma.order.createMany({
      data: [
        {
          order_type: "BUY",
          account_id: 1,
          currency_id: 3,
          amount_init: 10,
          usd_init: 1000000,
          amount_balance: 0,
          usd_balance: 0,
          status: "SUCCESS",
        },
        {
          order_type: "SELL",
          account_id: 2,
          currency_id: 3,
          amount_init: 10,
          usd_init: 0,
          amount_balance: 0,
          usd_balance: 1000000,
          status: "SUCCESS",
        },

        {
          order_type: "SELL",
          account_id: 2,
          currency_id: 3,
          amount_init: 10,
          usd_init: 0,
          amount_balance: 0,
          usd_balance: 1000000,
          status: "SUCCESS",
        },
        {
          order_type: "BUY",
          account_id: 1,
          currency_id: 3,
          amount_init: 2,
          usd_init: 200000,
          amount_balance: 2,
          usd_balance: 0,
          status: "SUCCESS",
        },
        {
          order_type: "BUY",
          account_id: 3,
          currency_id: 3,
          amount_init: 8,
          usd_init: 800000,
          amount_balance: 8,
          usd_balance: 0,
          status: "SUCCESS",
        },

        {
          order_type: "BUY",
          account_id: 1,
          currency_id: 3,
          amount_init: 5,
          usd_init: 500000,
          amount_balance: 0,
          usd_balance: 500000,
          status: "WAIT",
        },
      ],
    });
  }

  const transaction = await prisma.transaction.findMany();
  if (transaction.length === 0) {
    await prisma.transaction.createMany({
      data: [
        {
          buy_order_id: 1,
          sell_order_id: 2,
          currency_price: 100000,
          amount: 10,
          price_usd: 1000000,
        },
        {
          buy_order_id: 2,
          sell_order_id: 3,
          currency_price: 100000,
          amount: 2,
          price_usd: 200000,
        },
        {
          buy_order_id: 5,
          sell_order_id: 3,
          currency_price: 100000,
          amount: 8,
          price_usd: 800000,
        },
      ],
    });
  }

  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
