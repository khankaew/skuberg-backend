const express = require("express");
const accountController = require("./controllers/account.controller");
const transferController = require("./controllers/transfer.controller");
const orderController = require("./controllers/order.controller");

const router = express.Router();

router.get("/api/accounts", accountController.getAll); // ข้อมูลบัญชีผู้ใช้

router.get("/api/transfers", transferController.getAll); // ข้อมูลการโอน

router.get("/api/orders", orderController.getOrders); // ข้อมูลการตั้งซื้อ-ขาย
router.get("/api/transactions", orderController.getTransactions); // ข้อมูลการเทรด

module.exports = router;
