var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

// 1-100
function do_game(){
    var random_color = Math.random()*100;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer +1;

    while(!finished){
        guess_input_text = prompt("I am thinking of one of these colors:\n\n "+
            "blue, cyan, gold, gray, green, magenta, orange, red, white, \n\n\ " +
            "yellow \n\n" + "What color am I thinking of?");
        guess_input = (guess_input_text);
        guesses+=1;
        finished = check_guess();
    }
}
function check_guess(){
    if (!string(guess_input)){
        alert("Sorry, I don't recognize your color.\n\n" +
            "Please try again.");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)){
        alert("Sorry, I don't recognize your color");
        return false;
    }
    if (guess_input > target){
        alert("Sorry, you guess is not correct!\n\n"+
            "Hint: your color is alphabetically higher than mine.\n\n" +
            "Please try again.");
        return false;
    }
    if (guess_input < target){
        alert("Sorry, you guess is not correct!\n\n"+
            "Hint: your color is alphabetically lower than mine.\n\n" +
            "Please try again.");
            return false;
    }
    alert("Congratulations! You guessed the color!\n\n"+
    "It took you " + guesses +
        " guesses to finish the game!\n\n" +
    "You can see the color in the background");
    return true;
}