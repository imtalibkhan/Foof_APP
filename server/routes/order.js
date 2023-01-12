import express from "express";
import { getAdminOrders, getMyorders, getOrderDetails, placeOrder, placeOrderOnline, processOrder } from "../controllers/order.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/createorder",placeOrder);

router.post("/createorderonline", placeOrderOnline)

router.get("/myorders",isAuthenticated,getMyorders);

router.get("/order/:id",isAuthenticated,getOrderDetails);


//admin middlwaress
router.get("/admin/orders", isAuthenticated,authorizedAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated,authorizedAdmin, processOrder);



export default router;