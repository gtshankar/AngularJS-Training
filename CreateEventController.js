eventModule.controller('createEventController', function ($scope) {
    //BUSINESS LOGIC HERE
    $scope.message = "Hello!";
    $scope.saveEvent = function(evt,frm) {
        if (frm.$valid)
        {
            alert('Event ' + evt.Name + ' is saved');
        }
    }
    $scope.cancelEvent = function (evt, frm) {
            window.location='/Tutorial1.html';
    }

 });