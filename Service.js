//eventModule.factory('eventDataSvc', function () {
//    return {
//        eveData: {
//            Name: "Angular JS",
//            Location: "6B RMZ Ecospace",
//            Duration: "(26/10-28/10) 3days",
//            Price: 5000,
//            BooleanValue: true,
//            Sessions: [
//            { name: 'Object Oriented Javascript', level: 'Beginner', duration: 1, vote: 10 },
//            { name: 'Basic of Angular', level: 'Beginner', duration: 2, vote: 20 },
//            { name: 'Beginner Expression in Details', level: 'Intermideate', duration: 3, vote: 30 },
//            { name: 'Service in Angular', level: 'Intermideate', duration: 4, vote: 40 }
//            ]
//        }
//    }
//});

//OR

//var TrainingDataService = function()
//{
//    this.GetDetails = function () {
//        return {
//            //eveData: {
//                Name: "Angular JS",
//                Location: "6B RMZ Ecospace",
//                Duration: "(26/10-28/10) 3days",
//                Price: 5000,
//                BooleanValue: true,
//                Sessions: [
//                { name: 'Object Oriented Javascript', level: 'Beginner', duration: 1, vote: 10 },
//                { name: 'Basic of Angular', level: 'Beginner', duration: 2, vote: 20 },
//                { name: 'Beginner Expression in Details', level: 'Intermideate', duration: 3, vote: 30 },
//                { name: 'Service in Angular', level: 'Intermideate', duration: 4, vote: 40 }
//                ]
//            //}
//        }
//    }
//}

//eventModule.service('eventDataSvc', TrainingDataService);

//AJAX IMPLEMENTATION

    eventModule.factory('eventDataSvc', function ($http) {
        return {

            eveData: function (successcb) {
                $http({ method: 'GET', url: '/jsonData.js' })
                .success(function (response, status, headers, config) {
                    successcb(response)
                    console.log(response);
                })
                .error(function (response, status, headers, config) {
                    console.log(response +''+ status);
                });
            }
        }
    });
