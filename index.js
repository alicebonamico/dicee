function throwFirstDice() {

    var diceNumber = Math.floor(Math.random(0,1)*6) + 1;
    console.log(diceNumber);
    var img;
    switch (diceNumber) {
        case 1:
            img = document.querySelector(".img1").setAttribute("src", "images/dice1.png");
            break;
        case 2:
            img = document.querySelector(".img1").setAttribute("src", "images/dice2.png");
            break;
        case 3:
            img = document.querySelector(".img1").setAttribute("src", "images/dice3.png");
            break;
        case 4:
            img = document.querySelector(".img1").setAttribute("src", "images/dice4.png");
            break;
        case 5:
            img = document.querySelector(".img1").setAttribute("src", "images/dice5.png");
            break;
        case 6:
            img = document.querySelector(".img1").setAttribute("src", "images/dice6.png");
            break;

        default:
    }
    return diceNumber;
}

function throwSecondDice() {

    var diceNumber = Math.floor(Math.random(0,1)*6) + 1;
    console.log(diceNumber);
    var img;
    switch (diceNumber) {
        case 1:
            img = document.querySelector(".img2").setAttribute("src", "images/dice1.png");
            break;
        case 2:
            img = document.querySelector(".img2").setAttribute("src", "images/dice2.png");
            break;
        case 3:
            img = document.querySelector(".img2").setAttribute("src", "images/dice3.png");
            break;
        case 4:
            img = document.querySelector(".img2").setAttribute("src", "images/dice4.png");
            break;
        case 5:
            img = document.querySelector(".img2").setAttribute("src", "images/dice5.png");
            break;
        case 6:
            img = document.querySelector(".img2").setAttribute("src", "images/dice6.png");
            break;

        default:
    }
    return diceNumber;
}

function changeTitle() {
    var dice1 = throwFirstDice();
    var dice2 = throwSecondDice();
    var titleChanged;

    if(dice1 > dice2) {
        titleChanged = document.querySelector("h1").textContent = "Player 1 Wins";
    }
    else if (dice1 < dice2) {
        titleChanged = document.querySelector("h1").textContent = "Player 2 Wins";
    }
    else {
        titleChanged = document.querySelector("h1").textContent = "It's a pat";
    }
}