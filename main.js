function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YPkZwvISR/model.json',modelReady);
}

function modelRedy(){
classifier.classify(gotResults);
}

function gotResults(error, results) 
    
    
{
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img-document.getElementById('dog1');
        img1 = document.getElementById('cat1');
        img2 = document.getElementById('lion1');
        img3 = document.getElementById('cow1');

        if (results[0].label == "barking"){
            img.src = 'dog 01.gif';
            img1.src = 'cow 01.png';
            img2.src = 'lion 01.png';
            img3.src = 'cat 01.png';
        }else if(results[0].label =="roar"){
            img.src = 'dog 01.png';
            img1.src = 'cow 01.png';
            img2.src = 'lion 01.gif';
            img3.src = 'cat 01.png';
        }else if(results[0].label == "meowing"){
            img.src = 'dog 01.png';
            img1.src = 'cow 01.png';
            img2.src = 'lion 01.png';
            img3.src = 'cat 01.gif';
        }else{
            img.src = 'dog 01.png';
            img1.src = 'cow 01.gif';
            img2.src = 'lion 01.png';
            img3.src = 'cat 01.png';
        }
    }
}