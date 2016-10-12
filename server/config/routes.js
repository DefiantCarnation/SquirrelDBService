var helpers = require('./helpers');


module.exports = function(app){
  app.use(require('./redirectconfig.js'));

  app.get('/test/:first', helpers.test);

  app.post('/posttest',helpers.posttest);

  app.post('/test',helpers.posttest);

  app.post('/signup', helpers.signup);

  app.post('/login/:userid', helpers.login);

  app.post('/login2', helpers.login2);

  app.post('/deserialize', helpers.deserialize);

  app.get('/links/:userid', helpers.getLinks);

  app.get('/links/friends/:friendid', helpers.getFriendsLinks);

  app.put('/links/:userid', helpers.putLinks);

  app.delete('/links/:userid', helpers.deleteLinks);

  app.get('/friends/:userid', helpers.friendsGet);

  app.get('/friends/nameOnly/:userid', helpers.friendsGetNameOnly);

  app.put('/friends/:userid', helpers.friendsPut);
  //may need to modify endpoint below.. may just route to app.put/links?
  app.put('/links/friends/:friendid/:userid', helpers.putLinksFriend);

  app.get('/search/:friend', helpers.searchFriends);

  app.put('/likes', helpers.putLike);

  app.get('/test',helpers.test)

}