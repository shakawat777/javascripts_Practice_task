// Skip Odd number for 1 to 40:
// let number = 40;
// for (let i = 1; i <= number; i++){
//     if ( i % 2!== 0){
//         continue;
//     }
//     console.log(i);
// }
// Skip Odd number using While loop:
let n = 1;
let numbers = 40;

while (n <= 40){
     n++;
    if (n % 2!== 0){
        // n++;
        continue;
    }
    console.log(n);
}