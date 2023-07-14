var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";

    recognition.start();
}
recognition.onresult = function (event)
{
    console.log(event);

    var Content = event.result[0][0].transcrip;

    console.log(Content);

    document.getElementById("textbox").innerHTML = "";
}