const authController = () => {
  return {
    login(req, res) {
      res.render("auth/register");
    },
    register(req, res) {
      res.render("auth/login");
    },
  };
};
module.exports = authController;
