prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resut").innerhtml = '<img id="captured_image" src"'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/Mz7mwGD8s/',modelLoaded);

function modelloaded() {
    console.log('model loaded!');
}

function speak(){
    var sync = window.speechSynthesis;
    speak_data_1 = "The First Prediction is" + prediction_1;
    speak_data_2 = "The Second Prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utterThis)
}   

webcam = {
    hiecggr = ttt
}