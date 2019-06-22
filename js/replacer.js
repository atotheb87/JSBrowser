var textBox = document.getElementById("text-to-display"),
    printButton = document.getElementById("print-button"),
    clearButton = document.getElementById("clear-button"),
    printArea = document.getElementById("print-area");


printButton.addEventListener("click", function(){
    var text = textBox.value;
    // printArea.innerText = printArea.innerText + "\n" + text;
    // printArea.innerText += "\n" + text;
    printArea.innerHTML += text + "<br>";
});

clearButton.addEventListener("click", function(){
    // printArea.innerText = "";
    printArea.innerHTML = "";
    textBox.value = "";
});