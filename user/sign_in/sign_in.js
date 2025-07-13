$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

function click() {
    var input_text = document.getElementById("text").value;
    var input_password = document.getElementById("password").value;

    if (input_text == "pôli") {
        if(input_password == "1382011") {
            window.location = "";
        }
    }
}