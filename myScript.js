function tenToSmall()
{
    num = document.toBinary.number2.value;
    base = 2;
    smallNum = "";
    if (num > Math.floor(num))
    {
        return 'No decimals'
    }
    if (num < 0) {
        return 'Put in a positive number'
    }
    else
    {
        while (num > 0)
        {
            smallNum = num % base + smallNum;
            num = Math.floor(num / 2);
        }
        return smallNum;
    }
}

function smallToTen()
{
    num = document.fromBinary.number.value;
    base = 2;
    tenNum = 0;
    numLength = num.toString().length;
    if (num < 0)
    {
        return 'Put in a positive number'
    }
    if (num > Math.floor(num))
    {
        return 'No decimals'
    }
    while(numLength > 0)
    {
        var demoninator = Math.pow(10, (numLength-1));
        var currentDigit = Math.floor(num/demoninator);
        if (currentDigit >= 2)
        {
            return 'Only 1\'s and 0\'s'
        }
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        num = num%demoninator;
        numLength--;
    }
    return tenNum;
}

function xToy()
{
    num = document.fromBase.number.value;
    base = document.fromBase.base.value;
    base2 = document.fromBase.base2.value;
    tenNum = 0;
    numLength = num.toString().length;
    smallNum = "";
    if (num > Math.floor(num))
    {
        return 'No decimals'
    }
    if (base > Math.floor(base))
    {
        return 'No decimals'
    }
    if (base2 > Math.floor(base2))
    {
        return 'No decimals'
    }
    if (num <= 0)
    {
        return 'Put in a greater number'
    }
    if (base <= 1)
    {
        return 'Put in a greater base'
    }
    if (base2 <= 1)
    {
        return 'Put in a greater base'
    }
    if (base > 10)
    {
        return 'Put in a smaller base'
    }
    if (base2 > 10)
    {
        return 'Put in a smaller base'
    }
    while(numLength > 0)
    {
        var demoninator = Math.pow(10, (numLength - 1));
        var currentDigit = Math.floor(num / demoninator);
        if (currentDigit >= base)
        {
            return 'Put in the correct base'
        }
        tenNum = tenNum + currentDigit * Math.pow(base, numLength - 1);
        num = num % demoninator;
        numLength--;
    }
    num = tenNum;
    while (num > 0)
    {
        smallNum = num % base2 + smallNum;
        num = Math.floor(num / base2);
    }
    return smallNum;
}

function createMadLib()
{
    var myAnswers=[];
    var response = prompt("Type in Your Name");
    myAnswers.push(response);
    var response = prompt("Type Your Friends Name");
    myAnswers.push(response);
    var response = prompt("Type A Emotion");
    myAnswers.push(response);
    var response = prompt("Type Another Emotion");
    myAnswers.push(response);
    var response = prompt("Type A Activity Here");
    myAnswers.push(response);
    var response = prompt("Type Another Activity Here");
    myAnswers.push(response);
    var response = prompt("Type A Animal Here");
    myAnswers.push(response);
    return myAnswers[0] + " and " + myAnswers[1] + " went " + myAnswers[4] + ". While " + myAnswers[4] + ", a wild " + myAnswers[6] + " came out of nowhere and made them " + myAnswers[2] +
        ". They later went to go " + myAnswers[5] + "and had a " + myAnswers[3] + " time! In the middle of " + myAnswers[5] + ", the same " + myAnswers[6] + " went after them again. " +
        myAnswers[1] + " said \"It is time to stop this " + myAnswers[6] + "!\" After getting closer to the " + myAnswers[6] + ", " + myAnswers[1] + " noticed that the " + myAnswers[6] +
        " had an injury. " + myAnswers[0] + " and " + myAnswers[1] + " took the " + myAnswers[6] + " to the vet and they had had a happy time afterwards."
}