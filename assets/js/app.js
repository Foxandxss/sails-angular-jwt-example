angular.module('app', ['ui.bootstrap', 'ui.router', 'ngMessages', 'app-templates'])
  .run(function($rootScope, $state, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (!Auth.authorize(toState.data.access)) {
        event.preventDefault();

        $state.go('anon.login');
      }
    });
  });