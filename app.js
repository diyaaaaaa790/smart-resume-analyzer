const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Resume Analyzer API Running"
    });
});

module.exports = app;