//express
// mongoclient
// connection
// all course routes

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

// set up a connectio to db/collection eSchool
// (res) => {
//     return MongoClient.connect(
//       'mongodb://localhost:27017/eSchool', {
//         useNewUrlParser: true
//       },
//       (err, db) => {
//         if (err) {
//           return console.log(err);
//         }
//         res(db);
//       })
//   }
const connection = (res)=>{
    return MongoClient.connect(
        'mongodb://localhost:27017/eSchool',{
            useNewUrlParser:true
        },
        (err,db)=>{
            if(err){
                return console.log(err);
            }
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

//api/courses
router.get('/courses', (req, res) => {   
    connection((db)=>{
      db.collection('course')
      .find()
      .toArray()
      .then(
          (records)=>{
              response.data=records;
              response.status=200;
              response.message = 'we got what we wanted';
              console.log(records);
               res.json(response);
        },
        (err) => {
                sendError(err, res);
        }); 
    });
});
  
  
module.exports = router;


















  // let courses=[
    //     {
    //       id: '099994fa-1be8-4bc7-8e65-28fbac12215c',
    //       routeName: 'angular-7-framework-basic-to-advance-step-by-step-live-project',
    //       name: 'Angular 7 Framework: Hackathon',
    //       description: 'Build a real e-commerce app with Angular 7 by using HTML 5, CSS3, Javacript, Nodejs, Angular, Bootstarp',
    //       keyPoints: [
    //         'Establish yourself as a skilled UI professional developer in no time',
    //         'Build real-world Angular applications on your own',
    //         'Meet with the power of publisher & subscriber concept'],
    //        rate: 4.5,rateOutOf:Math.floor(1000 + Math.random() * 100),
       
    //       price: 15000, newPrice: 8250,
    //       trainer: 'XYZ',
    //       isCareerCourse: true, imgSrc: '../../../assets/img/courses/099994fa-1be8-4bc7-8e65-28fbac12215c.jpg',
    //       courseType: 'career'
    //     },
    //     {
    //       id: 'bd614c4c-6e26-4a8e-ad10-61f32e21a14a',
    //       routeName: 'react-web-developer-course-with-redux-basic-to-advance-step-by-step-live-project',
    //       name: 'React Web Developer Course with Redux',
    //       description: 'Learn how to build and launch React web applications using HTML 5, CSS3, Javacript, Nodejs, React v16, Redux, Webpack, React-Router v4, Bootstarp!',
    //       keyPoints: [
    //         'Establish yourself as a skilled UI professional developer',
    //         'Use ES6/ES7 next generation JavaScript',
    //         'Learn state management  authentication and user accounts'],
    //        rate: 4.5,rateOutOf:Math.floor(1000 + Math.random() * 100),
    //       price: 15000, newPrice: 8250,
    //       trainer: 'XYZ',
    //       isCareerCourse: true, imgSrc: '../../../assets/img/courses/bd614c4c-6e26-4a8e-ad10-61f32e21a14a.jpg', 
    //       courseType: 'career'
    //     },
    //     {
    //       id: 'BF061236-AF07-4759-9D3A-69EFD237A074',
    //       routeName: 'full-stack-development-MERN-stack-with-react-basic-to-advance-step-by-step-live-project',
    //       name: 'Full Stack Development:MERN Stack',
    //       description: 'Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.',
    //       keyPoints: ['Create boilerplate starter projects with React, Redux, Express, MongoDB, HTML, CSS3 & Bootstrap 4',
    //         'Understand common web technologies and design patterns to connect them together',
    //         'Master deployment techniques between the production and development environments'],
    //        rate: 4.6,rateOutOf:Math.floor(1000 + Math.random() * 100),
    //       price: 15000, newPrice: 8250,
    //       trainer: 'XYZ',
    //       isCareerCourse: true, imgSrc: '../../../assets/img/courses/BF061236-AF07-4759-9D3A-69EFD237A074.jpg', 
    //       courseType: 'career'
    //     },
    //     {
    //       id: '0ac006d6-ed9c-465d-afc8-3c2c73d38329',
    //       routeName: 'ionic-framework-4-mobile-development-with-angular-basic-to-advance-step-by-step-live-project',
    //       name: 'Ionic Framework 4',
    //       description: 'Build iOS, Android & Web Apps with Ionic 4 & Angular 7',
    //       keyPoints: [
    //         'Build native apps and progressive web apps from one and the same codebase',
    //         'Build native apps for iOS and Android, using Angular and the powerful features Ionic 4 offers',
    //         'Dive deeper into Ionic 4 to learn more about core and advanced features'],
    //        rate: 4.6,rateOutOf:Math.floor(1000 + Math.random() * 100),
    //       price: 15000, newPrice: 8250,
    //       trainer: 'XYZ',
    //       isCareerCourse: true, imgSrc: '../../../assets/img/courses/0ac006d6-ed9c-465d-afc8-3c2c73d38329.jpg', 
    //       courseType: 'career'
    //     },
    //     {
    //       id: 'ce764aad-4c0e-440a-b292-d0d971ab78c0',
    //       routeName: 'full-stack-development-MEAN-stack-with-angular-basic-to-advance-step-by-step-live-project',
    //       name: 'MEAN Stack: Full stack Development',
    //       description: 'Build and deploy fullstack web apps with NodeJS, Angular 7, Express, MongoDB, HTML, CSS3 & Bootstrap 4',
    //       keyPoints: ['Create boilerplate starter projects with  Angular 7, Express, and Mongo',
    //         'Understand common web technologies and design patterns to connect them together',
    //         'Master deployment techniques between the production and development environments'],
    //        rate: 4.6,rateOutOf:Math.floor(1000 + Math.random() * 100),
    //       price: 15000, newPrice: 8250,
    //       trainer: 'XYZ',
    //       isCareerCourse: true, imgSrc: '../../../assets/img/courses/ce764aad-4c0e-440a-b292-d0d971ab78c0.jpg', 
    //       courseType: 'career'
    //     }
    // ];  
  