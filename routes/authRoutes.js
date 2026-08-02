const express = require("express");
const router = express.Router();


const register = require("../controllers/registerController");
const login = require("../controllers/loginController");
const authMiddleware = require("../middleware/authMiddleware");



router.post("/register", register);
router.post("/login", login);



router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome",
    user: req.user,
  });
});

module.exports = router;