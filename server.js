require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const studentRoute = require("./routes/studentRoute");
const departmentRoute = require("./routes/departmentRoute");
const programmeRoute = require("./routes/programmeRoute");
const courseRoute = require("./routes/courseRoute");
const resultRoute = require("./routes/resultRoute");
const userRoute = require("./routes/userRoute");
const registeredCoursesRoute = require("./routes/registeredCoursesRoute");
const db = require("./db/DBConnection");

//initialize express
const app = express();

//server port
const port = 8000;

//static path
app.use(express.static(path.resolve("images", __dirname)));
//middlewares
app.use(cookieParser());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false}

  })
);

//routes
app.use("/user", userRoute);
app.use("/student", studentRoute);
app.use("/department", departmentRoute);
app.use("/programme", programmeRoute);
app.use("/course", courseRoute);
app.use("/result", resultRoute);
app.use("/registered", registeredCoursesRoute);

app.get("/", (req, res) => res.send("Hello World!"));

db.asPromise()
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(port, () => console.log(`listening on port ${port}!`));
  })
  .catch((error) => console.log(error));
