//Importing express from package.json
const express = require("express");
const router = express.Router();

//Importing functions from auth.js.
const {
  register,
  verify,
  login,
  sendResetPasswordLink,
  verifyEmail,
  changePass,
} = require("../controllers/auth");

//Creating HTTP request methods with express router.
router.route("/api/register").post(register);

router.route("/api/verify/:id").get(verify);

router.route("/api/login").post(login);

router.route("/api/sendResetPasswordLink").post(sendResetPasswordLink);

router.route("/api/verifyEmail/:id").get(verifyEmail);

router.route("/api/changePass/:id").get(changePass);

//Exporting router.
module.exports = router;
