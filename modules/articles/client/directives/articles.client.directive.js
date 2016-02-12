'use strict';

angular.module('articles').directive('articlesDir', [
  function () {
    return {
      templateUrl: 'modules/articles/client/views/testview.client.view.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Articles directive logic
        // ...

        element.text('this is the articles directive');
      }
    };
  }
]);
