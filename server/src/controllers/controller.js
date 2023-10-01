const Details_Fetch = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Basic '/' page to check working
exports.hello = async (req, res) => {
  console.log("HI, I think I do remember what is goin on");
  res.status(400).send({
    message: "Please enter valid details",
  });
};

//Demo route to check for Auth Working
exports.demo = async (req, res) => {
  return res.json({ message: "OK" });
};

//Sign-Up Function
exports.signup = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Please enter valid Details",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const new_user = new Details_Fetch({
      id: req.body.id,
      password: hashedPassword,
      role: req.body.role,
    });

    Details_Fetch.newUser(new_user, async (err, data) => {
      if (err) {
        res.status(500).send({ message: "Error Storing Data" });
      } else {
        res.status(200).json({ message: "Successfully Registered" });
      }
    });
  } catch {
    res.status(500).json({ message: "Error in controller" });
  }
};

//Sign-In Function
exports.signin = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Please enter valid Details",
    });
  }

  try {
    const existing_user = new Details_Fetch({
      id: req.body.id,
      password: req.body.password,
    });

    Details_Fetch.checkuser(existing_user, async (err, data) => {
      if (err) {
        return res.status(400).json({ message: "User not found" });
      } else {
        const matchPass = await bcrypt.compare(
          existing_user.password,
          data[0].password
        );

        if (!matchPass) {
          return res.status(400).json({ message: "Invalid Credintials" });
        }

        const token = jwt.sign(
          { id: existing_user.id, role: data[0].role },
          "HelloAllHi",
          { expiresIn: "1h" }
        );
        res
          .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          })
          .status(200)
          .json({ message: "Logged In Successfully" });
      }
    });
  } catch {
    res.status(500).json({ message: "Error in controller" });
  }
};

//Complete Profile Function
exports.complete_profile = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Please enter valid Details",
    });
  }

  try {
    const profile_var = new Details_Fetch({
      id: req.body.id,
      name: req.body.name,
      father_name: req.body.father_name,
      father_mob: req.body.father_mob,
      mom_name: req.body.mom_name,
      mom_mob: req.body.mom_mob,
    });

    Details_Fetch.profile(profile_var, async (err, data) => {
      if (err) {
        return res.status(400).json({ message: err });
      } else {
        return res.status(200).json({ message: "User Data Stored" });
      }
    });
  } catch {
    res.status(500).json({ message: "Error in controller" });
  }
};

//Logout Function
exports.logout = (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Bye Bye" });
};
