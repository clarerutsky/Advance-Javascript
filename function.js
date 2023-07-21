let x  = function( a,b) {
    return a * b;
}
document.write("<br> <br> " + x(6,8));

//Function contructor built in
//const myFunction = new Function("a", "b", "return a * b");
//let x = myFunction(4, 3);
//Hoisting
    /*myFun(2);
    const myFun = function(a) {
        return a*a;
    }*/
    (function(){
        document.write("<br> <br> " + "Hello dear");
    })
    ();
//JavaScript functions can be used in expressions:
    function myFunction(a, b) {
        return a * b;
      }   
      let z = myFunction.toString();
      document.write("<br> <br> " + z);

      function myFunc(a, b) {
        return arguments.length;
      }
      document.write("<br> <br> " + myFunc);
//Arrow Function
const arrow = () => "Hello world"; 
document.write("<br> <br> " + arrow());
//Function  default Parameter
function myDefault(y,z) {
    if (z === undefined){
        z = 5;
    }
   return y + z;
} 
document.write("<br> <br> Anwser:: " + myDefault(7,));
//Function  Parameter with Value

function myWithValue(y,z = 8) {
    
   return y + z;
} 
document.write("<br> <br> Anwser:: " + myWithValue(7,));
//Function Rest  Parameter 
//The rest parameter (...) allows a function to treat
// an indefinite number of arguments as an array:
function sum(...a) {
    let sum = 0;
     for(let i of a) {
        sum += i;
     }
     return sum;
}
 let s = sum(2,7,4,9,6);
 document.write("<br> <br> Anwser:: " + s);

    // Argumant Object 
    /*The argument object contains an array of
     the arguments used when the function 
     was called (invoked).*/
      function findmax() {
        let max = -Infinity;
        for(let i = 0; i < arguments.length; i++) {
            if(arguments[i] > max){
                max = arguments[i];
            }
        }
        return max;
      }
      document.write("<br <br> Anwser:: " + findmax(2,3,9,6,5,19));
//Or create a function to sum all input values:
 
 function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
 }
 document.write("<br <br> Object Argument:: " + sumAll(2,3,9,6,5,19));
 //function invocation*****************
    function myInvo(a,b) {
        return a % b;
    }
    document.write("<br <br> function invocation:: " +myInvo(7,2));
  //Global object
  //In a web browser the global object is the browser window.

     let m = myGlobal();
     function myGlobal() {
        return this;
     }
     document.write("<br <br> Global function :: " + m);

     const names = {
         fullName:function() {
            return this.firstName +  " " + this.lastName;
         }
     }
     const name1 = {
        firstName: "Esther",
        lastName: "giggle"
         }
         document.write("<br <br> function call :: " +  
         names.fullName.call(name1) );
    document.write("<br <br> function apply :: " +  
    names.fullName.apply(name1) );
        
         document.write("<br <br>  function  apply:: " +  
         Math.max.apply(" ",[3,5,9]) );

         //Function closure

         function add() {
            let counter = 0;
            function plus() {
                 counter += 1;
            }
            plus();
            return counter;
         }
         add();  
         add();  
         document.write("<br> Counter " +  add());  
            //Self invoke
            const added = (function() {
                let counter = 0;
                return function () { 
                    counter += 1;
                    return counter
                }
            }) ();
            document.write("<br> 2nd Counter " +  added());  
