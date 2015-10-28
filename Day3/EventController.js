myroutingModule.controller('eventController', function ($scope) {
	//BUSINESS LOGIC HERE
   
    $scope.TrainingDetails =
	{ 
		Name:"Angular JS", 
		Location:"6B RMZ Ecospace", 
		Duration:"(26/10-28/10) 3days", 
		Price:5000,
		BooleanValue:true,
		Sessions: [
		{name: 'Object Oriented Javascript', level: 'Beginner', duration: 1, vote:10},
		{ name: 'Basic of Angular', level: 'Beginner', duration: 2, vote: 20 },
		{ name: 'Beginner Expression in Details', level: 'Intermideate', duration: 3, vote: 30 },
		{ name: 'Service in Angular', level: 'Intermideate', duration: 4, vote: 40 }
		]	
		
	};
  

    $scope.selectedAscDesc = 'true';

	$scope.selectedOrderBy = 'vote';

	$scope.levelFilters = [
        { Name: "Beginner" },
        { Name: "Intermideate" },
        { Name: "Advanced" },
	];

	$scope.cities = [
    { Name: "Delhi" },
    { Name: "Madras" },
    { Name: "Pune" },
	];

	$scope.Speciality = "None";

	$scope.changeOfCity = function(name)
	{
	    if(name == 'Madras')
	    {
	        $scope.Speciality = 'Meals';
	    }
	    else if (name == 'Delhi') {
	        $scope.Speciality = 'Roti';
	    }
	    else if (name == 'Pune') {
	        $scope.Speciality = 'Chappati';
	    }

	}

    $scope.upVoteCount=function(s)
    {
        s.vote++;
    }

    $scope.downVoteCount = function (s) {
        s.vote--;
    }

});
