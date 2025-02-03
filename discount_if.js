var age = 20;
var ticketPrice = 800;
if (age <10){
    console.log ("Ticket is free");  
}
else if(age <25){
    discount = ticketPrice *50/100;
    console.log(" Get 50% discount for students");
}
else if(age >= 60){
    discount  = ticketPrice * 15/100;
    //console.log(discount);
    console.log("Get 15% discount for senior citizens");

}
else{
    console.log("Regular ticket price 800 Taka");
}