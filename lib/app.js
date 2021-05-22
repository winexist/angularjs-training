var myAngularApp = angular.module('myAngularApp', []);

myAngularApp.controller('FirstController', function($scope) {
  $scope.onCoinClick = function() {
    alert('This is working');
  }

  $scope.digitalCoins = [
    { coinName: 'Bitcoin', symbol: 'btc'},
    {coinName: 'Etherium', symbol: 'eth'},
    {coinName: 'Ripple', symbol: 'xrp'},
    {coinName: 'Cardano', symbol: 'ada'},
    {coinName: 'Bitcoin Cash', symbol: 'bch'},
    {coinName: 'Dogecoin', symbol: 'doge'},
    {coinName: 'Litecoin', symbol: 'ltc'}
  ];

  $scope.name = 'Erwin';
  $scope.age = 31;
  $scope.total = 3 + 5;
  $scope.curr = 123456;
  $scope.currentDate = '2021-05-21';
});