var today = new Date();
var hourNow = today.getHours();
var greeting;
var time =new Date();

if (hourNow > 18){
   greeting = " Good evening"; 
}else if(hourNow > 12){
    greeting = "good aftermoon";
}else if(hourNow >0 ){

    greeting = "good morning";
}else{
    greeting ="Welcome";
}

document.write('<h3>' + greeting + '</h3>');
document.write('<h4>' + time + '</h4>');