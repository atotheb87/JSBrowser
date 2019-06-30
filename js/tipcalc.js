var checkAmountText = document.getElementById("check-amount"),
    tipPercentageText = document.getElementById("tip-percentage"),
    calculateTipButton = document.getElementById("calculate-tip"),
    totalToPayDiv = document.getElementById("total-to-pay"),
    fifteenPercentButton = document.getElementById("fifteen-percent"),
    twentyPercentButton = document.getElementById("twenty-percent"),
    twentyfivePercentButton = document.getElementById("twentyfive-percent");

fifteenPercentButton.addEventListener("click", function(){
        var checkAmount = parseFloat(checkAmountText.value),
            fifteenPercent =parseFloat(15)/100;
            tipAmount = checkAmount * fifteenPercent;
            roundedTipAmount = tipAmount.toFixed(2);
            totalAmount = checkAmount + tipAmount,
            roundedTotalAmount = totalAmount.toFixed(2);

            totalToPayDiv.innerHTML = "<strong>Check Amount:</strong> $" +
            checkAmount + "<br>" +
            "<strong>Tip Amount:</strong> $" + roundedTipAmount + "<br>" +
            "<strong>Total to Pay:</strong> $" + roundedTotalAmount;
})

twentyPercentButton.addEventListener("click", function(){
    var checkAmount = parseFloat(checkAmountText.value),
        twentyPercent =parseFloat(20)/100;
        tipAmount = checkAmount * twentyPercent;
        roundedTipAmount = tipAmount.toFixed(2);
        totalAmount = checkAmount + tipAmount,
        roundedTotalAmount = totalAmount.toFixed(2);

        totalToPayDiv.innerHTML = "<strong>Check Amount:</strong> $" +
        checkAmount + "<br>" +
        "<strong>Tip Amount:</strong> $" + roundedTipAmount + "<br>" +
        "<strong>Total to Pay:</strong> $" + roundedTotalAmount;
})

twentyfivePercentButton.addEventListener("click", function(){
    var checkAmount = parseFloat(checkAmountText.value),
        twentyfivePercent =parseFloat(25)/100;
        tipAmount = checkAmount * twentyfivePercent;
        roundedTipAmount = tipAmount.toFixed(2);
        totalAmount = checkAmount + tipAmount,
        roundedTotalAmount = totalAmount.toFixed(2);

        totalToPayDiv.innerHTML = "<strong>Check Amount:</strong> $" +
        checkAmount + "<br>" +
        "<strong>Tip Amount:</strong> $" + roundedTipAmount + "<br>" +
        "<strong>Total to Pay:</strong> $" + roundedTotalAmount;
})

calculateTipButton.addEventListener("click", function(){
        var checkAmount = parseFloat(checkAmountText.value),
            tipPercentage = parseFloat(tipPercentageText.value)/100;
        if(isNaN(checkAmount) || isNaN(tipPercentage))
        {
            alert("That's not a number!");
            console.log("Error, couldn't parse number");
            return;
        }
        var tipPercentage = parseFloat(tipPercentageText.value)/100,
            tipAmount = checkAmount * tipPercentage,
            roundedTipAmount = tipAmount.toFixed(2),
            totalAmount = checkAmount + tipAmount,
            roundedTotalAmount = totalAmount.toFixed(2);

            totalToPayDiv.innerHTML = "<strong>Check Amount:</strong> $" +
            checkAmount + "<br>" +
            "<strong>Tip Amount:</strong> $" + roundedTipAmount + "<br>" +
            "<strong>Total to Pay:</strong> $" + roundedTotalAmount;
    });
