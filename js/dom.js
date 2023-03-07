// get element for buttons (decrement)
var decrebtn=document.getElementById("decrement");
// initial value=0;
var value=0;
// set value for output
document.getElementById("shownum").innerText=value;
// function for decrement
function decreby1(){
    value=value-1;
    document.getElementById("shownum").innerText=value;
    setTimeout(colorchange,10);
    setTimeout(resetcolor,200);
    return value;
}
// getting updated value;
value=decreby1();
// color chnage for button decrement
function colorchange(){
    
    decrebtn.style.color="green";
    decrebtn.style.backgroundColor="grey";
}
function resetcolor(){
  
    decrebtn.style.color="blue";
    decrebtn.style.backgroundColor="violet";
}
// color chnage for button increment
function colorchange1(){
    
    increbtn.style.color="green";
    increbtn.style.backgroundColor="grey";
}
function resetcolor1(){
  
    increbtn.style.color="blue";
    increbtn.style.backgroundColor="violet";
}
// color chnage for button reset
function colorchange2(){
    
    resetbtn.style.color="green";
    resetbtn.style.backgroundColor="grey";
}
function resetcolor2(){
  
    resetbtn.style.color="blue";
    resetbtn.style.backgroundColor="violet";
}
// incement function
let increbtn=document.getElementById("increment")
function increby1(){
    value=value+1;
    document.getElementById("shownum").innerText=value;
    setTimeout(colorchange1,10);
    setTimeout(resetcolor1,200);
    return value;
}
value=increby1();
// reset function
var resetbtn=document.getElementById("reset");
function resetto0(){
    value=0;
    document.getElementById("shownum").innerText=value;
    setTimeout(colorchange2,10);
    setTimeout(resetcolor2,200);
    return value;
}
value=resetto0();


// Eventlistener for all(Increment,decrement,reset)
decrebtn.addEventListener("click",decreby1);
increbtn.addEventListener("click",increby1);
resetbtn.addEventListener("click",resetto0);


