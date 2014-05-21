angular.module('app')
  .controller('LoginController', function($scope, $state, Auth) {
    $scope.errors = [];

    $scope.login = function() {
      $scope.errors = [];
      Auth.login($scope.user).success(function(result) {
        $state.go('user.messages');
      }).error(function(err) {
        $scope.errors.push(err);
      });
    }
  });