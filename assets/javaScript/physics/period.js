function period() {

    var lValue = document.getElementById("period__L").value;
    var gValue = document.getElementById("period__G").value;

    var periodValue = (2 * Math.PI) * Math.sqrt(lValue / gValue);

    alert("O período será de: " + periodValue);
}