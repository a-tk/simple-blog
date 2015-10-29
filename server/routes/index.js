module.exports = function (app, db) {
  app.get('/api/getPosts', getPosts);
  app.post('/api/addPost', addPost);
  app.get('/api/deletePost/:id', deletePost);
  app.post('/api/addComment/:id', addComment);

  function getPosts(req, res, next) {
    var posts = db.getPosts();
    res.send(posts);
  }

  function addPost(req, res, next) {
    db.addPost(req.body);
  }

  function addComment(req, res, next) {
    db.addComment(req.params.id, req.body);
  }

  function deletePost(req, res, next) {
    db.deletePost(req.params.id);
    res.send('ok');
  }
};
