module.exports = {
  index: (req, res) => {
    try {
      res.render("index", {
        name: req.session.user.name,
        title: "Halaman Dashboard",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
