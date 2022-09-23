

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 15 === 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(i);
//     }
// };

// Deuxième façon de l'écrire :

for (let i = 1; i <= 100; i++) {
	let fizzy = "";
   if (i % 3 === 0) {
   	fizzy = "Fizz";
   }
   if (i % 5 === 0) {
      fizzy = "Buzz";
   }
   if (i % 15 === 0) {
      fizzy = "FizzBuzz";
   }
   if (fizzy) {
      console.log(fizzy);
   } else {
      console.log(i);
   }
};