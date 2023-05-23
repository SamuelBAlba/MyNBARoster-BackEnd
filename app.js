const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const PlayersController = require('./Controllers/PlayersController.js')

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use("/players", PlayersController)

app.get("/", (req, res) => {
    res.send("Welcome to My NBA Roster App");
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" });
})

module.exports = app;
