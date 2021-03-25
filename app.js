// 1 STEP
const kelvin = 293;

let celsius = kelvin - 273;

let fahrenheit = celsius * (9/5) + 32;

function kelvinToFahrenheit(kelvin) {
    return `The temperature in Fahrenheit will be ${Math.floor(fahrenheit)}`;
}

kelvinToFahrenheit();

//console.log(kelvinToFahrenheit());


// 2 STEP

let myAge = 36; // this is a variable with my age

let earlyYears = 2 * 10.5;

let laterYears = myAge / 2; 

let numberDogYears = laterYears * 4;

let myAgeInDogYears = earlyYears + laterYears;

function humanAgeInDogYears(myAge) {
    return `Human age in dog years is ${earlyYears + laterYears}!`;
}

humanAgeInDogYears();

//console.log(humanAgeInDogYears());

// 3 STEP

let userName = '';

(userName === '') ? console.log('Hello!') : console.log(`Hello, ${userName}!`);

let userQuestion = 'Will I visite Grecee this year?';

let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

function answerMyQuestion(userName, userQuestion) {
    switch (randomNumber) {
        case 0:
            console.log('Only if you"ll be vaccinated!');
        break;
    
        case 1:
            console.log('It is certain!');
        break;
    
        case 2:
            console.log('It is decidedly so');
        break;
    
        case 3:
            console.log('Reply hazy try again');
        break;
    
        case 4:
            console.log('Cannot predict now');
        break;
    
        case 5:
            console.log('Do not count on it');
        break;
    
        case 6:
            console.log('My sources say no');
        break;
    
        case 7:
            console.log('Outlook not so good');
        break;
    
        case 8:
            console.log('Signs point to yes');
        break;
    
        default:
            console.log('Invalid!');
        break;
    }
    return eightBall;
}

answerMyQuestion();

//console.log(answerMyQuestion());

// 4 STEP

//let raceNumber = (Math.random()*1001); 

let registeredEarly = true;
 
let userAge = 19; 

function raceTime(userAge, registeredEarly) {
    
    /*if (userAge = 18 && registeredEarly) {
        raceNumber =+ 1000;
    }
    else {
        console.log("It's false!");
    }*/

    if (userAge >= 18 && registeredEarly) { 
        return 'You will race at 9:30 am.';
    }
    else if (userAge > 18 && registeredEarly === false) { 
        return 'You will race at 11:00 am.';
    }
    else if (userAge < 18) { 
        return 'You will race at 12:30 pm.';
    }
    else {
        return 'Please wait!';
    }
    //return raceTime;
}

raceTime();

//console.log(raceTime());
