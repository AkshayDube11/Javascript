/* What is Var - Var is the scope of a variable defined with the keyword “var” is limited to the “function” within 
    which it is defined. If it is defined outside any function, the scope of the variable is global. */
    function block1() {
        var a = 10;
         console.log(a);
        } 
        function block2() {
          a++;
          console.log(a);
        } 



/*What is const -  The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. 
However if a variable is defined with keyword const, it cannot be reassigned.*/

{
    const PI=3.14;
    console.log(PI);
   } 
  



   /*What is Let - let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” 
defined by curly braces i.e. {} .
“let” and “const” are“block scoped”.*/


    let b=10;
    console.log(b);
   
   {
     b++;
     console.log(b);
   }