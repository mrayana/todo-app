function TodoCtrl(TodoFactory) {
    var vm = this;
    vm.pageTitle = 'Todo <small>subtitule</small>';
    vm.products = {
        Title:"Product Test",
        Sib:"Test",
        Price:13.54
    }
    _init();

    function _init() {

         TodoFactory.mockToView(vm.products);
    }


}

angular.module('todoApp')
    .controller('TodoCtrl', TodoCtrl);