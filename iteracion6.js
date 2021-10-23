const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    uniqueArray = param.filter(function(item, pos) {
            return param.indexOf(item) == pos;
    });
    return (uniqueArray);
  }
  console.log(removeDuplicates(duplicates))