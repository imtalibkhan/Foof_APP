import Express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
// import cookieParser from "cookie-parser";


const app = Express();
export default app;
dotenv.config({
  path: "./config/config.env",
});

//using middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());


connectPassport();

//importing routes

import userRoute from "./routes/user.js";

//r-1
app.use("/api/v1", userRoute);




//using error middlewares
app.use(errorMiddleware)
