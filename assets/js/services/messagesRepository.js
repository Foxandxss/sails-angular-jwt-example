angular.module('app')
  .factory('Messages', function($http, CurrentUser) {
    var currentUser = CurrentUser.user;
    return {
      getAll: function() {
        return $http.get('/user/' + currentUser().id + '/messages');
      },
      create: function(message) {
        return $http.post('/user/' + currentUser().id + '/messages', {body: message});
      },
      remove: function(message) {
        return $http.delete('/user/' + currentUser().id + '/messages/' + message.id);
      }
    }
  });