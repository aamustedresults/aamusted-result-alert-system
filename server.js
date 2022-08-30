require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db = require("./db/DBConnection");
const studentRoute = require("./routes/studentRoute");
const departmentRoute = require("./routes/departmentRoute");
const lecturerRoute = require("./routes/lecturerRoute");
const programmeRoute = require("./routes/programmeRoute");
const courseRoute = require("./routes/courseRoute");
const resultRoute = require("./routes/resultRoute");
const userRoute = require("./routes/userRoute");
const registeredCoursesRoute = require("./routes/registeredCoursesRoute");
const assignedCourseRoute = require("./routes/assignedCourseRoute");

//initialize express
const app = express();

//server port
const port = process.env.PORT || 8000;

//static path
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve("images", __dirname)));
//middlewares
app.use(cookieParser());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== "productuction") {
  app.use(logger("dev"));
}
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

//routes
app.use("/user", userRoute);
app.use("/department", departmentRoute);
app.use("/lecturer", lecturerRoute);
app.use("/student", studentRoute);
app.use("/programme", programmeRoute);
app.use("/course", courseRoute);
app.use("/result", resultRoute);
app.use("/registered", registeredCoursesRoute);
app.use("/assigned_course", assignedCourseRoute);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

db.asPromise()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}!`));
  })
  .catch((error) => {
    console.log(error.reason.servers);
    // throw error;
  });
