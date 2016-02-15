'use strict';

angular.module('core').controller('SidebarController', [ '$scope', '$mdSidenav',
  function ($scope, $mdSidenav) {


    $scope.toggleList = toggleUsersList;

    /**
     * Hide or Show the 'left' sideNav area
     */
    console.log('sidebar');
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

  }
]);
