function XvAnswer(){
    var XvAValue = document.getElementById("Xv__a-value").value;
    var XvBValue = document.getElementById("Xv__b-value").value;

    var Xv = -XvBValue / (2 * XvAValue);
    alert("O valor do X do vértice é de: " + Xv) 
}