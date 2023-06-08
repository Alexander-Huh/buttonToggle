/* 
expected behavior for this function is to toggle the color of button from red to 
blue on each button click
does not work as expected
*/

function changeBgColor() {
  const button = document.querySelector("#buttonColor");
  const color = button.getAttribute("class");

  /* 
    if the text of the button is Red change the color of the button to blue
    after the color is changed, change the text of the button to Blue.
    */
  if (color.includes("red")) {
    // remove css selector to make button red
    button.classList.remove("buttonRed");
    // add css selector to make button blue
    button.classList.add("buttonBlue");
    // make text of button match color of button
    button.innerText = "Blue";
    // for debugging
    // console.log(button.getAttribute("style"));
    // console.log('when num is red: ',button.getAttribute("class"));
    button.classList.remove("red");
    button.classList.add("blue");
  }

  // console.log(colorNum === "0");
  /* 
    if the text of the button is Blue change the color of the button to red
    after the color is changed, change the text of the button to Red.
    */
  if (color.includes("blue")) {
    // remove css selector to make button blue
    button.classList.remove("buttonBlue");
    // add css selector to make button red
    button.classList.add("buttonRed");
    // make text of button match color of button
    button.innerText = "Red";
    // for debugging
    // console.log(button.getAttribute("style"));
    // console.log('when class is blue: ',button.getAttribute("class"));
    button.classList.remove("blue");
    button.classList.add("red");
  }
}

/* 
expected function is to set an inital value of the class if the class starts with an empty string in html
works as expected
*/
function setColor(stringColor) {
  const button = document.querySelector("#buttonColor");
  button.innerText = stringColor;
}

/*
 main function, calls all other functions
 */
function main() {
/* 
event listener for the button
*/
const button = document.querySelector("#buttonColor");
button.addEventListener("click", changeBgColor);
}

/* 
makes sure DOM is fully loaded before running JS
*/
window.addEventListener("DOMContentLoaded",main);
