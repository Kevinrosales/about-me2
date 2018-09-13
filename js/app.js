'use strict'

 var answer1, answer2, answer3, answer4, answer5, answer6, answer7, na;

// na = ('whoah there this is a yes or no question')

// alert('Hi there think you know me? well i\'ve prepared this quiz for you to test how good of a friend you are to me. Make sure to answer with yes & no or y & n. good luck!');

// answer1 = prompt('Have I ever gone skydiving?').toLowerCase();
// if (answer1 ==='yes' || answer1 ==='y') {
//     alert('Dang sorry! I have actually never jumped out of a plane willingly... or unwillingly')
// }
// else if (answer1 ==='no' || answer1 ==='n') {
//     alert('Yup I have never tried it nor do I think I will ever try it.')
// }
// console.log('answer one ' + answer1);

// answer2 = prompt('Do I love dolphins?').toLowerCase();
// if (answer2 ==='yes' || answer2 ==='y') {
//     alert('Nice. I actually love dolphins more than most people')
// }
// else if (answer2 ==='no' || answer2 ==='n'){
//     alert('Nope you cant really get more wrong then that pal')
// }
// console.log('answer two ' + answer2);

// answer3 = prompt('Is the flute my favorite instument?').toLowerCase();
// if (answer3 ==='yes' || answer3 ==='y'){
//     alert('Sorry but No.... no it is not')
// }
// else if (answer3 ==='no' || answer3 ==='n'){
//     alert('Yup I was forced to play it in middle school and now I hate it :c')
// }
// console.log('answer three ' + answer3);

// answer4 = prompt('Am I afraid of needles?').toLowerCase();
// if (answer4 ==='yes' || answer4 ==='y'){
//     alert('Yup big time. My absolute biggest fear is needles I dont know why but thats the one thing I cant handle.')
// }
// else if (answer4 ==='no' || answer4 ==='n'){
//     alert('If only it where true the last time I got a shot I started to hyperventilate then passed out.')
// }
// console.log('answer four ' + answer4);

// answer5 = prompt('Do I like teriaki?').toLowerCase();
// if (answer5 ==='yes' || answer5 ==='y'){
//     alert('another big NO. I got food poisoning the first time I ate teriaki and that kind of ruined it for me.')
// }
// else if (answer5 ==='no' || answer5 ==='n'){
//     alert('Yeah I cant eat teriaki without thinking about the time I got food poisoning from it.')
// }
// console.log('answer five ' + answer5);





var rightAnswer = 19;
var trys = 4;

answer6 = prompt('out of 1 through 20 what is my favorite number? ill give you 4 trys.');
while(trys >= 1)
{
   debugger;
    if(parseInt(answer6)===rightAnswer){
       alert('Holy cow yeah thats right my favorite number is 19!');
       trys = 0;
        
    }
    else if(parseInt(answer6) > 20){
        alert('Hey! i said 1 through 20!');
       answer6 = prompt('out of 1 through 20 what is my favorite number');
    
    }

    else if(parseInt(answer6) > rightAnswer)
    {
        console.log('answer is low.')
       alert('your over guessing but your super close.');
        trys--;
        answer6 = prompt('out of 1 through 20 what is my favorite number?');
        
    }
    else if(parseInt(answer6) < rightAnswer)
    {
        console.log('low')
       alert('nope its gonna be higher than that ');
       trys--;
       answer6 = prompt('out of 1 through 20 what is my favorite number?');
       
    }
}

//answer7 = prompt('Try to guess what my favorite foods are!');
//var favnumber = [7,14,21];
