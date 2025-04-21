const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,

    
    getCarInfo: function() {
        return `${this.brand} ${this.model}, Year: ${this.year}`;
    }
};

console.log(car.getCarInfo()); 


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}


const person1 = new Person("Alice", 25);
console.log(person1.introduce()); 


Person.prototype.greet = function() {
    return `Hello from ${this.name}!`;
};

console.log(person1.greet());


console.log(person1.__proto__ === Person.prototype); 
console.log(Object.getPrototypeOf(person1));


function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    return `${this.type} says ${ths.isound}`;
};


const dog = new Animal("Dog", "Woof");
console.log(dog.makeSound());   // Dog says Woof


function describe(color, size) {
    return `${this.brand} ${this.model} is ${color} and ${size}.`;
}

console.log(describe.call(car, "red", "compact")); 
// Toyota Corolla is red and compact


console.log(describe.apply(car, ["blue", "sedan"])); 



const employees = [
    new Person("John", 30),
    new Person("Emma", 27),
    new Person("Mike", 35)
];


employees.forEach(emp => console.log(emp.introduce()));


const user = {
    username: "tech_guru",
    email: "tech@example.com",
    role: "admin"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

//     username: tech_guru
//     email: tech@example.com
//     role: admin

// First class
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Second class
class CanFly {
    fly() {
        console.log(`${this.name} is flying.`);
    }
}

// Third class that combines both
class Bird extends Animal {
    constructor(name) {
        super(name);
    }
}

// Copy methods from CanFly to Bird prototype
Object.assign(Bird.prototype, CanFly.prototype);

// Create an object
const eagle = new Bird("Eagle");

eagle.makeSound(); // Output: Eagle makes a sound.
eagle.fly(); // Output: Eagle is flying.
