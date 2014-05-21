angular.module('app')
  .controller('NavController', function($scope, Auth, CurrentUser) {
    $scope.isCollapsed = true;
    $scope.auth = Auth;
    $scope.user = CurrentUser.user;

    $scope.logout = function() {
      Auth.logout();
    }
  });