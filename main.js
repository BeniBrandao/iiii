const camera = document.getElementById("camera");
const result = document.getElementById("result");

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90

});


<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>

Webcam.attach(camera);

function take_snapshot(){
    result.innerHTML = "";
    Webcam.snap(function (dataURI){
        const captura = document.createElement("img");
        captura.setAttribute("id" , "captura");
        captura.setAttribute("src" , dataURI);
        result.appendChild(captura);
    })
    check();

    }
    function check(){
        const img = document.getElementById('captura');
        classifier.classify(img, gotResult);
    }

function gotResult(error, result){
    console.log(error);
    console.log(result);

    const objeto = document.getElementById("objectName");
    const precisao = document.getElementById("objectAccuracy");

    if(!error) {
        objeto.innerHTML = result[0].label;
        precisao.innerHTML = result[0].confidence.toFixed(2);
    } else {
        console.error(error);
    }
}


const teacheblemachinLink = 'https://teachablemachine.withgoogle.com/models/v_sl95BzE/'
const modeLink = teacheblemachinLink +'model.json'
const classifier = ml5.imageClassifier(modeLink, modelLoaded)

function modelLoaded(){
    console.log('Modelo Caregado')
    Webcam.attach(camera);
}