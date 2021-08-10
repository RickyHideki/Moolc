function bhaskaraAnswer() {
    var BhaskaraAValue = document.getElementById("bhaskara__a-value").value;
    var BhaskaraBValue = document.getElementById("bhaskara__b-value").value;
    var BhaskaraCValue = document.getElementById("bhaskara__c-value").value;

    var Delta = BhaskaraBValue * BhaskaraBValue - 4 * BhaskaraAValue * BhaskaraCValue;

    if(Delta < 0){
        alert("Não há raízes reais");
    }else if(Delta == 0){
        var BhaskaraPart1 = -BhaskaraBValue + Math.sqrt(Delta);
        var BhaskaraPart2 = BhaskaraPart1 / 2 * BhaskaraAValue;
        alert("Só há uma ou duas raízes iguais, sendo ela: " + BhaskaraPart2);
    }else if(Delta > 0){
        var Bhaskara1part1 = -BhaskaraBValue + Math.sqrt(Delta);
        var Bhaskara1part2 = Bhaskara1part1 / (2 * BhaskaraAValue);

        var Bhaskara2part1 = -BhaskaraBValue - Math.sqrt(Delta);
        var Bhaskara2part2 = Bhaskara2part1 / (2 * BhaskaraAValue);
    
        alert("X' = " + Bhaskara1part2 + " X'' = " + Bhaskara2part2);
    }
}