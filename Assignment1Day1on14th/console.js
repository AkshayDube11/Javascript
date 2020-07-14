// Examples of console.log
console.log("akshay");
console.log(true); 
console.log(null); 
console.log(undefined);  
console.log([1, 2, 3, 4]); 
console.log({a:1, b:2, c:3});

// Examples of console.error
console.error('Sample error');

// Example of console.warn() 
console.warn('Sample warning.');

// Example of console.time() and console.timeEnd()  
console.time('x'); 
let a =  function()
{ 
    console.log('Akshay'); 
} 
let b = function()
{ 
    console.log('Dube'); 
} 
a();
b(); 
console.timeEnd('x'); 

// Example of console.table()
console.table({'a':1, 'b':2, 'c':3});

// Example of console.count() 
for(let i=0;i<5;i++){ 
    console.count(i); 
}

// Example of console.group() and console.groupEnd() 
console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('vivi vini vici'); 
console.groupEnd('simple'); 
console.log('new section');

// Example of console.clear() 
console.clear(); 