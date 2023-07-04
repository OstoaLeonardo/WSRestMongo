const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Get all users
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Get a user by id
router.get("/users/:id", (req, res) => {
    userSchema
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Add a user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Update a user
router.put("/users/:id", (req, res) => {
    userSchema
        .updateOne({ _id: req.params.id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Delete a user
router.delete("/users/:id", (req, res) => {
    userSchema
        .deleteOne({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

module.exports = router;
