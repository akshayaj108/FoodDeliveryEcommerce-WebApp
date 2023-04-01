const homeController = require("../app/http/controller/home");
const authController = require("../app/http/controller/auth");
const cartController = require("../app/http/controller/customers/cart");
const initRoutes = (app) => {
  app.get("/", homeController().index);
  app.get("/cart", cartController().index);
  app.get("/register", authController().register);
  app.get("/login", authController().login);
};

module.exports = initRoutes;
