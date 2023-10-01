const express = require("express");
const CollegianRouter = express.Router();
const {
  hello,
  signup,
  signin,
  logout,
  demo,
  complete_profile,
} = require("../controllers/controller");
const { studentAuth, adminAuth } = require("../middleware/auth");
const { stu_attendance } = require("../controllers/student_controller");

CollegianRouter.get("/", hello);
CollegianRouter.post("/signup", signup);
CollegianRouter.post("/signin", signin);
CollegianRouter.post("/profile", studentAuth, complete_profile);

CollegianRouter.get("/demo", adminAuth, demo);

CollegianRouter.get("/attendance", studentAuth, stu_attendance);

CollegianRouter.get("/logout", logout);
//Super Admin Users
// CollegianRouter.get("/master/");
// CollegianRouter.post("/master/");

// //Department HoD
// CollegianRouter.get("/");

//Teachers

//Students

module.exports = CollegianRouter;
