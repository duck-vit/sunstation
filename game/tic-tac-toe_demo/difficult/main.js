
document.getElementById("keo").onclick = function() {
    document.getElementById("user_choose").innerHTML = "Kéo";
    var keo = Math.floor(Math.random() * 6);
    if (keo == 0) {
        document.getElementById("cpt_choose").innerHTML = "Kéo";
        document.getElementById("result").innerHTML = "Hòa";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 1) {
        document.getElementById("cpt_choose").innerHTML = "Búa";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 2) {
        document.getElementById("cpt_choose").innerHTML = "Búa";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 3) {
        document.getElementById("cpt_choose").innerHTML = "Bao";
        document.getElementById("result").innerHTML = "Thắng";
        document.getElementById("button_win").style.display = "block";
        document.getElementById("button_nomal").style.display = "none";
    }
    if (keo == 4) {
        document.getElementById("cpt_choose").innerHTML = "Búa";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 5) {
        document.getElementById("cpt_choose").innerHTML = "Búa";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
}

document.getElementById("bua").onclick = function() {
    document.getElementById("user_choose").innerHTML = "Búa";
    var keo = Math.floor(Math.random() * 6);
    if (keo == 0) {
        document.getElementById("cpt_choose").innerHTML = "Búa";
        document.getElementById("result").innerHTML = "Hòa";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 1) {
        document.getElementById("cpt_choose").innerHTML = "Bao";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 2) {
        document.getElementById("cpt_choose").innerHTML = "Bao";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 3) {
        document.getElementById("cpt_choose").innerHTML = "Kéo";
        document.getElementById("result").innerHTML = "Thắng";
        document.getElementById("button_win").style.display = "block";
        document.getElementById("button_nomal").style.display = "none";
    }
    if (keo == 4) {
        document.getElementById("cpt_choose").innerHTML = "Bao";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 5) {
        document.getElementById("cpt_choose").innerHTML = "Bao";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
}

document.getElementById("bao").onclick = function() {
    document.getElementById("user_choose").innerHTML = "Bao";
    var keo = Math.floor(Math.random() * 6);
    if (keo == 0) {
        document.getElementById("cpt_choose").innerHTML = "Bao";
        document.getElementById("result").innerHTML = "Hòa";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 1) {
        document.getElementById("cpt_choose").innerHTML = "Kéo";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 2) {
        document.getElementById("cpt_choose").innerHTML = "Kéo";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 3) {
        document.getElementById("cpt_choose").innerHTML = "Búa";
        document.getElementById("result").innerHTML = "Thắng";
        document.getElementById("button_win").style.display = "block";
        document.getElementById("button_nomal").style.display = "none";
    }
    if (keo == 4) {
        document.getElementById("cpt_choose").innerHTML = "Kéo";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
    if (keo == 5) {
        document.getElementById("cpt_choose").innerHTML = "Kéo";
        document.getElementById("result").innerHTML = "Thua";
        document.getElementById("button_nomal").style.display = "block";
        document.getElementById("button_win").style.display = "none";
    }
}

document.getElementById("button_nomal").onclick = function() {
    location.reload()
}
document.getElementById("button_win").onclick = function() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
      document.getElementById("point").innerHTML = localStorage.clickcount;
    } else {
      document.getElementById("point").innerHTML = "Rất tiếc, trình duyệt của bạn không hỗ trợ Local Storage...";
    }
    document.getElementById("button_win").style.display = "none";
}