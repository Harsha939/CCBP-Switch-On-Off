let bulbImg = document.getElementById("bulbImage");
let catImg = document.getElementById("catImage");
let switchStatus = document.getElementById("switchStatus");
let offSwitchBtn = document.getElementById("offSwitch");
let onSwitchBtn = document.getElementById("onSwitch");

function switchOff() {
    switchStatus.textContent = "Switched Off";
    offSwitchBtn.style.backgroundColor = "#cbd2d9";
    onSwitchBtn.style.backgroundColor = "#22c55e";
    bulbImg.src = "Images/Bulb Of.png";
    catImg.src = "Images/Cat Off.png";
}

function switchOn() {
    switchStatus.textContent = "Switched On";
    offSwitchBtn.style.backgroundColor = "#e12d39";
    onSwitchBtn.style.backgroundColor = "#cbd2d9";
    bulbImg.src = "Images/Bulb On.png";
    catImg.src = "Images/Cat On.png";
}