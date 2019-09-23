var smileys = [":)", ":D", "x)", ";)", ":p", ";p"];
var buttonInput = document.getElementById("btn");
var resultElement = document.getElementById("result");
var textElement = document.getElementById("text");


buttonInput.addEventListener("click", function () {
    var text = textElement.value;
    for (let i = 0; i < smileys.length; i++){
        while (text.includes(smileys[i])){
            text = text.replace(smileys[i], "--")
        }
    }
    console.log(text);
    resultElement.innerHTML = text;
})
