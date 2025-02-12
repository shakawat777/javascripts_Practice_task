//display odd number from 55 to 85 and skip the numbers divisible by 5.
// Using for Loop:

// for (let i = 55; i <= 85; i++) {
//   if (i % 2 !== 0 && i % 5 !== 0) {
//     console.log(i);
//   }
// }

// Using while Loop:

let j = 55;
while (j <= 85) {
  if (j % 2 !== 0 && j % 5 !== 0) {
    console.log(j);
  }
  j++;
}