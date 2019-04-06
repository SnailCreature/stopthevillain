// Dice Roller
function diceRoll() {
    let roll;
    do  {
        roll = Math.floor((Math.random() * 10) + 1);
    } while (roll > 6);
    return roll;
}

function generateDiceImageSrc(number)   {
    let src = "";
    const stringNum = number.toString()

    src += '<source media="screen and (min-width: 1000px)" srcset="images/dice' + stringNum + '/dice' +  stringNum + 'large.jpeg 2x"></source>\n';
    src += '<source media="screen and (min-width: 800px)" srcset="images/dice' + stringNum + '/dice' +  stringNum + 'medium.jpeg 1x"></source>\n';
    src += '<img src="images/dice' + stringNum + '/dice' + stringNum + 'small.jpeg" alt="' + stringNum + '" title="' + stringNum + '">\n'

    return src;
}

function updateDice()   {
    const number = diceRoll();
    document.getElementById("dicegraphic").innerHTML = generateDiceImageSrc(number);
}


// Random parameters
window.addEventListener('load', randomPlaceholders);
let rand = 0;

function setRand()  {
    rand = Math.floor((Math.random()*10)/2);
    return rand;
}

function randomPlaceholders()   {
    const inputs = ["charaname", "coreword", "abltyutil", "abltymelee", "abltyrng", "weakness", "backstory", "charadescript"];

    setRand();
    console.log(rand);

    inputs.forEach(assignPlaceholders);
}

function assignPlaceholders(value)   {
    document.getElementById(value.toString()).setAttribute("placeholder", parameters[rand][value]);
}

// Random placeholders
const parameters = [
    {
       charaname:"Warp Boy",
       coreword:"Lump...",
       abltyutil:"Warp...",
       abltymelee:"Blister...",
       abltyrng:"Swell...",
       weakness:"Landscapers...",
       backstory:"Fell into a vat of genetically altered diggers...",
       charadescript:"A thin figure wrapped from head to toe in bandages..."
    },
    {
       charaname:"Cadeucus...",
       coreword:"Blossom...",
       abltyutil:"Grow plants...",
       abltymelee:"Ivy whip...",
       abltyrng:"Bee swarm...",
       weakness:"The cold...",
       backstory:"Bitten by a radioactive venus fly trap...",
       charadescript:"A very simple looking man with a bright pink mohawk..."
    },
    {
       charaname:"Madam Mode...",
       coreword:"Corduroy...",
       abltyutil:"Make dapper...",
       abltymelee:"Unravel...",
       abltyrng:"Strip...",
       weakness:"Sunflower yellow...",
       backstory:"Came across some enchanted trousers in a charity shop...",
       charadescript:"A tall woman in dark sunglasses and very stylish clothes..."
    },
    {
       charaname:"Bumblebee...",
       coreword:"Humble...",
       abltyutil:"Apologise...",
       abltymelee:"Deflect attention...",
       abltyrng:"Consideration...",
       weakness:"Excessive praise...",
       backstory:"Visited ancient tibetan monks to study the art of ultimate humbleness...",
       charadescript:"A quiet young man in simple clothes. Rarely makes eye contact..."
    },
    {
       charaname:"Starshine...",
       coreword:"Star...",
       abltyutil:"Brighten up...",
       abltymelee:"Burn, Baby, Burn...",
       abltyrng:"Supernova...",
       weakness:"Sunlight...",
       backstory:"Wished on a star to be extremely cheerful...",
       charadescript:"A person in a denim jacket and a long flowing cape..."
    }
 ];