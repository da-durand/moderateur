var textElement = document.getElementById("text");
var smileys = ["A", ":D", "x)", ":(", ";)"];
var buttonInput = document.getElementById("btn");
var resultElement = document.getElementById("result");

i = 0;
j = 0;

var btnEvent = buttonInput.addEventListener("click", function () {
    while (i < textElement.value.length) {
        while (j < smileys.length) {
            if (textElement.value[i] == smileys[j]) {
                resultElement.innerHTML = "Teste";
            }
            j++;
        }
        console.log("teste");
    }

})
