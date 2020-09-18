function ticketName()
{
    sessionStorage.fiName = firstName.value;
    sessionStorage.laName = lastName.value;
    sessionStorage.email = email.value;

    sessionStorage.dateIn = date.value;

    sessionStorage.aduTick = adultTick.value;
    sessionStorage.numTickAdu = numTickAdult.value;
    sessionStorage.toAdult = totalAdult.value;

    sessionStorage.chiTick = childTick.value;
    sessionStorage.numTickChi = numTickChild.value;
    sessionStorage.toChild = totalChild.value;

    sessionStorage.total = price.value;
}

function cardName()
{
    var payment = document.getElementsByName("pay");

    payment02 = new Array();
    for(var i=0; i<payment.length; i++)
    {
        if (payment[i].checked)
        {
            payment02.push(payment[i].value);
        }
    }

    sessionStorage.payChoice = payment02;

    sessionStorage.caNum = cardNum.value;

    sessionStorage.caExpire = cardExpire.value;
}

function ticketGenerate()
{
    sessionStorage.ticketCode = Math.floor((Math.random() * 9999) + 20200000);
}

function showInfo()
{
    var tick = ticket.value;

    if(tick == sessionStorage.ticketCode)
    {
        document.write(sessionStorage.fiName);
    }
    else if(tick == 20140404)
    {
        document.write("ha");
    }

}