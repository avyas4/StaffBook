(function(angular) {
    'use strict';
    // Declare app level module which depends on views, and services
    angular.module('myApp', ['staffService'])
        .controller('mycontroller', ['$scope', function($scope) {
            $scope.query = '';
              /*  search is apply filter on data obejct 
                This function will return filter result 
                office:OfficeName role:Role name:Name 
                name:Name role:Role office:OfficeName 
             */
            $scope.search = function(user) {
                var query = $scope.query.toLowerCase();

                var query = $scope.query.toLowerCase();
                var nameRoleString = 'name:' + user.name.toLowerCase() + ' ' + 'role:' + user.role.toLowerCase()+ ' ' + 'office:' + user.office.toLowerCase();
                var roleNameString = 'office:' + user.office.toLowerCase()+' '+'role:' + user.role.toLowerCase() + ' ' + 'name:' + user.name.toLowerCase();
                var officeNameString = 'office:' + user.office.toLowerCase()+' '+'name:' + user.name.toLowerCase() + ' ' + 'role:' + user.role.toLowerCase();
                if (nameRoleString.indexOf(query) != -1 || roleNameString.indexOf(query) != -1 || officeNameString.indexOf(query) != -1) {
                    return true;
                }
                return false;

            };
        }])

        .directive('mqStaffSearch', ['getStaffData', function(getStaffData) {
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                templateUrl: 'my-staff-book.html',
                link: function(scope, element, attrs) {
                    scope.dataList = getStaffData.data;
                    console.log('scope.dataList ',scope.dataList );
                }
            }
        }]);

})(window.angular);