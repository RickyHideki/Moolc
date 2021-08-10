function axbAnswer() {
    var axbAValue = document.getElementById("axb__a-value").value;
    var axbXValue = document.getElementById("axb__x-value").value;
    var axbBValue = document.getElementById("axb__b-value").value;

    var axb = axbAValue * axbXValue + axbBValue;
    alert("f(" + axbXValue + ") = " + axbAValue + " * " + axbXValue + " + " + axbBValue + "\n" + "f(" + axbXValue + ") = " + axb); 
}