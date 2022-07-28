const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  // console.log("hello");
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  if (!authHeader) {
    return res.status(401).json("");
  }
  // console.log(authHeader);
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json("Session has expired.Please login again");
  }
  // console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(404).json("Session has expired.Please login again");
    }

    req.session.user = user;
    next();
  });
};

module.exports = verifyJWT;
