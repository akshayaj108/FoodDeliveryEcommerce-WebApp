const Menu = require("../../models/menu");
const homeController = () => {
  return {
    async index(req, res) {
      const result = await Menu.find();
      console.log(result);
      res.render("home", { result: result });
    },
  };
};
module.exports = homeController;
