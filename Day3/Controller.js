myroutingModule.controller('routingController', function ($scope,$routeParams) {
    $scope.ParameterOne = $routeParams.param;
    $scope.Message = "Hello!";
});