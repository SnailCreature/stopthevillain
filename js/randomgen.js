function diceRoll() {
    let roll;
    do  {
        roll = Math.floor((Math.random() * 10) + 1);
    } while (roll > 6);
    return roll;
}

function updateDice()   {
    const number = diceRoll();
    document.getElementById("dicegraphic").innerHTML = generateDiceImageSrc(number);
}

function testDiceRoll(rolls) {
    for (i = 0; i < rolls; i++) {
        console.log(diceRoll());
    }
}

function generateDiceImageSrc(number)   {
    let src = "";
    const stringNum = number.toString()

    src += '<source media="screen and (min-width: 1000px)" srcset="images/dice' + stringNum + '/dice' +  stringNum + 'large.jpeg 2x"></source>\n';
    src += '<source media="screen and (min-width: 800px)" srcset="images/dice' + stringNum + '/dice' +  stringNum + 'medium.jpeg 1x"></source>\n';
    src += '<img src="images/dice' + stringNum + '/dice' + stringNum + 'small.jpeg" alt="' + stringNum + '" title="' + stringNum + '">\n'

    return src;
}