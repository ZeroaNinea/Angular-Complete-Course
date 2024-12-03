const router = require("express").Router();
const User = require("../models/user");
// const passport = require("passport");
const utils = require("../lib/utils");

router.get(
  "/protected",
  // passport.authenticate("jwt", { session: false }),
  utils.authMiddleware,
  (req, res, next) => {
    console.log(req.jwt);
    res.status(200).json({ success: true, msg: "You are authorized!" });
  }
);

router.post("/login", (req, res, next) => {
  User.findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (!user) {
        res
          .status(401)
          .json({ success: false, msg: "Could not find the user." });
      }

      const isValid = utils.validPassword(
        req.body.password,
        user.hash,
        user.salt
      );

      if (isValid) {
        const tokenObject = utils.issueJWT(user);

        res.status(200).json({
          success: true,
          user: user,
          token: tokenObject.token,
          expiresIn: tokenObject.expires,
        });
      } else {
        res
          .status(401)
          .json({ success: false, msg: "You entered a wrong password." });
      }
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/register", (req, res, next) => {
  const saltHash = utils.genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = User.build({
    username: req.body.username,
    hash: hash,
    salt: salt,
  });

  newUser
    .save()
    .then((user) => {
      const jwt = utils.issueJWT(user);

      res.json({
        success: true,
        user: user,
        token: jwt.token,
        expiresIn: jwt.expires,
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
