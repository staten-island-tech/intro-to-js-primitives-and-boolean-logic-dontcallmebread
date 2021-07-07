/* let light = "Edis";
if (light === "green") {
    console.log("Go");
} else if (light === "Yellow") {
    console.log("Caution!");
} else {
    console.log("Stop");
} */
/* 
let kristyIntolerant = true;
let baoBaoIntolerant = false;

if(kristyIntolerant === true && baoBaoIntolerant === true) {
    console.log("Get Almond Milk");
}else if(kristyIntolerant === true || baoBaoIntolerant === true){
    console.log("Get Both Milks");
} else{
    console.log("Just regular milk")
} 
 */

/* function test() {
    console.log("I'm a function")
}
test();
 */

 /* const add = function(x, y) {
     return x + y; //return ends the functiom
 };

 console.log(add(100, 20));

 //cannot redefine const, 99% of the time use const not let
  */

 /*  const hello = function(){
      console.log("Hello");
  };
  const bye = function(){
      console.log("Bye");
  };
  const hiBye = function(){
      hello();
      bye();
      hello();
      bye();
  };
  hiBye(); */

/* const name = "Thurushi"; //global variable of global space

function displayName(){
    const name = "Kelly"; //local or function scope
    alert(name);
    function sun(){
        console.log(name)//inner function has access to outer function
    }
    return sun();
}
displayName(); */

//closure
/* function displayName(){
    const name = "Kelly"; //local or function scope

    function sun(){
        console.log(name)//inner function has access to outer function
    }
    return sun;
}
const my Func = displayName();
myFunc();
 */

/*  //Arrays
 const names = ["Aarthi", "Vicky", "Vincent", "Doyle", "Kelly"];
 //names.push("Karen");
 names.forEach(el => console.log(el));
  */

/* //spread operator
const numbers = [1, 2, 3, 4, 5, 6];
const add = function(x, y, z, a, b, c) {
    return x + y + z + a + b +c;
};
console.log(add(...numbers)); */

//Challenge 1: Filter all students whose names contain <5 characteristics
/* const newArr = student
    .push()
    .forEach()
    .map();
 */



//Challenge 1
/* const students = ["Riya", "Omor", "Alan", "Jiayu", "Michael", "Lisa", "Richard"];
const result = students.filter(word => word.length < 5);
console.log(result); */


//challenge 2
function partOne(){
    const students = ["Riya", "Omor", "Alan", "Jiayu", "Michael", "Lisa", "Richard"]
        console.log(students.includes("Junshen"));
}
partOne();
function partTwo(){
    const students1 = ["Riya", "Omor", "Alan", "Jiayu", "Michael", "Lisa", "Richard"]
        console.log(students1.includes("Alan", "Savva"))
} 
partTwo();
