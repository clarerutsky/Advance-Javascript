/**A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
 * description
 */
function displayer(x) {
    document.getElementById("demo").innerHTML = x; 
}
 function myFirst() {
    displayer( "Hello first");
 }
 function mySecond(){
    displayer( "Hello second");
 }
 myFirst();
 mySecond();
// Sequence Control:: You could call a calculator function 
/*(myCalculator), save the result, and then call another
 function (myDisplayer) to display the result:*/
 function myDisplay(x){
    document.getElementById("demo2").innerHTML = x; 

 }
 function myCalculator(a,b){
    let result = a + b ;
    //myDisplay(result);
    return result;
 }
 let input = myCalculator(23,56);
 myDisplay(input);
 //myCalculator(23,56);
 //problem******* 
 // you call two functions to display the result.
 //second style
 // you cannot prevent the calculator function from displaying the result.
 //CallBack Needed
 //example of callback
 function myCalculate(a,b,myCallback) {
    let result = a + b;
     myCallback(result);
 }
 myCalculate(34,34,myDisplay);
 //myDisplay is the callback argument here'
 //create Array
 //Remove Negative number using callback
 const myNumbers = [4,1,20,-7,5,9,-6];
 // Call removeNeg with a callback
 const pos = removeNeg(myNumbers, (x)=> x >= 0);
 //OR const pos = removeNeg(myNumbers, function(x){
  //  return x >= 0; });
 // Display Result
 document.write(pos);
 // Keep only positive numbers
 function removeNeg(numbers,callback) {
   let myArray = [];
    for(const y of numbers) {
        if(callback(y)) {
            myArray.push(y);
        }
    }
    return myArray;
 }
 /*In the example above, (x) => x >= 0 is a callback function.
It is passed to removeNeg() as an argument.*/

 //*************Asynchronous JavaScript*************************** */
 /**Functions running in parallel with
  *  other functions are called asynchronous
A good example is JavaScript setTimeout()
  * In the real world, callbacks are most 
often used with asynchronous functions.
When using the JavaScript function setTimeout(), you can specify a 
callback function to be executed on time-out:
  */

setTimeout(myFun,8000);
function myFun() {
    document.write(" i love you!!! ");
}
//In the example above, myFunction is used as a callback.
/* dont use paranthesis when passing function as argument
rather pass the whole function insted.*/
 setTimeout(function() {
    myFunc(" I see You ");
}, 7000);
function myFunc(value) {
    document.write(value);
}
//Waiting for Intervals:
/*setInterval(), you can specify a callback 
function to be executed for each interval:*/ 
setInterval(myInterval,1000);
 function myInterval(){
    let d = new Date();
    document.getElementById("demo3").innerHTML =
    d.getHours() + ":" +
     d.getMinutes() + ":" +
      d.getSeconds();
 }
 //In the example above, myInterval is used 
 //as a callback. and passed as argument 
/**Instead, in JavaScript, asynchronous 
 * programming is solved using Promises instead.
 * description
 */
//***********Promise*************'**/
 /*"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code 
and consuming code
A JavaScript Promise object contains both the
 producing code and calls to the consuming code:
Pending   - working (umdefined)
Fulfilled   - result value
Rejected        - error object
The Promise object supports. two properties: state and result.
You must use a Promise method to handle promises.
You must use a Promise method to handle promises.
myPromise.then(
  function(value) { /* code if successful  function(error) { /* code if some error *
}); promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so you can add a callback for success or failure only.

 */ 

//Example
 function mydisplay(some){
    document.write(some);
 }
  let mypromise = new Promise(function(myResolve,myReject) {
     let x = 0;
     // some code (try to change x to 5)
     if(x == 0 ){
        myResolve(" ok ");
     } else { myReject("error")};
  })
  mypromise.then( function(value) { mydisplay(value);},
                  function(error){mydisplay(error);});
    //To demonstrate the use of promises, we will use the 
    /*callback examples from the previous chapter:

Waiting for a Timeout
Waiting for a File */  
 setTimeout(function(){myFuns("I changed it");}, 2000 );

 function myFuns(value){
    document.write(value);
 }
 //Example Using Promise***********

let myprosmex = new Promise( function (myResolve,myReject) {
    setTimeout(function(){myResolve(" HEllo Promise!!");},2000);
});
 myprosmex.then(function(value){
          document.write(value);
});
    //Waiting for a file
    function myDisplayer(some) {
        document.write(some);
      }

function getFile(mycallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "promise.htm");
    req.onload = function() {
        if(req.status == 200){
            mycallback(req.responseText);
        } else {
            mycallback("Error: " + req.status);
        }            
    }
    req.send();
}
    getFile(myDisplayer);

    //Example 2
   let mypromiss = new Promise(myResolve,myReject);
      let reques = new XMLHttpRequest();
         reques.open("GET","promise.html");
         reques.onload = function(){
            if(reques.status == 200) 
            {
                myResolve(reques.response);
            } else{
                myReject("error");
            }
            reques.send();
         }
          mypromiss.then(function (value) {
            displayer(value);
          },function (error) {
            displayer(error);}
          )