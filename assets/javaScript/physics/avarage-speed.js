function avarageSpeed() {
    
    var sValue = document.getElementById("avarage-speed__S-value--input").value;
    var soValue = document.getElementById("avarage-speed__So-value--input").value;

    var tValue = document.getElementById("avarage-speed__T-value--input").value;
    var toValue = document.getElementById("avarage-speed__To-value--input").value;

    var avarageSpeedValue = (sValue - soValue) / (tValue - toValue);

    alert("A velocidade média é de: " + avarageSpeedValue)
}