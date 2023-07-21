const person = {
    fname :"yan",
    lname: "beney"
}
person.age = 25;
let txt = "";
   for(let x in person) {
     txt += person[x] + " ";
   }
document.write(txt);
const anotherVariable = person;
anotherVariable.complexion = "fair";
delete anotherVariable["lname"];
let txt2 = "";
   for(let x in anotherVariable) {
     txt2 += anotherVariable[x] + " ";
   }
document.write("<br>**************  " + txt2);
//Nested OBJECT****************
const cars = { 
  type: "C",
  model: "Volvo",
  year: "1993",
  car: { size: "middle",
       color : "yellow"
  }

}
document.write("<br>" + cars.car.color + "<br>");
//Nested ARRAY OBJECT************
const fruits = { 
  type: "B",
  name: "grapevine",
  date: "fresh",
  fruit: [
    {type: "C", name:["cherry","coconut","corn"]},
          {type: "B", name:["blueberry","blackberry","strawberry"]},
           {type: "A", name:["apple","almond","pinapple"]}      
        ]
}
let text = " ";
for(let x in fruits) {
  text += "<br>" + fruits[x]+ "<br> ";
}
for(let x in fruits.fruit){
  text += "<br>" + fruits.fruit[x].type;
  for(let i in fruits.fruit[x].name){
    text += " " + fruits.fruit[x].name[i] + " ";
  }
}
document.write("<br>" + text);
//****Method*************** */
const  personTwo = {
  pname:"John",
  lname: "Gonda",
  
}
const myString = JSON.stringify(personTwo);

 personTwo.display = function () {
   return (this.pname + " " + this.lname).toUpperCase();
 }

document.write("<br><br>" + personTwo.display());
/* const myArray = Object.values(personTwo);
 document.write("<br><br>" + myArray);*/

 document.write("<br><br>" + myString);
 // you can convert array,date ,function to Json
/*
Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify() */
//*****Accessing object*** */
  const personThree = {
    lname: "henry",
    fname: "jude",
    language:"",
    set lang(l){
      this.language = l;
    }
  };
    personThree.language = "en";
    document.write("<br><br>" + personThree.language);
// object define property''''''''''''''''''''''

const  obj = {counter:0};
//to reset the counter
 Object.defineProperty(obj,"reset", {
  get function(){
     this.counter  = 0 ;
  }
})
Object.defineProperty(obj,"increment", {
  get function(){
    this.counter++ ;
  }
})
Object.defineProperty(obj,"decrement", {
  get function(){
    this.counter-- ;
  }
})
 Object.defineProperty(obj,"add", {
  set: function (values) {
    this.counter += values;
  }
});
 Object.defineProperty(obj,"substract", {
  set: function(values) {
    this.counter -= values;
  }
});
obj.reset;
obj.add = 80;
obj.substract = 2;
obj.decrement;
obj.increment;
document.write("<br><br>" + obj.counter);

//Object Constructor
let x1 = "";
let x2 = true;
let x3 = 4;
let x4 = [];
let x5 = /()/;
document.write("<br><br>" + typeof x5);
//****Object Prototype***** */

function Person(first,last,age,lang) {
  this.fname = first;
  this.lname = last;
  this.age = age;
  this.lang = lang;
}
Person.prototype.eyecolor = "black";
 Person.prototype.display = function() {
  return this.fname + " " + this.lname + " " +
  this.eyecolor;
 }
 const myMom = new Person("don","charrden",29,"spanish");
document.write("<br><br>" + myMom.display());
//*****Iterable****** */
let texts = " ";
for(let i of ["a","b","c","d"]){
    texts += i + " ";
}
document.write("<br><br>" + texts);

//Home made iterable
 function myNum() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value: n,done : false};
    }
  };
 }
 const n = myNum();
 n.next();
 n.next();
 n.next();
 document.write("<br><br>" + n.next().value);

 //OBJECT SET***********
 /**
  * const letters = new Set(["a","b","c"]);
Create a Set and add literal values:
const letters = new Set();
letters.add("a");
Create a Set and add variables:
const c = "c";
const letters = new Set();
// Add Variables to the Set
letters.add(c);
  */
 const set = new Set(["a","b","c","d","f"]);
  //display
  let text2 = " ";
   set.forEach(function(value){
    text2 += value;
   })
   document.write("<br><br>" + text2);
   const iterat =  set.entries();
    let text3 = " ";
    for(let i of iterat) {
      text3 += i  + "<br>";
    }
    document.write("<br><br>" + text3 );
    //****MAP*****
   // Passing an Array to new Map()
   // Create a Map and use Map.set() */
    const  item = new Map([["soap",300],
    ["biscuit",500],["cola",400]]);
       item.set("lipton",750);
       item.delete("cola");
    document.write("<br><br>" + item.size );
   // item.clear();
       document.write("<br><br>" + item.has("biscuit")  +
       "<br> " + typeof item + 
       "<br> " + item instanceof Map);
  //call back function
   
  let text4 = " ";
  item.forEach(function(key,value) {
    text4 += key + " " + value + "<br>";
  })
  document.write("<br><br>" + text4);
  //Map.entries()*******'
  let text5 =  " ";
 
  for(let i of item.entries()) {
   text5 += i + "<br>" ;
 }
 document.write("<br> <br>" + text5);
 //**Keys */
 let text6 = "";
 for(let i of item.keys()) {
  text6 += i  + "<br>";
}
document.write("<br> <br>" + text6);
//value*****
let text7 = "";
 for(let i of item.values()) {
  text7 += i  + "<br>";
}
document.write("<br> <br>" + text7);
//Object Reference
const names = {
  firstname: "gonda",
  lastname: "nena",
  language: "french"
};
Object.defineProperty(names,"language", {
   set:  function(value){
    language = value;
   },
   get : function (){
    return language;
   }
})
names.language = "en";

document.write("<br> <br> " + names.language("en"));

