const adminRoute = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const {
  adminAuthMiddleware,
  adminMiddleware,
} = require("../middlewares/admin.auth.middleware");

adminRoute.post("/create", AdminController.create);
adminRoute.post("/login", AdminController.loginAdmin);
adminRoute.get(
  "/get",
  adminAuthMiddleware,
  adminMiddleware,
  AdminController.getAdmin
);

module.exports = adminRoute;
