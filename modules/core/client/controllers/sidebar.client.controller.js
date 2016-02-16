'use strict';

angular.module('core').controller('SidebarController', [ '$scope', '$mdSidenav',
  function ($scope, $mdSidenav) {


    $scope.toggleList = toggleUsersList;

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    $scope.links = [
      {
        text: "Inicio", state: "home"
      },
      {
        text: "Entrar", state: "login"
      },
      {
        text: "Que es Commapp?", state: "about"
      },
      {
        text: "Legales", state: "legal"
      },
      {
        text: "Contactenos", state: "contact"
      }
    ];

  }
]);
