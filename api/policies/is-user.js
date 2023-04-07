module.exports = function (req, res, proceed) {
  if (req.session.userId) {
    return proceed();
  }
  return res.redirect("/signup");
};
