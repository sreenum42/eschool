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
router.post('/addstudent', (req, res) => {
  // console.log("the request body is....");
  // console.log("padma"+ req.body);
  // res.json(req.body);
  connection((db) => {
    db.collection('Students')
      .insertOne(req.body)
      .then((record) => {
        console.log("I am inside success ... check data base ");
        response.data = record;
        response.status = 200;
        response.message = 'record inserted successfully !';
        res.json(response)
      }).catch((err) => {
      sendError(err, res);
    });
  });
});

// db.collection("Students").deleteOne({'_id': req.body._id})
//       .then((record) => {
//         console.log(" Yes I am success ! ");
  router.post('/updatestudent', (req, res) => {
    // console.log("the request body is....");
    // console.log("padma "+ req.body._id);
    connection((db) => {
      db.collection('Students')
       .updateOne({'_id':req.body._id }, {$set:{'FirstName': req.body.FirstName, 
       'LastName': req.body.LastName,
       'PhoneNo': req.body.PhoneNo,
       'Email' : req.body.Email,
       'City'  :req.body.City,
       'Country' :req.body.Country,
       'Password' :req.body.Password,
       'StudentId' :req.body.StudentId

      }}
      ) 
        .then((record) => {
          console.log("I am insideupdate ... check data base ");
          response.data = record;
          response.status = 200;
          response.message = 'record updated successfully !';
          res.json(response);
         
        }).catch((err) => {
        sendError(err, res);
      });
    });
  });

router.get('/getAllStudent', (req, res) => {
  connection((db) => {
    db.collection('Students').find().toArray().then(record => {
      response.data = record;
      response.status = 200;
      response.message = 'get record  successfully !';
      // console.log( response.data);
     
      res.json(response);

    }).catch((err) => {
      sendError(err, res);
    })
  })

});



router.post('/deleteStudent', (req, res) => {

  // console.log('ready to call database');
  // console.log("padma going to remove " + req.params.id);
 //  console.log("going to remove " + req.body._id);
  connection((db) => {
 
    db.collection("Students").deleteOne({'_id': req.body._id})
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


//getStudentById


router.get('/getStudentById/:id', (req, res) => {
  console.log("[/getTeacherById/:id]", req.params.id);
  connection((db) => {
    db.collection('Students').
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

module.exports = router;
