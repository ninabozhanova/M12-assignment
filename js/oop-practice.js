// STEP 1
function Cat() {}
const Dog = function() {}

// STEP 2
// const myCat = new Cat()
// const myDog = new Dog()

// STEP 3
// function Animal() {
//     console.log('The Animal has been created')
// }

// const myAnimal = new Animal()

// STEP 4
// function Animal(message) {
//     console.log(message)
// }

// const myAnimal = new Animal("Hi")

// STEP 5
// function Animal(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
// }

// const myCat = new Animal('cat', 'Maine Coon', 'orange', 12, 38)

// STEP 6
// for (const property in myCat) {
//     console.log(`${property}: ${myCat[property]}`);
// }

// STEP 7
// function Animal(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
//     this.speak = function() {
//         if (this.type === "dog") {
// 		    console.log(`The ${this.color} dog is barking!`)
//         } else if (this.type === "cat") {
//             console.log(`The ${this.color} cat is meowing!`)
//         }
// 	}
// }

// const myCat = new Animal('cat', 'Maine Coon', 'orange', 12, 38)
// myCat.speak()

// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length
//     let checkType = function() {
//         if (_type === "dog") {
//             return "dog"
//         } else {
//             return "cat"
//         }
//     }
//     this.speak = function() {
//         console.log(`The ${checkType()} has made a noise!`)
// 	}
// }

// const myCat = new Animal('cat', 'Maine Coon', 'orange', 12, 38)
// myCat.speak()

// STEP 9
// String.prototype.findWords = function(word) {
//     let rgxp = new RegExp(word, "g");
//     let count = this.match(rgxp).length
//     console.log(`"${word}" was found ${count} times!`)
// }

// 'Hello World!'.findWords('o')
