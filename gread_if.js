const marks = 95;
if(marks < 100 && marks > 90){
    console.log("Grade: A");
}
else if(marks >= 80 && marks <= 89){
    console.log("Grade: B");
}
else if(marks >= 70 && marks <= 79){
    console.log("Grade: C");
}
else if(marks >= 60 && marks <= 69){
    console.log("Grade: D");
}
else if(marks < 59){
    console.log("Grade: F");
}
else{
    console.log("Invalid Marks");
}