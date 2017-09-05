var data=[{
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

describe('mqStaffSearch', function() {
	  var $compile,$rootScope;
    // Load the myApp module, which contains the directive
   beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.module('templates'));

  var myMock;
  beforeEach(module(function($provide){
    myMock = {}//Mock the service using jasmine.spyObj, or however you want
    $provide.factory('getStaffData', function(){
        return myMock;
    })
}));  

beforeEach(inject(function ($rootScope, $compile) {
    $scope = $rootScope.$new();
    element = angular.element("<mq-staff-search></mq-staff-search>");
    $compile(element)($scope);
    $scope.$digest();
}));
 it('it should rturn array of data', function(){
    expect(myMock).toEqual(data);
});
});

