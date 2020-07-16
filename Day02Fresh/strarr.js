// String and its methods 

let str1 = 'Akshay'
let str2 = 'Dube'
console.log(str1.length);
console.log(str1.trim());
console.log(str2.indexOf('b'));
console.log(str1.lastIndexOf('Akshay'));
console.log(str1.search('h'));
console.log(str1.slice(1,4));
console.log(str2.substring(1,2));
console.log(str2.substr(1,2));
console.log(str2.replace('Dube', 'Last Name'));
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.concat(' ', str2));
console.log(str1.charAt(3));
console.log(str1.charCodeAt(3));
console.log(str1.split("."));

// Arrays and its methods 

let arr = ["My", "Name", "Is", "A", "Noun"];
let arr1 = ["What", "A", "Suprise"];
console.log(arr);
console.log(arr.toString());
console.log(arr.join("*"));
console.log(arr.pop());
arr.push("WOW");
console.log(arr.push("WOW"));
console.log(arr.shift());
console.log(arr.unshift("OK"));
console.log(arr[5] = "WOW");
console.log(arr[arr.length] = "WOW");
delete arr1[0];
console.log(arr1);
arr.splice(5, "It");
console.log(arr);
arr.splice(0, 1);
console.log(arr);
console.log(arr.concat(arr1));
console.log(arr1.slice(0));




