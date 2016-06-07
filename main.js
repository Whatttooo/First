
function homeTempUp(){
    var x = parseInt(document.getElementById("num-Temp").innerHTML, 10) + 1;
    localStorage.setItem("newTemp", x);
    document.getElementById("num-Temp").innerHTML = localStorage.getItem("newTemp");


}

function homeTempDown(){
    var x = parseInt(document.getElementById("num-Temp").innerHTML,10)-1;
    localStorage.setItem("newTemp", x);
    document.getElementById("num-Temp").innerHTML = localStorage.getItem("newTemp");


}





function sliderMoveFooter(){
    var x = document.getElementsByClassName('slider-room');
    if(x[0].style.marginLeft == "24.9px"){
        x[0].style.marginLeft = "0px";
        document.getElementsByClassName('room-lock')[0].style.backgroundColor = "#000000";
        document.getElementsByClassName('lock-status-room')[0].innerHTML = "UNLOCKED";
    }else{
        x[0].style.marginLeft = "24.9px";
        document.getElementsByClassName('room-lock')[0].style.backgroundColor = "#cc0000";
        document.getElementsByClassName('lock-status-room')[0].innerHTML = "LOCKED";
    }

}
function sliderMoveFooter2(){
    var x = document.getElementsByClassName('slider-front-door');
    if(x[0].style.marginLeft == "24.9px"){
        x[0].style.marginLeft = "0px";
        document.getElementsByClassName('front-door-lock')[0].style.backgroundColor = "#000000";
        document.getElementsByClassName('lock-status-front-door')[0].innerHTML = "UNLOCKED";
    }else{
        x[0].style.marginLeft = "24.9px";
        document.getElementsByClassName('front-door-lock')[0].style.backgroundColor = "#cc0000";
        document.getElementsByClassName('lock-status-front-door')[0].innerHTML = "LOCKED";
    }

}
function sliderMoveFooter3(){
    var x = document.getElementsByClassName('slider-back-door');
    if(x[0].style.marginLeft == "24.9px"){
        x[0].style.marginLeft = "0px";
        document.getElementsByClassName('back-door-lock')[0].style.backgroundColor = "#000000";
        document.getElementsByClassName('lock-status-back-door')[0].innerHTML = "UNLOCKED";
    }else{
        x[0].style.marginLeft = "24.9px";
        document.getElementsByClassName('back-door-lock')[0].style.backgroundColor = "#cc0000";
        document.getElementsByClassName('lock-status-back-door')[0].innerHTML = "LOCKED";
    }

}

function sliderMoveFooter4(){
    var x = document.getElementsByClassName('slider-porch-light');
    if(x[0].style.marginLeft == "24.9px"){
        x[0].style.marginLeft = "0px";
        document.getElementsByClassName('porch-light-on-off')[0].style.backgroundColor = "#000000";
        document.getElementsByClassName('light-status-porch')[0].innerHTML = "OFF";
    }else{
        x[0].style.marginLeft = "24.9px";
        document.getElementsByClassName('porch-light-on-off')[0].style.backgroundColor = "#cc0000";
        document.getElementsByClassName('light-status-porch')[0].innerHTML = "ON";
    }
    document.getElementsByClassName('slider-room')[0].style.marginLeft = "24.9px";
    document.getElementsByClassName('room-lock')[0].style.backgroundColor = "#cc0000";
    document.getElementsByClassName('lock-status-room')[0].innerHTML = "LOCKED";
}
