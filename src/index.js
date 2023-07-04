const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// routes
app.use(express.json());
app.use("/api", router);

// routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// mongoose
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

app.listen(3000, () =>
    console.log(`Server is running on http://localhost:${port}`)
);
