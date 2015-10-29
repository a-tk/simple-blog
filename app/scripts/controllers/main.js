(function () {
  'use strict';


  /**
   * @ngdoc function
   * @name simpleBlogApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the simpleBlogApp
   */
  angular.module('simpleBlogApp')
    .controller('MainCtrl', function ($http, BlogModel) {
      var vm = this;
      vm.title = 'TestTitle';
      vm.posts = [];
      vm.activate = activate();
      vm.addPost = addPost;
      vm.addComment = addComment;

      function addPost (title, author, content) {
        console.log('going to add post with title ' + title + ' and author ' + author + ' content ' + content);
      }

      function addComment (post, author, content) {
        console.log('going to add comment to post ' + post.title + ' with author ' + author + ' content ' + content);

      }
      function populatePosts(posts) {
        vm.posts = posts.data;
      }

      function activate() {
        BlogModel.getPosts(populatePosts);
      }
    });
})();
