// step 1 install express
// step 2 import/requrie
//step 3 pass express to a global variable ex app
//step 4 step setup static directory
//step 5 setup default route

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// const userApi=require('./server/routes/userApi');
// const employeeApi=require('./server/routes/employeeApi');
//const courseApi=require('./server/routes/courseApi');
const signupApi = require('./server/routes/signupAPI');
const addStudentApi = require('./server/routes/addstudentAPI');
const teacherApi = require('./server/routes/teacherAPI');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/eSchool')));

//parse all post data into json
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// all your user routes

//app.use('/api',courseApi);
app.use('/api', signupApi);
app.use('/api', addStudentApi);
app.use('/api', teacherApi);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/eSchool/index.html'));
  //res.send("welcome to angular application");
});

// creating a server and passing application to it
const server = http.createServer(app);

const port = process.env.PORT || '3000';

server.listen(port, () => {
  console.log('server is listening at port ' + port);
});
