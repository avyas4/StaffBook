(function(angular) {
    'use strict';

    // Declare app level module which depends on views, and services
    angular.module('staffService', [])
        /*  Create an instance of a service 
          Inject $http service 
          Fetch data from json files  
           */
        .service('getStaffData', ['$http', function($http) {
            /*  getFeedsData is an instance of a service 
                This function will get data from services  
             */
            this.data = [{
                    name: 'Alex',
                    role: 'Developer',
                    office: 'Sydney'
                },
                {
                    name: 'Ben',
                    role: 'Developer',
                    office: 'Wogga'
                },
                {
                    name: 'Sam',
                    role: 'Teacher',
                    office: 'Sydney'
                },
                {
                    name: 'Steve',
                    role: 'Builder',
                    office: 'Melbourne'
                },
                {
                    name: 'Josh',
                    role: 'Driver',
                    office: 'Sydney'
                },
                {
                    name: 'Sarah',
                    role: 'Lawyer',
                    office: 'Brisbane'
                }
            ];

        }]);
})(window.angular);