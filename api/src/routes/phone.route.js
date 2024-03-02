const route = require("express").Router();
const {
  createPhone,
  deletePhone,
  getPhones,
  updatePhone,
} = require("../controllers/phone");
const {
  verifyPhoneStructure,
  validatePhoneStructure,
} = require("../middlewares/phone");
const { validateToken } = require("../middlewares/token");

route.post(
  "/",
  validateToken,
  verifyPhoneStructure,
  validatePhoneStructure,
  createPhone
);
route.get("/", validateToken, getPhones);
route.delete("/:id", validateToken, deletePhone);
route.put(
  "/:id",
  validateToken,
  verifyPhoneStructure,
  validatePhoneStructure,
  updatePhone
);

module.exports = route;
