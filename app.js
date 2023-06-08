const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const foodTypeRouter = require("./routes/foodtype.routes");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/food-type", foodTypeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, "Halaman tidak ditemukan"));
});

// error handler
app.use(function (err, req, res, next) {
    return res.status(err.status).send({ info: { status: err.name, message: err.message }, data: "" });
});

module.exports = app;
