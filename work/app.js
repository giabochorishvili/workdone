// function replaceValue(string, valueToReplace, valueToReplaceWith) {
//     let result = '';
//     let i = 0;
//     while (i < string.length) {
//       if (string.substring(i, i + valueToReplace.length) === valueToReplace) {
//         result += valueToReplaceWith;
//         i += valueToReplace.length;
//       } else {
//         result += string[i];
//         i++;
//       }
//     }
//     return result;
//   }
  
// let originalString = 'Hello, World!';

// let newString = replaceValue(originalString, 'World', 'Universe');

// console.log(newString)
  

// function changeWord(string){
//     return string
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ")
// }

// console.log(changeWord("hello world hello hola"))

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
  }
  
  let users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'John', age: 25 },
    { name: 'Emily', age: 35 }
  ];
  
  let sortedUsers = sortByAge(users);
  console.log(sortedUsers);
  