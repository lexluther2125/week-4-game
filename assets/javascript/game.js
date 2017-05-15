$(document).ready(function() {
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    $("#number-to-guess").text(targetNumber);
    var counter = 0;
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);
    var numberOptions = [num1, num2, num3, num4];
    $("#total-wins").text(wins);
    $("#total-losses").text(losses);
    $("#totalNumber").text(counter);

    function reset() {
        targetNumber = Math.floor(Math.random() * 101 + 19);
        $("#number-to-guess").text(targetNumber);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        numberOptions = [num1, num2, num3, num4];
        counter = 0;
        $("#totalNumber").text(counter);
    }
    $("#one").on("click", function() {
        counter = counter + num1;
        $("#totalNumber").text(counter);
        if (counter === targetNumber) {
            alert("Congratulations! You won!");
            wins++;
            $("#total-wins").text(wins);
            reset();
        } else if (counter >= targetNumber) {
            alert("Sorry, you lost!");
            losses++;
            $("#total-losses").text(losses);
            reset();
        }
    });
    $("#two").on("click", function() {
        counter = counter + num2;
        $("#totalNumber").text(counter);
       if (counter === targetNumber) {
            alert("Congratulations! You won!");
            wins++;
            $("#total-wins").text(wins);
            reset();
        } else if (counter >= targetNumber) {
            alert("Sorry, you lost!");
            losses++;
            $("#total-losses").text(losses);
            reset();
        }
    });
    $("#three").on("click", function() {
        counter = counter + num3;
        $("#totalNumber").text(counter);
        if (counter === targetNumber) {
            alert("Congratulations! You won!");
            wins++;
            $("#total-wins").text(wins);
            reset();
        } else if (counter >= targetNumber) {
            alert("Sorry, you lost!");
            losses++;
            $("#total-losses").text(losses);
            reset();
        }
    });
    $("#four").on("click", function() {
        counter = counter + num4;
        $("#totalNumber").text(counter);
       if (counter === targetNumber) {
            alert("Congratulations! You won!");
            wins++;
            $("#total-wins").text(wins);
            reset();
        } else if (counter >= targetNumber) {
            alert("Sorry, you lost!");
            losses++;
            $("#total-losses").text(losses);
            reset();
        }
    });
});