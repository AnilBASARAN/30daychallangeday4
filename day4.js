/* anagrams
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams.
 Anagrams are strings that contain the same characters, but in any order. */

 const anagrams = (s1, s2) => {
    let obj1 = {}
    let obj2 = {}
  
    if(s1.length !== s2.length) return false;
    
    for(let letter of s1){
      if( letter in obj1 ){
        obj1[letter] += 1;
      }else{
        obj1[letter] = 1;
        }
    }
  
     for(let letter of s2){
      if( letter in obj2 ){
        obj2[letter] += 1;
      }else{
        obj2[letter] = 1;
        }
    }
    console.log("s1: ",s1);
    console.log(obj1);
    console.log("--------")
    console.log("s2: ",s2);
    console.log(obj2);
    
        for(let letter of s1){
          if(obj1[letter] !== obj2[letter]) return false;
        }
    return true;
  };