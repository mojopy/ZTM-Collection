// Advanced Objects
// Primitive Types - Predefined by the language.
// 1, true, "hello", null, false, undefined, ...

// Reference Types - Defined by the programmer themself.
let object1 = {
  value: 10,
  others: {
    depth: "DEEP"
  }
};

let object2 = object1; // Not a new object, only a reference to an existing one.
object2.value = 15;
// console.log(object1.value); // 15
let object3 = {value: 10};

// Cloning an object from another object purely and not by reference:
let clone = Object.assign({}, object1);
clone.value = 30;
// console.log(object1.value); // 15

// Spread operator for copying real fast:
let clone2 = {...obj};

// However, if you check the others object inside obj1, it's still passed by reference!
object1.others.depth = "SHALLOW";
// console.log(clone, clone2); // depth to all objects === SHALLOW

// DEEP Cloning, through JSON. PERFORMANCE IMPLICATIONS, BE CAREFUL.
let superClone = JSON.parse(JSON.stringify(obj));
object1.others.depth = "DEEP";
// console.log(superClone); // depth to superClone is still === SHALLOW.

// Context vs Scope
function b() {
  // new scope
  let a = 4;
}
// Root knows nothing about the a.
const object4 = {
  a: function() {
    console.log(this);
  }
}

// Instantiation
class Player {
  // Every new instance of a Player class, starts with the constructor:
  constructor(name, type) {
    console.log('Player', this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}!`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('Wizard', this);
  }
  play() {
    console.log(`WEEE, I'm a ${this.type}!`);
  }
}

const wizard1 = new Wizard("Mark", "Healer");
const wizard2 = new Wizard("Dimitri", "Black Mage");
