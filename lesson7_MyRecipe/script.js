/*  
Program Name:   Recipe Display Application  
Author:  Matteo Wise
Date:   11/15/2017
Filename:   script.js 
*/ 
/* global  $  */ 

//displays the next element after the current target 
function display(event) { 
 
 $(event.currentTarget).next().fadeIn("slow"); 

}//end of display 

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display); 