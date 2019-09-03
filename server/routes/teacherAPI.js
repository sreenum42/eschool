const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
//const MongoClient = require('mongodb@2.2.33');
const ObjectId = require('mongodb').ObjectID;


const connection = (res) => {
  return MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0-h5kdm.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true},
    (err, mongodb) => {
      if (err) {
        return console.log(err);
      }
      var db = mongodb.db('eSchoolDB');
      res(db);
    })
};

let response = {
  status: 0,
  data: [],
  message: null
};
let sendError = (err, res) => {
  response.status = 501;
  response.message = 'error occurred due to ' + err.message;
  response.data = [];
  res.status(501).json(response);
};

// router.get('/addstudent');
router.post('/addTeacher', (req, res) => {
  debugger;
  console.log("the request body is....");
  console.log(req.body);
  // res.json(req.body);
  connection((db) => {
    db.collection('Teacher')
      .insert(req.body)
      .then((record) => {
        console.log("I am inside success ... check data base ");
        response.data = null;
        response.status = 200;
        response.message = 'record inserted successfully !';
        res.json(response)
      }).catch((err) => {
      sendError(err, res);
    });
  });
});


router.get('/getAllTeacher', (req, res) => {
  connection((db) => {
    db.collection('Teacher').find().toArray().then(record => {
      response.data = record;
      response.status = 200;
      response.message = 'get record  successfully !';
      res.json(response)

    }).catch((err) => {
      sendError(err, res);
    })
  })

});


router.get('/getTeacherById/:id', (req, res) => {
  console.log("[/getTeacherById/:id]", req.params.id);
  connection((db) => {
    db.collection('Teacher').
    findOne({
      '_id': ObjectId(req.params.id)
    })
    .then(record => {
      response.data = record;
      response.status = 200;
      response.message = 'get record  successfully !';
      res.json(response)

    }).catch((err) => {
      sendError(err, res);
    })
  })

});

router.post('/updateteacher', (req, res) => {
  // console.log("the request body is....");
  console.log("padma "+ req.body._id);
  connection((db) => {
    db.collection('Teacher')
     .updateOne({'_id':ObjectId(req.body._id) }, {$set:{'teacherFirstName': req.body.teacherFirstName, 
     'teacherLastName': req.body.teacherLastName,
     'mobileNo': req.body.mobileNo,
     'teacherEmail': req.body.teacherEmail,
     'city'  :req.body.city,
     'country' :req.body.country,
     'password' :req.body.password,
     'teacherId' :req.body.teacherId,
     'status':req.body.status,
     'address':req.body.address,
     'state':req.body.state,
     'gender':req.body.gender,
     'dob':req.body.dob,
     'imgSrc':req.body.imgSrc,
     'userName':req.body.userName,
     'role':req.body.role
    }}) 
    .then((record) => {
        console.log("I am insideupdate ... check data base ");
        response.data = null;
        response.status = 200;
        response.message = 'record updated successfully !';
        res.json(response);
       
    }).catch((err) => {
      sendError(err, res);
    });
  });
});

router.post('/deleteTeacher', (req, res) => {

  console.log('ready to call database');
  console.log("going to remove " + req.body._id);

  connection((db) => {
    db.collection("Teacher").deleteOne({'_id': req.body._id})
      .then((record) => {
        console.log(" Yes I am success ! ");

        response.data = record;
        response.status = 200;
        response.message = 'record deleted successfully !';
        res.json(response)
      }).catch((err) => {
      sendError(err, res);
    });
  })
});


module.exports = router;
