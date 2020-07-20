let arr = [];
let size = 10;
for (let i = 0; i < size; i++) {
    let arr1 = +prompt("Enter the number of your choice:" + (i+1));
    arr.push(arr1);
}
console.log(arr);

let odd = arr.filter(el=>el%2!==0);
let cube = arr.filter(el=>el%2!==0).map(el=>el**3);

console.log(odd);
console.log(cube);
