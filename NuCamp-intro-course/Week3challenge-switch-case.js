// const expr = 'Papayas';
// switch (expr) {
//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound.');
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         // expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log('Sorry, we are out of ' + expr + '.');
// }
console.log("hello");

function getDailyGoal(day, course) {
    switch (day, course){
        case 0:
            return "Study up to 'Basics of Javascript'.";
        case 1:
            return "Study up to 'Basics of Javascript'.";
        case 2:
            return "Finish through 'Basics of JavaScript'.";
        case 3:
            return "Finish through 'Handling Data' today.";
        case 4:
            return "Finish through 'Further Resources'.";
        case 5:
            return "It's time for our first JavaScript Workshop!";
        case 6:
            return "Start on Week 4 today.";
        default:
            return "Unknown Day.";
    }
}


function getIntroWeek3Schedule() {
    var weekdays = [
        "Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday","Sunday"];
    var i = 0;
    console.log("Week3 Schedule:");
    while (i<weekdays.length){
        console.log(weekdays[i] + ":" + getDailyGoal(i,"Intro"));
        i++;
    }
    getIntroWeek3Schedule();



}