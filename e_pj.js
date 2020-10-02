function showAlert()
{
    event.preventDefault();

    var id = document.getElementById("id").value;

    var pass = document.getElementById("password").value;
    
    var gender = document.getElementsByName("gender");

    var hobbies = document.getElementsByName("hobbies");
        
    var birthday = document.getElementById("birthday").value; 

    var address = document.getElementById("address").value;

    var comment = document.getElementById("comment").value;


    var bday = new Date(birthday);
    var today = new Date();
    var age=Math.floor(today-bday)/(24*60*60*1000*365);

    var genderArr = new Array();
    for(var i=0; i<gender.length; i++ )
    {
        if (gender[i].checked)
        {
            genderArr.push(gender[i].value);
        }
    }

    var hobbiesArr = new Array();
    for(var j=0; j<hobbies.length; j++ )
    {
        if (hobbies[j].checked)
        {
            hobbiesArr.push(hobbies[j].value);
        }
    }

    if(age<17)
        alert("You are not enough 17 years old to register");
    else
    alert(
            "MEMBER INFOMATIONS" +"\n"+
            "ID: " + id + "\n" +
            "Password: " + pass + "\n" +
            "Gender: " + genderArr+"\n"+
            "Hobby: " + hobbiesArr + "\n" +
            "Birthday: " + birthday + "\n" +
            "Address: " + address + "\n" +
            "Comment: " + comment
        );
}