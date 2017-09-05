describe('staffService test', function(){
    describe('when I call staffService.getStaffData', function(){
        it('returns ', function(){
            var $injector = angular.injector([ 'myApp' ]);
            var myService = $injector.get( 'staffService' );
            expect( staffService.getStaffData ).toEqual(data);
        })

    })

});