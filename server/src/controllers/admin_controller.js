const Details_Fetch = require("../models/model");
const jwt = require("jsonwebtoken");

//Add Courses
exports.add_course = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Please enter valid Details",
    });
  }

  try {
    const course_det = new Details_Fetch({});
  } catch {}
};

//Add HoD

//Add Subjects
exports.add_subject = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Please enter valid Details",
    });
  }

  try {
    const sub_details = new Details_Fetch({
      sub_no: req.body.sub_no,
      sub_name: req.body.sub_name,
      course_no: req.body.course_no,
    });
  } catch {}
};
