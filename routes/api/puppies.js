var express = require("express");
var router = express.Router();
var puppiesCtrl = require("../../controllers/api/puppies");

/* GET /api/puppies */
router.get("/", puppiesCtrl.index);
router.post("/", puppiesCtrl.create);
router.get("/:id", puppiesCtrl.show);
router.put("/:id", puppiesCtrl.update);
router.delete("/:id", puppiesCtrl.delete);

module.exports = router;
