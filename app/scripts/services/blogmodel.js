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
    .service('BlogModel', function ($http) {
      var BlogModel = {
        getPosts: getPosts
      };

      return BlogModel;

      function getPosts(postsContainer) {
        $http.get('db.json').then(function (posts) {
          console.log(JSON.stringify(posts.data));
          postsContainer = posts.data;
        },
        function (msg) {
          console.log(msg);
        });
      }
    });
})();
