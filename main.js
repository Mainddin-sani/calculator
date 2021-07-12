// get history form calculator
function getHistory() {
    return document.getElementById('history__value').innerText;
}

// display print history board
function printHistory(num) {
    document.getElementById('history__value').innerText = num;
}

// get output value
function getOutput(num) {
    if (num == "") {
        document.getElementById('calculator__display').innerText = num;
    }else {
        document.getElementById('calculator__display').innerText = formate(num)
    }
    
}

function formate(num) {
    let numberFun = Number(num);
    let value = numberFun.toLocaleString("en");
    return value;
}

let history;
var numberBtn = document.getElementsByClassName('number');
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', function () {
        history = getHistory();
        history = history + this.id;
        printHistory(history);
    });
}

var operatorBtn = document.getElementsByClassName('operator');
for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click', function () {
        if (this.id == "clear") {
            getOutput("");
            printHistory("");
        } else if (this.id == "backspace") {
            history = getHistory();
            history = history.substr(0, history.length - 1);
            printHistory(history);
        } else if (this.id == "=") {
            history = getHistory();
            var result = eval(history);
            getOutput(result);
            printHistory(history);
            
        } else {
            history = getHistory();
            history = history + this.id;
            printHistory(history);
        }
    });
}
