/**
 * New node file
 */

function myController($scope) {
	$scope.spices = [{"name":"pasilla", "spiciness":"mild"},
					 {"name":"jalapeno", "spiceiness":"hot hot hot!"},
					 {"name":"habanero", "spiceness":"LAVA HOT!!"}];
	$scope.spice = "habanero";
}

describe('myController function', function() {
	describe('myController', function() {
	var scope;
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		var ctrl = $controller(myController, {$scope: scope});
	}));
	it('should create "spices" model with 3 spices', function() {
		expect(scope.spices.length).toBe(3);
	});
	it('should set the default value of spice', function() {
		expect(scope.spice).toBe('habanero');
	});
	});
});
