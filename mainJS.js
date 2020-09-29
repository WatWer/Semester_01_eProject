function ticketName()
{
    if(price.value > 0)
    {
        sessionStorage.fiName = firstName.value;
        sessionStorage.laName = lastName.value;
        sessionStorage.email = email.value;

        sessionStorage.dateIn = date.value;

        sessionStorage.aduTickDoor = adultTickDoor.value;
        sessionStorage.numTickAduDoor = numTickAdultDoor.value;

        sessionStorage.aduTickGame = adultTickGame.value;
        sessionStorage.numTickAduGame = numTickAdultGame.value;

        sessionStorage.toAdult = totalAdult.value;

        sessionStorage.chiTickDoor = childTickDoor.value;
        sessionStorage.numTickChiDoor = numTickChildDoor.value;

        sessionStorage.chiTickGame = childTickGame.value;
        sessionStorage.numTickChiGame = numTickChildGame.value;

        sessionStorage.toChild = totalChild.value;

        sessionStorage.total = price.value;
    }
    else
    {
        event.preventDefault();
        alert("Please purchase at least 1 ticket." + "\n" + "Thank you.");
    }
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
        document.getElementById("info01").innerHTML = 
        "Mr. / Mrs. " + sessionStorage.fiName + " " + sessionStorage.laName + "<br>" +
        "Email: " + sessionStorage.email + "<br><br>" +

        "Date of Entry: " + sessionStorage.dateIn

        document.getElementById("info02").innerHTML = 
        "Adult - Door Pass: " + sessionStorage.numTickAduDoor + "<br>" +
        "Adult - Game Pass: " + sessionStorage.numTickAduGame + "<br>" +
        "Cost: $" + sessionStorage.toAdult + "<br><br>" +

        "Child - Door Pass: " + sessionStorage.numTickChiDoor + "<br>" +
        "Child - Game Pass: " + sessionStorage.numTickChiGame + "<br>" +
        "Cost: $" + sessionStorage.toChild + "<br><br>" +

        "Total: $" + sessionStorage.total;
    }
    else
        document.getElementById("info").innerHTML = "Invalid Ticket Reference #";
}

function ticketGenerate02()
{
    document.getElementById("board").innerHTML = 123;

    sessionStorage.ticketCode = Math.floor((Math.random() * 9999) + 20200000);
}
