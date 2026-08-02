const express = require("express");

const router = express.Router();

const { searchShop } = require("../controllers/searchController");

router.post("/search", searchShop);

module.exports = router;