/* 
expected behavior for this function is to toggle the color of button from red to 
blue on each button click
does not work as expected
*/

/* 
button now toggles from default color in css to blue, but does not turn red. ???
*/
function changeBgColor(){
    const button = document.querySelector("#buttonColor");
    const colorNum = button.getAttribute("class");

    button.removeAttribute("style");

    // console.log(typeof colorNum); //returns string

    // console.log(colorNum === "1"); 

    /* 
    if the value of the class is 1 change the color of the button to blue
    after the color is changed, change the value of class to 0.
    */
    if(colorNum === "1"){
        button.style.backgroundColor = ("blue");
        console.log(button.getAttribute("style"));
        // for debugging
        console.log('when num is 1: ',button.getAttribute("class"));
        button.setAttribute("class", "0");
    }

    // console.log(colorNum === "0");
    /* 
    if the value of the class is 0 change the color of the button to red
    after the color is changed, change the value of class to 1.
    */
    if(colorNum === "0"){
        button.style.backGroundColor = ("red");
        console.log(button.getAttribute("style"));
        // for debugging
        console.log('when num is 0: ',button.getAttribute("class"));
        button.setAttribute("class","1");
    }
   
}

/* 
expected function is to set an inital value of the class if the class starts with an empty string in html
works as expected
*/
function setColorNum(stringNum){
    const button = document.querySelector("#button");
    button.setAttribute("class",stringNum);
}

/*
 main function, calls all other functions
 */
function main(){
    // setColorNum(0);
    changeBgColor();
}

/* 
event listener for the button
*/
const button = document.querySelector("#buttonColor");
console.log(button.getAttribute("class"));
button.addEventListener("click", changeBgColor);