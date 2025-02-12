// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// Using While Loop:
// let number = 1;
// let sum = 0;
// while (number < 100){
//     sum += number;
//     if(sum >= 100){
//         break;
//     }
//     number++;

//     console.log(number);
    
// }
// console.log(sum);

// Using For Loop:
let sum = 0;
for (let i = 1; i < 100; i++){
    sum += i;
     console.log(i);
    if(sum >= 100){
        break;
    }
    // console.log(i);
}

 console.log(sum);