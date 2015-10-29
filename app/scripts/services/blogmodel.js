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

      function getPosts(callback) {
        $http.get('db.json').then(callback,
        function (err) {
          console.log(err);
        });
      }
    });
})();
