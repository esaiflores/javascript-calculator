function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function printOutput(num) {
    document.getElementById("output-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText = getFormattedNumber(num);
}

function getFormattedNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value; 
}

function reverseNumberForamt(num) {
    return Number(num.replace(/,/g,''));

}

let operator = document.getElementsByClassName("operator");
    for(let i=0; i<operator.length; i++){
        operator[i].addEventListener('click',function () {
            if(this.id=="clear"){
                printHistory("");
                printOutput("");
            }
            if(this.id=="backspace"){
                let output=reverseNumberForamt(getOutput()).toString();
                if(output){
                    output= output.substr(0, output.length-1)
                    printOutput(output);
                }
            }
        });
}

    let number = document.getElementsByClassName("number");
    for(let i=0; i<operator.length; i++) {
        number[i].addEventListener('click',function () {
            let output = reverseNumberForamt(getOutput());
            if(output!=NaN){
                output=output+this.id;
                printOutput(output);
            }
        });
    }
