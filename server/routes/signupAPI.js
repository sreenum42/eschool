const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
//const MongoClient = require('mongodb@2.2.33');
const ObjectId = require('mongodb').ObjectID;



const connection = (res) => {
    return MongoClient.connect(
        'mongodb+srv://admin:admin@cluster0-h5kdm.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true },
        (err, mongodb) => {
            if (err) {
                return console.log(err);
            }
            var db = mongodb.db('eSchoolDB');
            res(db);
        })
}

let response = {
    status: 0,
    data: [],
    message: null
}
let sendError = (err, res) => {
    response.status = 501;
    response.message = 'error occurred due to ' + err.message;
    response.data = [];
    res.status(501).json(response);
}
router.get('/users', (req, res) => {
    console.log("[users]");
    connection((db) => {
        db.collection('Users')
            .find()
            .toArray()
            .then(
                (records) => {
                    response.data = records;
                    response.status = 200;
                    response.message = 'we got what we wanted';
                    console.log(records);
                    res.json(response);
                },
                (err) => {
                    sendError(err, res);
                });
    });
});
router.get('/userById/:id', (req, res) => {
    console.log("[/user/:id]", req.params.id);
    connection((db) => {
        db.collection('Users')
            .findOne({
                '_id': ObjectId(req.params.id)
            })
            .then(
                (records) => {
                    response.data = records;
                    response.status = 200;
                    response.message = 'we got what we wanted';
                    console.log(records);
                    res.json(response);
                },
                (err) => {
                    sendError(err, res);
                });
    });
});
router.get('/userByEmail/:em', (req, res) => {
    console.log("[/user/:em]", req.params.em);
    console.log("[users]");
    connection((db) => {
        db.collection('Users')
            .findOne({
                'Email': req.params.em
            })
            .then(
                (records) => {
                    response.data = records;
                    response.status = 200;
                    response.message = 'we got what we wanted';
                    console.log(records);
                    res.json(response);
                },
                (err) => {
                    sendError(err, res);
                });
    });
});
router.get('/userByMobile/:mb', (req, res) => {
    console.log("[/user/:mb]", req.params.mb);
    console.log("[users]");
    connection((db) => {
        db.collection('Users')
            .findOne({
                'Mobile': req.params.mb
            })
            .then(
                (records) => {
                    response.data = records;
                    response.status = 200;
                    response.message = 'we got what we wanted';
                    console.log(records);
                    res.json(response);
                },
                (err) => {
                    sendError(err, res);
                });
    });
});
// router.get('/signup');
router.post('/signup', (req, res) => {
    console.log(req.body);
    res.json(req.body);
    connection((db) => {
        db.collection('user')
            .insert(req.body)
            .then((record) => {
                response.data = record;
                response.status = 200;
                response.message = 'record inserted successfully !'
                res.json(response)
            }).catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/removeUserById', (req, res) => {
    console.log(req.body);
    res.json(req.body);
    connection((db) => {
        db.collection('Users')
        .deleteOne({
            '_id': ObjectId(req.body._id)
          })
            .then((record) => {
                response.data = record;
                response.status = 200;
                response.message = 'record inserted successfully !'
                res.json(response)
            }).catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;
