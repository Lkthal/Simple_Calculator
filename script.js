var box=document.getElementById('display');
//function to display numbers on screen
function addtoscreen(y){
  box.value +=y;
  //logic to clear the screen when c is press
  if(y=='c'){
    box.value='';
  }
}
//function to retrieve and display answer
function answer(){

  y=box.value;
  //eval function to retrieve math function of y
  y=eval(y);
  box.value=y;
}

//function for backspacing
function backspace(){
  var number=box.value;
  var len=number.length-1;
  var newnumber=number.substring(0,len);
  box.value=newnumber;
}
