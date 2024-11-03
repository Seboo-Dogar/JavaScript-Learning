// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   Person.prototype.greet = function() {
//     console.log("Hello, my name is " + this.firstName + " " + this.lastName);
//   };
  
//   const person = new Person("Seboo", "Dogar");
//   person.greet(); // Inherits the greet method from the prototype
  

const user = {
  username : "Seboo",
  id : "180401989",
  study : "BSSE"

  // WelcomMsg: function(){
  //   console.log(`${this.username}, Welcome to this website !`);
  // }
}
//  user.WelcomMsg();
 let array = [1, 2, 3, 4]
// 

for (const key in user) {
  // console.log(user[key]);
  // console.log(key);
  
  // console.log(array[key]);
  
}
for (const i of user) {
  console.log(i); //error
}