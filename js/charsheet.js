let heroPointValue = 10;

function setHeroPoints(value)   {
    heroPointValue = value;
    updateHeropoints()
}

function getHeroPoints()    {
    return heroPointValue;
}

function regainPoints() {
    heroPointValue += 1;
    updateHeropoints()
}

function spendPoints(points)    {
    heroPointValue -= points;
    updateHeropoints()
}

function updateHeropoints() {
    validatePage();
    let stringValue = getHeroPoints().toString();
    document.getElementById("heropoints").setAttribute("value", stringValue);
}

function validatePage() {
    if (getHeroPoints() < 0) {
        setHeroPoints(0);
    }

    updateButtons()
}

function updateButtons()    {
    const util = document.getElementById("utlbttn");
    const mele = document.getElementById("melbttn");
    const rnge = document.getElementById("rngbttn");

    if (getHeroPoints() < 3)    {
        rnge.disabled = true;
    } else  {
        rnge.disabled = false;
    }

    if (getHeroPoints() < 2)    {
        mele.disabled = true;
    } else  {
        mele.disabled = false;
    }

    if (getHeroPoints() < 1)    {
        util.disabled = true;
    } else  {
        util.disabled = false;
    }
}