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
    .controller('MainCtrl', function (BlogModel) {
      var vm = this;
      vm.title = 'TestTitle';
      //vm.posts = null;
      vm.posts = [
        {
          name: 'test post',
          date: Date.now(),
          content: 'lorem ipsum',
          comments: [
            {
              poster: 'test commenter',
              date: Date.now(),
              content: 'i like this!'
            }
          ]
        }
      ];

      //activate();

      function activate() {
        vm.posts = BlogModel.getPosts();
      }
    });
})();
