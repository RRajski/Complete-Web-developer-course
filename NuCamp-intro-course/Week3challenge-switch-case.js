function getDailyGoal(day, course) {
    switch (day){
        case 0:
            return "Study up to 'Basics of Javascript'.";
        case 1:
            return "Study up to 'Basics of Javascript'.";
        case 2:
            return "Finish through 'Basics of JavaScript' today.";
        case 3:
            return "Finish through 'Handling Data' today.";
        case 4:
            return "Finish through 'Further Resources' today.";
        case 5:
            return "It's time for our first JavaScript Workshop!";
        case 6:
            return "Start on Week 4 today.";
        default:
            "Unknown Day."
    }
}




// You do not need to touch the code below for this challenge.
// You are welcome to alter it for your own experimental use, however.
function getIntroWeek3Schedule() {
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
    var i = 0;
    console.log("Week 3 Schedule:");
    while (i < weekdays.length) {
        console.log(weekdays[i] + ": " + getDailyGoal(i, "Intro"));
        i++;
    }
}

getIntroWeek3Schedule();