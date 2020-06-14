const HashMap = require('./hashMap')

function main() {
    const lotr = new HashMap();
    const dataArr = [
      {"Hobbit": "Bilbo"}, 
      {"Hobbit": "Frodo"},
      {"Wizard": "Gandalf"}, 
      {"Human": "Aragorn"}, 
      {"Elf": "Legolas"}, 
      {"Maiar": "The Necromancer"},
      {"Maiar": "Sauron"}, 
      {"RingBearer": "Gollum"}, 
      {"LadyOfLight": "Galadriel"}, 
      {"HalfElven": "Arwen"},
      {"Ent": "Treebeard"}
      ];
      Object.keys(dataArr).forEach(key => {
      lotr.set(key, dataArr[key])
    })
    console.log(lotr)

    console.log(lotr.get("Maiar"))
    console.log(lotr.get("Hobbit"))
    // there is a discrepancy because there are multiple keys with Maiar and Hobbit. This would make it almost impossible to find the correct key:value pair
    // capacity is 24, the hashmap gets resized at size 8 because it goes over the max ratio. and the resize is *3.

}

main()

const WhatDoesThisDo = function(){
    // create two strings
      let str1 = 'Hello World.';
      let str2 = 'Hello World.';
      // set up an empty hashmap
      let map1 = new HashMap();
      map1.set(str1,10);
      map1.set(str2,20);
      // hashmap 1 is now str1, 10, str2, 20
      // create a second empty map
      let map2 = new HashMap();
      let str3 = str1;
      let str4 = str2;
      // hashmap 1 is now str1, 20, str2, 10
      map2.set(str3,20);
      map2.set(str4,10);
  
      console.log(map1.get(str1));
      console.log(map2.get(str3));
  
      // so this function creates two hashmaps with slightly different key:value pairs and logs the first keys values, which will only differ in value. 
  }
WhatDoesThisDo()

// 3) Demonstrate understanding of Hash maps
// *You don't need to write code for the following two drills. use any drawing app or simple pen and paper *

// 1. Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.
// ind:10 = [key: 10, value: ], 
// ind:11 = [key: undefined, value: ],
// ind:0 = [key: 22, value: ],
// ind:1 = [key: 88, value: ],
// ind:2 = [key: undefined, value: ],
// ind:3 = [key: undefined, value: ],
// ind:4 = [key: 4, value: ],
// ind:5 = [key: 15, value: ],
// ind:6 = [key: 28, value: ],
// ind:7 = [key: 17, value: ],
// ind:8 = [key: 59, value: ],
// ind:9 = [key: 31, value: ],


// 2. Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.
// ind:5 = [key: 5, value: ]
// ind:6 = [key: 15, value: ]->[key: 33, value: ]
// ind:7 = [key: undefined, value: ]
// ind:8 = [key: 17, value: ]
// ind:9 = [key: undefined, value: ]
// ind:0 = [key: undefined, value: ]
// ind:1 = [key: 28, value: ]->[key: 19, value: ]->[key: 10, value: ]
// ind:2 = [key: 20, value: ]
// ind:3 = [key: 12, value: ]


// 4) Remove duplicates
// Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of".

// 5) Any permutation a palindrome
// Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.

// 6) Anagram grouping
// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

// 7) Separate Chaining
// Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.

// Test your hash map with the same values from the lotr hash map.