Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#camera');

function take_picture(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('pic').innerHTML = 
         '<img src="'+data_uri+'"/>';
    } );
}
console.log(ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qc49azGlJ/model.json",modelready);

function modelready(){
    console.log("model is ready boss")
}