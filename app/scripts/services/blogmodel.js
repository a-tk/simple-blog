(function () {
  'use strict';


  /**
   * @ngdoc service
   * @name simpleBlogApp.BlogModel
   * @description
   * # BlogModel
   * Service in the simpleBlogApp.
   */
  angular.module('simpleBlogApp')
    .service('BlogModel', function () {
      var vm = this;
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

      vm.getPosts = function () {
        return vm.posts;
      }
    });
})();
