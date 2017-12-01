var dogShowApp = angular.module('dogshow', []);

dogShowApp.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$http'];

function MainCtrl($scope, $http)
{
    $scope.dogs = [];
    
    $scope.addDog = addDog;
    $scope.upvote = upvote;
    $scope.incrementUpvotes = incrementUpvotes;
    $scope.getAll = getAll;

    function addDog()
    {
        var newdog = {name:$scope.name, breed:$scope.breed,upvotes:0};
        $scope.name='';
        $scope.breed='';
        $http.post('/dogs', newdog).success(function(data){
          $scope.dogs.push(data);
        });
    };

    function upvote()
    {
        return $http.put('/dogs/' + dog._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          dog.upvotes = data.upvotes;
        });
    };

    function incrementUpvotes(dog)
    {
        $scope.upvote(dog);
    };

    function getAll()
    {
        return $http.get('/dogs').success(function(data){
            angular.copy(data, $scope.dogs);
        });
    };
    $scope.getAll();
}
