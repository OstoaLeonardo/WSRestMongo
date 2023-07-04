const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
    },
    age: {
        type: Number,
        required: [true, "Age is required!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
    }
});

module.exports = mongoose.model("User", userSchema);
