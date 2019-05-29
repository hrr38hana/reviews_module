var controller = require("./controllers");
var router = require("express").Router();

router.get("/reviews", controller.reviews.get);

router.post("/reviews", controller.reviews.post);

router.get("/reviews", controller.reviews.put);

module.exports = router;
