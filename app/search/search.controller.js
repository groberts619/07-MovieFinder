(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['movieFactory', 'toastr'];

    /* @ngInject */
    function SearchController(movieFactory, toastr) {
        var vm = this;
        
        vm.findShow = findShow;


        ////////////////

        function findShow(showInput) {
            movieFactory
            .searchForShow(showInput)
            .then(function(response) {
                vm.results = response.data.Search;
            })
            .catch(function(error) {
                toastr.error('Oh, wow!', 'Error');  
            });
        }
    }
})();


