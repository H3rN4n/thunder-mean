'use strict';

angular.module('core').directive('sidebar', [
  function () {
    return {
      templateUrl: 'modules/core/client/views/sidebar.client.view.html',
      restrict: 'E',
      controller: 'SidebarController'
    };
  }
]);
