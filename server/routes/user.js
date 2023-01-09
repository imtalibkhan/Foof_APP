import express from "express";
import passport from "passport";

const router = express.Router();

//g_auth

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// our callbakc url
router.get(
  "/login",
  passport.authenticate("google", {
     scope: ["profile"],
    successRedirect: process.env.FRONTEND_URL,
  })
);

export default router;
