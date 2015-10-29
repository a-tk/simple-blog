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

      function addPost (post) {
        BlogModel.addPost(post);
      }

      function addComment (postId, comment) {
        BlogModel.addComment(postId, comment);

      }
      function populatePosts(posts) {
        vm.posts = posts.data;
      }

      function activate() {
        BlogModel.getPosts(populatePosts);
      }
    });
})();
