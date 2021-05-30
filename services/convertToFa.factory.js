mainApp
  .factory('convertToFar', function() {
    var factory = {};
    factory.toFarenheit = function(input) {
      return (input * 9 / 5) + 32;
    };

    return factory;
  });