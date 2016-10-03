var app = require('express')();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./config/routes');
var Sequelize = require('sequelize');
var cors = require('cors');

//== test data base ===//
var User = require('../db/db-config').User;
var Link = require('../db/db-config').Link;
var Tag = require('../db/db-config').Tag;
var Like = require('../db/db-config').Like;
var Category = require('../db/db-config').Category;
//instantiate db ORM
var db = require('../db/db-config').db;

db.authenticate()
.then(function(){
  console.log('connected to db');
/* use below code to delete links! 
  // Link.findAll({
  //   where: {
  //     owner: 'undefined',
  //     assignee: 'undefined'
  //   }
  // })
  // .then(function(links){
  //   links.forEach(function(link){
  //     link.destroy();
  //   })
  // })
*/
  // Link.create({url: 'http://www.cnn.com/2016/10/02/politics/lebron-james-endorses-hillary-clinton/index.html', owner: '10105564501516258', assignee: '10154658058164363'})
  // .then(function(link){
  //   console.log('link created');
  // })
  // User.findById('10154660869289363')
  //   .then(function(user){
  //     User.create({fbid: '10154660869289363', fbname: 'Jordan Taylor'})
  //     .then(function(user2){
  //       console.log(user, user2, 'yolo')
  //       user.addFriend(user2);
  //     })
  //   })
})
.catch(function(err){
  console.log('sequelize connection error');
});


/* DO NOT DELETE SYNC BELOW! */
/* Uncommment portion below to resync database (drop tables)
as well as to add relational sequelize methods to it's model instances!
A few intances will be created every time to test the database */
    //COMMENT THIS OUT LATER

      // db.sync({force: true})
      //   .then(function(){
      //     console.log('sycn success!');
      //     User.create({fbid: '928374', fbname: 'Michael Wong'})
      //       .then(function(user){
      //         User.create({fbid: 'ast294r', fbname:'Squirrel'})
      //         .then(function(user2){
      //           user.addFriend(user2);
      //           Link.create({url:"www.test.com", owner:user.fbid, assignee:user2.fbid})
      //           .then(function(link){
      //             console.log('link saved!');
      //             Like.create({like: true})
      //             .then(function(like){
      //               console.log('like instance created');
      //             })
      //           })
      //         })  
      //         console.log('users saved');
      //       })
      //   })
      //   .catch(function(err){
      //     console.log(err, 'could not sync');
      //   }); // <=== force sync to refresh

//connect middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//connect routes
routes(app);

//set env variables 
var port = process.env.PORT || 8888;

app.listen(port, function(){
  console.log('app listening on port ' + port);
})