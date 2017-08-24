// public/javascripts/angular/controllers
/* eslint-disable */
controllers

  .controller('userController', function($scope, $http) {
  $scope.showEdit = false;
  $scope.newCardForm = false;
  $scope.users;

  $scope.user;
  $scope.newUser;
  $scope.message = null;
  $scope.cardMessage = null;
  $scope.newCard = {};

  $scope.initialize = function functionName(user) {
    $scope.user = JSON.parse(user);
    $scope.newUser = copyJSON($scope.user);
  }

  function copyJSON(fromJSON) {
    const toJSON = {};
    Object.keys(fromJSON).forEach((key) => {
      toJSON[key] = fromJSON[key];
    })
    return toJSON;
  }
   $scope.setUsers = function(users) {
    console.log(users);
    // $scope.users = JSON.parse(users);
    console.log(users);
    console.log($scope.users);

  }

  $scope.setArquicoins = function(amount) {
    console.log(amount);
    $scope.user.arquicoins = amount;
  }

  $scope.triggerShowEdit = function() {
    $scope.message = null;
    $scope.showEdit = !$scope.showEdit;
  }

  $scope.toggleNewCardForm = function() {
    $scope.newCardMessage = null;
    $scope.newCardForm = !$scope.newCardForm;
  }

  $scope.parseDateOfCard = function(card) {
    card.expire_date = new Date(card.expire_date);
  }

  $scope.toggleEditCard = function(card) {
    card.edit = !card.edit;
  }

  $scope.save = function() {
    const username = $scope.newUser.username;
    $http.get(`/user/${username}/exists`)
      .success(function(data) {
        if (!data.exists || username === $scope.user.username) {
          $http.post(`/user/${$scope.newUser.id}/update`, $scope.newUser)
            .success(function(data) {
              $scope.user = data.user;
              copyJSON($scope.user, $scope.newUser);
              $scope.triggerShowEdit();
              $scope.message = 'saved successfully';
            })
            .error(function(err) {
              $scope.message = err;
            });
        } else {
          $scope.message = 'username is taken';
        }
      })
      .error(function(err) {
        $scope.message = err;
      });
  }




  function clearMessages() {
    $scope.errorMessage = null;
    $scope.successMessage = null;
  }

});
