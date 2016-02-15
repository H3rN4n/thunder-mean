(function () {
  'use strict';

  angular
    .module('core')
    .controller('TableController', [
      'tableService',
      TableController
    ]);

  function TableController(tableService) {
    var vm = this;

    vm.tableData = [];

    tableService
      .loadAllItems()
      .then(function (tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();