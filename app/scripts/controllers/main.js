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

      function activate() {
        $http.get('db.json').then( function (posts) {
          console.log(JSON.stringify(posts.data));
          vm.posts = posts.data;
        },
        function (msg) {
          console.log(msg);
        });
        //BlogModel.getPosts(vm.posts);
      }
    });
})();
