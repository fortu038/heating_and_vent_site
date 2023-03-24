const router = require("express").Router();

const contactRoutes = require("./contact-rotues");

router.use("/contact", contactRoutes);

module.exports = router;