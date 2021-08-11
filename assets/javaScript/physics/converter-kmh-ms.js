function converterKmhMs() {
    var selectCoverterValue = document.getElementById("converter-kmh-ms__select-value").value;
    var inputConverterValue = document.getElementById("converter-khm-ms__input-value").value;

    if(selectCoverterValue == 1){
        var ConverterValue = inputConverterValue / 3.6;
        alert(ConverterValue + "M/s")
    }
    if(selectCoverterValue == 2){
        var ConverterValue = inputConverterValue * 3.6;
        alert(ConverterValue + "Km/h")
    }
}