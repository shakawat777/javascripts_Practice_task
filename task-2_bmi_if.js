var weight = 65;
var height = 170 /100;
height_meter = height;
//console.log(height_meter);
BMI = weight / (height_meter * height_meter);
if(BMI < 18.5){
    console.log('You are underweight');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('You are normal weight');
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('You are overweight');
}
else{
    console.log('You are obese');
}