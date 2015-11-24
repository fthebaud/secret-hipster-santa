/* globals $ */
'use strict';

angular.module('secretSantaApp')
    .directive('secretSantaAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
