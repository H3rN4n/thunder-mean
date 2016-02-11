(function () {
  'use strict';
  angular
    .module('core')
    .controller('MessagesController', [
      'messagesService',
      MessagesController
    ]);

  function MessagesController(messagesService) {
    var vm = this;

    vm.messages = [];

    messagesService
      .loadAllItems()
      .then(function (messages) {
        vm.messages = [].concat(messages);
      });
  }

})();
