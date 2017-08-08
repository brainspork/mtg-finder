angular.
  module('core').
    filter('mana', function() {
      return function (input) {
        var remove = /[\/]/g;
        var find = /[^\{\}]{1,3}/g;
        var manaConvert = input.replace(remove,'').match(find);
        return manaConvert.map(curr => {
          if(isNaN(curr) && curr.length < 2) {
            return `ms ms-${curr.toLowerCase()} ms-cost ms-shadow`;
          } else if (isNaN(curr) && curr.length > 1) {
            return `ms ms-${curr.toLowerCase()} ms-cost ms-split ms-shadow`;
          } else {
            return `ms ms-${curr} ms-cost ms-shadow`;
          }
        });
      };
    });
