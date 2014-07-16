
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    }
  };

  return api;
})();

module.exports = Iterators;

// function: action with repeatable steps when called. functions are objects
// objects: collection of properties. 
// properties: association between names and values
// methods: when a property has a funciton as one of its values

// var name = {key, value}...
// {key, function} = method
