/**
 * Write your solutions here
 //  */
// You may modify the HTML attributes and include jQuery in the project to help you solve the problems below.
//
//     When the button with the id of change-bg-color is clicked the background of the page should turn blue.
//
//     Demo

function myFunction() {
    document.getElementById("change-bg-color").click(); // Click on the checkbox
    document.body.style.backgroundColor = "blue";
}

//
// When the button with an id of append-to-ul is clicked, append an li with the content of text to the ul with the id of append-to-me.
//
//     Demo
//
//     $('#append-to-ul').on('click', function (e) {
//         e.preventDefault();
//         $('append-to-me').append(`<li>text</li>`);
//
//
//
// //     });
// $("#append-to-ul").on("click", function(e) {
//     e.preventDefault();
//     $("#append-to-me").append("<li>" + "text" + "</li>");
// });

// Two seconds after the page loads, the heading with the id of message should change it's text to "Goodbye, World!".
//
// Demo

window.onload = function() {
    setTimeout(function () {
        document.getElementById("message").innerHTML = "Goodbye, World!";
    }, 2000);
}

// When a list item inside of the ul with the id of hl-toggle is first clicked, the background of the li that was clicked
// should change to yellow. When a list item that has a yellow background is clicked, the background should change back to the original background.
//
//     Demo
//

let listItem = document.querySelector("#hl-toggle").children;
let isColored = false;

listItem.addEventListener("click", function() {
    if (isColored) {
        document.body.style.background = "white";
        isColored = false;
    } else {
        document.body.style.background = "yellow";
        isColored = true;
    }

// When the button with the id of upcase-name is clicked, the element with the id of output should display the text "Your name uppercased is: " +
// the value of the input element with the id of input transformed to uppercase.
//
//     Demo

// function change(){
// document.getElementById("myButton").value = "Close Curtain";
// }
// document.getElementById('upcase-name').onclick = function() {
// document.getElementById('three').innerHTML = 'Your name uppercase is: "  ";
// }


// var listener = function (event) {
//     alert('You clicked the button!');
// }
//
// // register the listener to handle clicks on btn1
// document.getElementById('upcase-name').addEventListener('click', listener, false)


//
// Whenever a list item inside of the ul with the id of font-grow is double clicked, the font size of the list item that
// was clicked should double.
//
//     Demo
    function myFunction() {
        document.getElementById("font-grow").children.fontSize = "large";
    }
});
// $('#font-grow').children.dblclick(function () {
//     document.getElementById(currentTarget).style.fontSize = "large";
// });


    // function myFunction() {
    //     document.getElementById("myP").style.fontSize = "xx-large";
    // }