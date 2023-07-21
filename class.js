//JavaScript Classes are templates for JavaScript Objects.
//A JavaScript class is not an object but template.

/**The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
 * description
 */
class car { 
constructor (name,year){
    this.name = name;
    this.year = year;
}
age () {
    const date = new Date()
    return date.getFullYear()-this.year;
}
//different method
 ages(x){
    return x + this.year;
 }
}
 
//different method
   let dat = new Date();
let years = dat.getFullYear();
//new object
const x = new car("BMW", 2000);
document.write(x.name + " " + x.age() + " " +
x.ages(years));
//To create a class inheritance, use the extends keyword.

//***********Class Inheritance*********** */
    class Car{
        constructor(brand){
            this.brands = brand;
        }
        present(){
            return "This is " + this.brands;
        }
    }
    class Model extends Car{
        constructor(brand,mode){
            super(brand);
            this.model = mode;
        }
        show(){
            return this.present() + "  also this " + this.model;
        }
    }
    const obj = new Model("Ferari","Peugeot");
    document.write( " " + obj.show() );
//GETTER AND SETTER
class moto{
    constructor(color){
        this.color = color;
    }
    get motocolor(){
        return this.color;
    }
    set motocolor(x) {
        this.color = x;
    }
}
let m = new moto("blue");
 m.motocolor = "Gray";
document.write( " <br>" + m.motocolor );
//static class
/**Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.
 * 
 */
class uncle{
    constructor(name){
        this.name = name;
    }
    static hello(){
        return "hello";
    }
}
 let newuncle = new uncle("Henry");
// You can call 'hello()' on the uncle Class:
document.write( " <br>" + uncle.hello() );
// But NOT on a newuncle Object:
// document.getElementById("demo").innerHTML = newuncle.hello();
// this will raise an error.

//If you want to use the newuncle object inside 
//the static method, you can send it as a parameter:

class  family{
    constructor(name){
        this.name = name;
    }
    static hello(x){
        return "Hello uncle " + x.name;
    }
}
 let newUncle = new family("Henry");
 document.write( " <br>" + family.hello(newUncle) );

 
  
  