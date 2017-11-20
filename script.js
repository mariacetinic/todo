$(document).ready(function(){
    


        $( "#login" ).click(function() {

            sessionStorage.user = "test";  
            sessionStorage.password = "password";

            var uservalue = $("#userlogin").val;
            var passwordvalue = $("#pwdlogin").val;

            if( uservalue === sessionStorage.user && passwordvalue === sessionStorage.password) {
                $('#main').html("Du skrev rätt användarnamn och lösenord!");
                //document.getElementById("main").innerText="Correct!";
            } else{
                $('#main').html("FEL! Gör om, gör rätt");
                //document.getElementById("answer").innerHTML="Oops!";
            }
        });
    });

        /*var numberFromSession1 = Number(sessionStorage.nummer1);
    var numberFromSession2 = Number(sessionStorage.nummer2);*/

        /*console.log(sessionStorage.user);
        console.log(sessionStorage.password);*/

       /* $("#loginbtn").click(function() {
            $('#main').html(sessionStorage.user + " " + sessionStorage.password);
        });*/

        //kolla om input stämmer överrens med session storage 
        

// Om man inte är inloggad, visa startsida med välkomstext, if else sats
// användaren = test, lösenord = password, session storage
// Fel angivna uppgifter visas en text med "Har du glömt ditt lösenord"?
// När inloggad ska ens namn synas
// Göra en log ut knapp, ska ersätta formuläret 
// gör en lista som en array, sparas i localStorage







