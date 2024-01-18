function calculate() {
    var calculationType = document.getElementById('calculationType').value;
    var amount = parseFloat(document.getElementById('amount').value);
    var frequency = parseInt(document.getElementById('frequency').value);
    var annualReturn = parseFloat(document.getElementById('return').value);
    var duration = parseInt(document.getElementById('duration').value);
    var inflation = parseFloat(document.getElementById('inflation').value);

    var totalMonths = duration * 12;

    if (calculationType === 'sip') {
        var monthlyReturn = (1 + annualReturn / 100) ** (1 / 12) - 1;
        var futureValue = amount * ((1 + monthlyReturn) ** totalMonths - 1) / monthlyReturn * (1 + monthlyReturn);
    } else if (calculationType === 'compound') {
        var compoundInterest = amount * ((1 + annualReturn / 100) ** totalMonths - 1);
        var futureValue = amount + compoundInterest;
    } else if (calculationType === 'simple') {
        var simpleInterest = (amount * annualReturn * duration) / 100;
        var futureValue = amount + simpleInterest;
    }

    // Adjust for inflation
    var inflationFactor = (1 + inflation / 100) ** duration;
    var futureValueWithInflation = futureValue / inflationFactor;

    document.getElementById('result').innerHTML = "Future Value of Investment: $" + futureValueWithInflation.toFixed(2);
}
