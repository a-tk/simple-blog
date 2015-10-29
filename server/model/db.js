module.exports = function() {

  var fs = require('fs');
  var dbLoc = './server/data/db.json';
  var db = [];
  readFile();

  return {
    getPosts: getPosts,
    addPost: addPost,
    deletePost: deletePost,
    addComment: addComment
  };

  function readFile() {
    fs.readFile(dbLoc, 'utf8',function (err, data) {

      if (err) {
        console.log(err);
        return;
      }
      db = JSON.parse(data);
    });

  }

  function persist() {
    fs.writeFile(dbLoc, JSON.stringify(db), {flags: 'wx'}, 'utf8', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('DB Persisted');
      }
    });
  }

  function getPosts() {
    return db;
  }

  function addComment(postId, comment) {
    comment.date = new Date().toUTCString();
    db[postId].comments.unshift(comment);
    persist();
  }

  function addPost(post) {

    post.comments = [];
    post.date = new Date().toUTCString();
    db.unshift(post);
    persist();
  }

  function deletePost(postId) {
    db.splice(postId, 1);
    persist();
  }
};
