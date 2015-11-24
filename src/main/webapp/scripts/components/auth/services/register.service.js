'use strict';

angular.module('secretSantaApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


