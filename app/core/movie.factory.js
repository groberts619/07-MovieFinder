(function() {
    'use strict';

    angular
        .module('app')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http'];

    /* @ngInject */
    function movieFactory($http) {
        var service = {
            searchForShow: searchForShow,
            getById: getById
        };
        return service;

        ////////////////

        function searchForShow(showInput) {
            return $http.get('http://www.omdbapi.com/?s=' + showInput)
        }

        function getById (imdbId) {
             return $http.get('http://www.omdbapi.com/?i=' + imdbId);
        }
    }
})();