angular.module("myApp", []).controller('myCtrl', function function_name($scope) {
    $scope.onClick = function() {
        console.log($scope.data);
    }

});