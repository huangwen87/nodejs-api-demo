/**
 * New node file
 */

function MainCtrl($scope) {
	$scope.timeOfDay = 'morning';
	$scope.name = 'Nikki';
}
function ChildCtrl($scope) {
	$scope.name = 'Mattie';
}
function BabyCtrl($scope) {
	$scope.timeOfDay = 'evening';
	$scope.name = 'Gingerbreak Baby';
}