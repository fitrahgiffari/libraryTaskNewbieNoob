const express = require("express");
const bodyParser = require("body-parser");
const rootRoute = require("./routes/rootRoute");
const getStudent = require("./routes/student/getStudent");
const addStudent = require("./routes/student/addStudent");
const getMember = require("./routes/Member/getMember");
const addMember = require("./routes/Member/addMember");
const getBook = require("./routes/Book/getBook");
const addBook = require("./routes/Book/addBook");
const getEmployee = require("./routes/Employee/getEmployee");
const addEmployee = require("./routes/Employee/addEmployee");
const getStorage = require("./routes/Storage/getStorage");
const addStorage = require("./routes/Storage/addStorage");

const app = express();
app.use(bodyParser.json());

app.use(rootRoute);
app.use(rootRoute);
app.use(getStudent);
app.use(addStudent);
app.use(getMember);
app.use(getBook);
app.use(addBook);
app.use(getEmployee);
app.use(addEmployee);
app.use(getStorage);
app.use(addStorage);

const port = 3000;
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
});
