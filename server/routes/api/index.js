const router = require("express").Router();

const contactRoutes = require("./contact-rotues");
const userRoutes = require("./user-routes");

router.use("/contact", contactRoutes);
router.use("/user", userRoutes);

module.exports = router;