var data = [
    { name: "Test 1", status: 'No' },
    { name: "Test 2", status: 'Yes' },
    { name: "Test 3", status: 'No' },
    { name: "Test 4", status: 'Yes' },
    { name: "Test 5", status: 'Yes' },
    { name: "Test 6", status: 'No' },
    { name: "Test 7", status: 'Yes' }
]

angular.module("myApp", [])
    .controller('myCtrl', function function_name($scope) {

        $scope.lessonList = data;

        $scope.onAdd = function() {
            $scope.lessonList.push({ name: $scope.lessonName, status: 'No' })
            $scope.lessonName = '';
        }

        $scope.onRemove = function(index) {
            $scope.lessonList.splice(index, 1);
        }

    });