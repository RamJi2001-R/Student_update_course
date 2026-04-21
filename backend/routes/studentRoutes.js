const express = require("express");
const router = express.Router();

const {
  registerStudent,
  loginStudent,
  updatePassword,
  updateCourse
} = require("../controllers/studentController");

const protect = require("../middleware/authMiddleware");

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.put("/update-password", protect, updatePassword);
router.put("/update-course", protect, updateCourse);

module.exports = router;