const { User } = require("../model/user");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
//post
router.post("/register", async (req, res) => {
  let user = new User({
    name: req.body.name,
    phone: req.body.phone,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  user = await user.save();
  res.send(user);
});
router.post("/login", async (req, res) => {
  const user = await User.findOne({ name: req.body.name });
  if (!user) {
    return res.status(400).send("Error can't find username");
  }
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.status(200).send("Login Success");
  } else {
    res.status(401).send("Login fail");
  }
});
// get
router.get("/users", async (req, res) => {
  const user = await User.find().select("-password"); //select -password เลือกที่จะไม่แสดงข้อมูลนี้
  res.send(user);
});

//Put Update
router.put("/user/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    { new: true }
  );
  res.send(user);
});

//Delete
router.delete("/user/:id", async (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).json({ success: true, message: "Deleted" });
      } else {
        return res.status(404).json({ success: false, message: "Can't find" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err: err });
    });
});

module.exports = router;
