const jwt = require("jsonwebtoken");

//Checks if the User Requesting in is - Admin
exports.adminAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (token) {
    jwt.verify(token, "HelloAllHi", (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not Authorized" });
      } else {
        if (decodedToken.role !== "A") {
          return res.status(401).json({ message: "Not Authorized" });
        } else {
          next();
        }
      }
    });
  } else {
    return res
      .status(403)
      .json({ message: "Authorization failure! Token not found" });
  }
};

//Checks if the User Requesting in is - Student
exports.studentAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (token) {
    jwt.verify(token, "HelloAllHi", (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not Authorized1" });
      } else {
        if (decodedToken.role !== "S") {
          return res.status(401).json({ message: "Not Authorized2" });
        } else {
          next();
        }
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Authorization failure! Token not found" });
  }
};

//Checks if the User Requesting in is - Staff
exports.staffAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "HelloAllHi", (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not Authorized" });
      } else {
        if (decodedToken.role !== "T") {
          return res.status(401).json({ message: "Not Authorized" });
        } else {
          next();
        }
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Authorization failure! Token not found" });
  }
};
