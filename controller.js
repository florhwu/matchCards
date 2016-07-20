var cards = [
    {
        "source" : "./img/1clubs.png",
        "value" : 1
    },
    {
        "source" : "./img/1hearts.png",
        "value" : 1
    },
    {
        "source" : "./img/2clubs.png",
        "value" : 2
    },
    {
        "source" : "./img/2hearts.png",
        "value" : 2
    },
    {
        "source" : "./img/3clubs.png",
        "value" : 3
    },
    {
        "source" : "./img/3hearts.png",
        "value" : 3
    }
];


//assign card randomly 
function assignCards() {
    cards = shuffle(cards);
    console.log(cards);
}

var flipped = false, idOne, valueOne, valueTwo, card = 0;
var timer = 0;
//card flipping function
function reveal(index, element) {

    if (timer == 0) {
        //flip
        document.getElementById(element.id).src = cards[Number(index-1)].source;
    
    
    if(!flipped) {
        //first card
        console.log("first card")
        
        valueOne = cards[Number(index-1)].value;

        idOne = element.id;

        console.log(element.id)
        flipped = true;

    } else {
        flipped = false;
        //second card 

        valueTwo = cards[Number(index-1)].value;

        //compate two values 
        if(valueOne == valueTwo && idOne != element.id) {
            //set to blank
            timer = setTimeout( function() {
                document.getElementById(String(idOne)).style.visibility = "hidden";
                document.getElementById(element.id).style.visibility = "hidden";
                timer = 0;
            },1500);

        } else {
            //set to back
            timer = setTimeout( function() {
                document.getElementById(String(idOne)).src = "./img/back.png";
                document.getElementById(element.id).src = "./img/back.png";
                timer = 0;
            },1500);
        }

    }
    console.log(timer)}
}

//shuffle array
function shuffle(arr) {

    for (var i = 0; i < arr.length; i++) {
        var temp, randomCard;
        randomCard = getRandomIntInclusive(0, i);

        //switch cards
        temp = arr[i];
        arr[i] = arr[randomCard];
        arr[randomCard] = temp;
    }

    return arr;
}

//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min,max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function restart() {
    for (var i = 0; i < cards.length; i++) {
        var id = "card" + (i+1);
        document.getElementById(id).src = "./img/back.png";
        document.getElementById(id).style.visibility = "visible";
    }
    assignCards();
}

