angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Menus) {

  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
  $scope.random = function() {
      return 0.5 - Math.random();
  };
  $scope.limitOne = 32;
})

.controller('DashDetailCtrl', function($scope, $stateParams, Menus) {
  $scope.menu = Menus.get($stateParams.menuId);
})

.controller('MenusCtrl', function($scope, Menus) {  
  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
  $scope.limitTwo = 4;
})

.controller('MenusDetailCtrl', function($scope, $stateParams, Menus) {
    $scope.menus = Menus.all();
  $scope.menu = Menus.get($stateParams.menuId);
})

.controller('ChickfilACtrl', function($scope, $stateParams, Menus) {
  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
  $scope.menu = Menus.get($stateParams.menuId);
  $scope.limitThree = 7;
})

.controller('ChipotleCtrl', function($scope, $stateParams, Menus) {
  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
  $scope.menu = Menus.get($stateParams.menuId);
  $scope.limitFour = 5;
    
  $scope.toggleMenu = function(menu) {
    if ($scope.isMenuShown(menu)) {
      $scope.shownMenu = null;
    } else {
      $scope.shownMenu = menu;
    }
  };
  $scope.isMenuShown = function(menu) {
    return $scope.shownMenu === menu;
  };
})

.controller('ShakeShackCtrl', function($scope, $stateParams, Menus) {
  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
  $scope.menu = Menus.get($stateParams.menuId);
  $scope.limitFive = 9;
})

.controller('StarbucksCtrl', function($scope, $stateParams, Menus) {
  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
  $scope.menu = Menus.get($stateParams.menuId);
  $scope.limitSix = 10;
})

.controller('FeedbackCtrl', function($scope) {})

.controller('EmailCtrl', function($cordovaEmailComposer, $scope) {
$cordovaEmailComposer.isAvailable().then(function() {
   // is available
   alert("available");
 }, function () {
   // not available
   alert("not available");
 });
 $scope.sendEmail = function(){
  var email = {
     to: 'brandon@wetogethr.com',
     cc: 'tolenashley7@gmail.com',
     bcc: null,
     attachments: [
       'file://img/logo.png',
       'res://icon.png',
       'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
       'file://README.pdf'
     ],
     subject: 'Feedback for YumHack',
     body: '',
     isHtml: true
  };

 $cordovaEmailComposer.open(email).then(null, function () {
   // user cancelled email
  });
 }
});
