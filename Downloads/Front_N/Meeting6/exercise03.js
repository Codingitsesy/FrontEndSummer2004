// let people = ["Greg", "Mary", "Devon", "James"];
// let withBob = "Bob"; // Khusus nomor 10

//01 For Loop
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

//02 For Each
// people.forEach(function (data) {
//    console.log(data);
// });

//3 command to remove "Greg" 
// people.shift(); 
//     console.log(people);

//4 command to remove "James
// people.pop();
// console.log(people);

//5  command to add "Matt" to the front of the array.
// people.unshift("Matt");
// console.log(people);

//6 command to add your name to the end of the array.
// people.push("Adam Gombo");
// console.log(people);

//7 Using a for-loop
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     break;
//   }
// }

//8 Using slice
// let people01 = people.slice(0, 1)
// let people02 = people.slice(2)
// console.log(people01 + "," + people02)

//9 Using Redefine the people variable with the value you started 
//  people.splice(2, 1);
//  people.splice(2, 1, "Elizabeth", "Artie");
//  people[0] = "Matt";
//  people.push("Adam Gombo");
//  console.log(people); // Output: ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"]

//10 Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
// people.push(withBob)
// console.log(people); // Output [ 'Matt', 'Mary', 'Elizabeth', 'Artie', 'Adam Gombo', 'Bob' ] (Gunakan Perintah dari nomor kesembilan agar menghasilkan output yang sama)



// Object Exercise 
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
 
//1 
// programming.languages.push("Go")

//2
// programming["difficulty"] = 7;

//3
// delete programming.jokes;
// console.log(programming)

//4