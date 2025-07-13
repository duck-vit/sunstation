
function submit() {
    var input = document.getElementById("film_script_input_password").value;
    if(input == "sunfilm154") {
        alert("Bạn đã nhập đúng mật khẩu!");
        document.getElementById("film_content").style.display = "block";
        document.getElementById("content").style.display = "none";
        return;
    }
    if(input == "quenmatkhau") {
        alert("Bạn không nhớ mật khẩu? Hãy nhớ kĩ, đây là mật khẩu hiện tại: sunfilm154 . Mật khẩu này sẽ được thay đổi thường xuyên.")
        return;
    }
    if(input == "") {
        console.log("Trống!");
        return;
    }
    if(input == "sunfilm154 site") {
        window.location = "film_script/sunfilm154";
        return;
    }
    if(input == "sunfilm154tn") {
        alert("Bạn đã nhập đúng mật khẩu và có thêm 1 video Thơ Nguyễn cho bé Ủn xem!");
        document.getElementById("film_content").style.display = "block";
        document.getElementById("content").style.display = "none";
        document.getElementById("videothonguyen").style.display = "block";
        return;
    }
    else {
        alert("Bạn đã nhập sai mật khẩu!")
    }
}


document.getElementById("tutorial_button").onclick = function() {
    window.location = "/sunstation/post/tutorial/Cach-su-dung-website-chinh-cua-sun-station.html";
}

document.getElementById("account_button").onclick = function() {
    window.location = "/sunstation/user/account/account.html";
}