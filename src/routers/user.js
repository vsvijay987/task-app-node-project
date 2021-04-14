const express = require("express");

const User = require("../models/user");
const auth = require("../middleware/auth")

const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({user, token});
  } catch (e) {
    res.status(400).send(e);
  }

  // user.save().then(() => {
  //     res.status(201).send(user)
  // }).catch(err => {
  //     res.status(400).send(err);
  // })
});

router.post("/users/login", async (req, res) => {
  try{
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({user, token})
  } catch(e){
    res.status(400).send();
  }
})

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user)

  // User.find({}).then((users) => {
  //     res.send(users)
  // }).catch(e => {
  //     res.status(500).send();
  // })
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) res.status(404).send();
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }

  // User.findById(_id).then((user) => {
  //     if(!user) return res.status(404).send()
  //     res.send(user)
  // }).catch(e => res.status(500).send())
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "password", "email"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    const user = await User.findById(req.params.id);
    updates.forEach(update => user[update] = req.body[update]);

    await user.save();

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
