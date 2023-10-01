const Details_Fetch = require("../models/model");
const jwt = require("jsonwebtoken");

//Attendance - Student checking their attendance
exports.stu_attendance = (req, res) => {
  const token = jwt.verify(req.cookies.access_token, "HelloAllHi");
  return res.json({ message: token.id });
};

//Marks

//Subjects + Timetable

//Proctor Diary
