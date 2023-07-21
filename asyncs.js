//JavaScript Async
/*async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise*/ 
//The keyword async before a function makes
// the function return a promise: 
/**
async function myFun(){
    return "Hello";
}
//Same
 function myFun2(){
    return Promise.resolve();
 }
 
  * Here is how to use the Promise:

myFunction().then(
  function(value) { /* code if successful },
  function(error) { /* code if some error 
  );
  Example
  */  
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  async function myFunction() {return "Hello";}
  
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  )
   //Or simpler, since you expect a normal 
   //value (a normal response, not an error): 
   async function myFunction2(){
    return "Hello World" ;
   }
   myFunction2.then(function(value){
    myDisplayer(value)});
    /*The await keyword can only be used
     inside an async function.
The await keyword makes the function pause 
the execution and wait for a resolved promise 
before it continues:*/ 
  async function myDisplay() {
  let myPromise = new Promise(function(myResolve,myReject){
    myResolve("I love You");
  });
  document.getElementById("demo2").innerHTML = await myPromise;

 }
      myDisplay();
      //Very often we will not need a reject function.

        async function myShow() {
        let myProx = new Promise(function(resolve) {
            resolve("i love you!!");
        });
        document.getElementById("demo3").innerHTML = await myProx;
      }
      myShow();
      async function myPrint() {
        let myProx = new Promise(function(resolve) {
           setTimeout(function(){ resolve("i love you!!");}, 2000);
        });
        document.getElementById("demo3").innerHTML = await myProx;
      }
      myShow();

       async function getFile(){
        let myProx = new Promise(function(resolve){;
        let  req = new XMLHttpRequest();
        req.open('GET',"async.html");
        req.onload = function(){
          if(req.status == 200){
              resolve("Resolved" + req.response);
          } else{ resolve("not found" + req.statue)}
        } ;
      req.send();
    });
    document.getElementById("demo4").innerHTML = await myProx;
  }
  getFile();