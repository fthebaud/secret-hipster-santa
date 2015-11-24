 'use strict';

angular.module('secretSantaApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-secretSantaApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-secretSantaApp-params')});
                }
                return response;
            }
        };
    });
