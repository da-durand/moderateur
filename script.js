$(document).ready(function(){
    
    var smileys = [":)", ":D", "x)", ";)", ":p", ";p"];

    $("#btn").click(function(){
        text = $("#text").html();
        for (let i = 0; i < smileys.length; i++){
            while (text.includes(smileys[i])){
                text = text.replace(smileys[i], "--")
                console.log(text);
            }
        }
        $("#result").text(text);
    })
    
});
