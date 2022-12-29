// FOR EACH

// 1   doubleValues
doubleValues([1,2,3]) 
doubleValues([5,1,2,3,10]) 

function doubleValues(array){
    let newValues = []
    array.forEach(function(value){
        newValues.push(value * 2);
    });
    return newValues
};

// 2   onlyEvenValues
onlyEvenValues([1,2,3])
onlyEvenValues([5,1,2,3,10])

function onlyEvenValues(array){
    let evenValues = [];
    array.forEach(function(value){
        if (value % 2 === 0){
        evenValues.push(value);
        }
    });
    return evenValues;
};

// 3  showFirstAndLast
showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(array){
    let firstAndLast = [];
    array.forEach(function(word){
        firstAndLast.push(word[0] + word[word.length -1]);
        
    }); 
    return firstAndLast;
}

// 4  addKeyAndValue
addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    );
    function addKeyAndValue(array, key, value){
        let newArrayKeysValues = [];
        array.forEach(function(objects){
          objects[key] = value;
          newArrayKeysValues.push(objects);
        });
        return newArrayKeysValues
    };

// 5  vowelCount
vowelCount('Elie') // {e:2,i:1};
//vowelCount('Tim') // {i:1};
//vowelCount('Matt') // {a:1})
//vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function vowelCount(STR){
    let str = STR.toLowerCase()
    let strArray = [];
    for ( let l of str){
        strArray.push(l)
    }
    let object = {};
    strArray.forEach(function(letter){
        let n = 1;
        let vowel = 'aeiou'
        if (vowel.indexOf(letter) !== -1 && object[letter]){
            object[letter]++
        }
        else if (vowel.indexOf(letter) !== -1){
            object[letter] = n;
            
        }
    });
    return object;
}

// MAP

// 1 doubleValuesWithMap
doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
function doubleValuesWithMap(arr){
    return arr.map(function(number){
       return number * 2;
    });
}

// 2 valTimesIndex
valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]
function valTimesIndex(arr){
    return arr.map(function(n, i){
        return n * i;
    });
};

// 3 extractKey
extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  );
  function extractKey(objs, key){
    return objs.map(function(obj){
        return obj[key];
    })
  }

  // 4 extractFullName
  extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ])
  function extractFullName(arr){
    return arr.map(function(obj){
        let str = '';
    
        for ( let key in obj){
         str +=' ' + obj[key]
        }
        return str
    });
  }

  // FILTER

  // 1 filterByValue
  filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    )
    function filterByValue(arr, key){
        return arr.filter(function(obj){
            return obj[key]
        })
    }

// 2 Find
find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined
function find(arr, n){
    return arr.filter(function(num){
        return num === n; 
    })
    [0]
};

// 3 findInObj
findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  )
  function findInObj(arr, key, val){
    return arr.filter(function(obj){
           return obj[key] === val;
    })
    [0]
  }

// 4 removeVowels
removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')
function removeVowels(STR){
    let str = STR.toLowerCase()
    let newStr = [];
    for (let l of str){
        newStr.push(l)
    }
    // console.log(newStr)
    return newStr.filter(function(l){
        let vowels = 'aeiou'
        // console.log(vowels.indexOf(l))
        return vowels.indexOf(l) === -1
    });
}

// 5 doubleOddNumbers
doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []
function doubleOddNumbers(arr){
    return arr.filter(function(n2){
        return n2 % 2 === 0 
      
    })
    .map(function(n){
        return n * 2
    })
}
  
    
  



