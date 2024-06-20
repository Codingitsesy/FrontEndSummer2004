//Array & Object

//Deklarasi Array
// Cara 1 Array Literal
// let numbers = [1, 2, 3, 4, 5];
//Cara 2 Kata kunci New
// let number2 = new Array (6, 7, 8, 9);

//Tipe data dalam array
// let numbers = [1, 2, 3, 4, 5]; // Numbers
// let students = ["John", "Jane", "Bob"]; // String
// let john = [ 'John', 30, true[10, 20, 30]]; // Campuran

// console.log (numbers);
// console.log(students);
// console.log(john);

// Mengakses element didalam array melalui index
// console.log(numbers[3]);
// console.log(students[1]);
// console.log(john[3]);
// console.log(john[3][1]);


// numbers[3] = 100
// console.log(numbers);

//Arrray lenght

// console.log(numbers.length);
// console.log(students.length);

// Mengakses Element terakhir menggunakan lenght
// console.log(numbers[numbers.length -1]);

//Array Method
// Mengubah Array menjadi String

// let array = [1, 2, 3, "halo", false, true];
// console.log(array); 
// console.log(array.toString());// mengubah kedalam string
// console.log(array.join("-"));// mengubah kedlam string dan menggantikan elemnt baru

// array.pop(); // menambah element di bagian akhir dari sebuah array
// console.log(array);

// array.push("Selamat Pagi") // Mengganti dengan element baru pada parameter
// console.log(array)

// array.shift(); // mengeluarkan element pertama dari sebuah array.
// console.log(array);

// array.unshift("Selamat Pagi") //menambah element di bagian awal element
// console.log(array)



// Method Splice
// let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
// buah.splice(2, 0, "Lemon", "Kiwi");

// console.log(buah); // / Output: ["Pisang", "Jeruk", "Lemon", "Kiwi", "Apel", "Mangga"]

// Method contat (Penggabungan)
// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);

// console.log(makanan); // Output: ["pisang", "apel", "jeruk", "tomat", "bayam", "wortel", "kedelai", "kacang tanah", "kacang polong"]

// Method Slice
// digunakan untuk mengambil beberapa element pada array, dan menaruhnya pada array baru.
// Parameter terakhir tidak akan di ikutsertakan atau di panggil
// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
// console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

// Java Script Object
// Object dapat menyimpan properti dan nilai

// Deklarasi object
// let john = {
//     firstName : 'John',
//     age : 30,
//     isMarried : true,
//     grade : [80, 90, 100],
//     sayGreetings: function(){
//         console.log("Hello my name is" + this.firstName)// Menambahkan metod yang ada
//     }
// };

// Dua cara Mengakses Properti dalam Object
// 1 Dot Notation
// console.log(john.firstName); // Output : John

// // 2. Bracket Notation
// console.log(john["isMarried"]) // Output :true

// // Menambah element baru dalam properti
// // Menggunakan Dot Notation
// john.kebangsaan = 'warga negara indonesia';
// console.log(john);

// //Menggunakan Bracket Notation
// john['kebangsaan'] = 'warga negara indonesia';
// console.log(john);

// Pemanggilan function dalam method
// john.sayGreetings();

//Object inside Object
// console.log(john.address.street);

// //Delete property
// delete john.grade;
// console.log(john);

// deklarasi object dengan kata object
// let orang = new Object();

// orang.nama = 'john';
// orang.umur = 24;
// orang.pekerjaan = 'programmer';

//Array Object
// let students = [
//     {
//       nim: "11111",
//       name: "John",
//       address: "Manado",
//     },
//     {
//       nim: "22222",
//       name: "Jack",
//       address: "Minut",
//     },
//     {
//       nim: "33333",
//       name: "Jane",
//       address: "Tondano",
//     },
//   ];
