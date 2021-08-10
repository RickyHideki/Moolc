function deltaAnswer() {
    
    var deltaAValue = document.getElementById("delta__a-value").value;
    var deltaBValue = document.getElementById("delta__b-value").value;
    var deltaCValue = document.getElementById("delta__c-value").value;

    var Delta = deltaBValue * deltaBValue - 4 * deltaAValue * deltaCValue;
    alert("O valor de delta é: " + Delta);
}