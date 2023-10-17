const express = require("express");
const { addTransaction, getAllTransaction ,editTransaction,deleteTransaction} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add transaction POST method
router.post("/add-transaction",addTransaction);
router.post("/edit-transaction",editTransaction);
router.post("/get-transaction",getAllTransaction);
router.post("/delete-transaction",deleteTransaction);
module.exports = router;