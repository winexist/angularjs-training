var mainApp = angular.module('mainApp', []);

mainApp.controller('AppController', function($scope) {
  $scope.groceryLists = [
    // {
    //   name: 'Pork',
    //   qty: 1,
    //   unit: 'g'
    // },
    // {
    //   name: 'Chicken',
    //   qty: 2,
    //   unit: 'kg'
    // },
    // {
    //   name: 'Beef',
    //   qty: 500,
    //   unit: 'g'
    // },
    // {
    //   name: 'Soy Sauce',
    //   qty: 350,
    //   unit: 'ml'
    // }
  ];

  $scope.addGrocery = function() {
    if ($scope.groceryName && $scope.groceryQty && $scope.groceryUnit) {
      var groceryItem = {
        name: $scope.groceryName,
        qty: $scope.groceryQty,
        unit: $scope.groceryUnit
      };
      
      $scope.groceryLists.push(groceryItem);
      
      $scope.groceryName = null;
      $scope.groceryQty = null;
      $scope.groceryUnit = null;
    } else {
      alert('Please fill all the fields to proceed adding grocery item.');
    }

  }
});

