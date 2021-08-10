function YvAnswer() {
    var YvAValue = document.getElementById("Yv__a-value").value;
    var YvBValue = document.getElementById("Yv__b-value").value;
    var YvCValue = document.getElementById("Yv__c-value").value;

    var Delta = YvBValue * YvBValue - 4 * YvAValue * YvCValue;
    var Yv = Delta / (4 * YvAValue);

    alert("O valor do Y do vértice é de: " + Yv);
}