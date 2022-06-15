function start_listening(){
    navigator.mediaDevices.getUserMedia({audio : true});
    sound_model=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lIkSXm8bb/model.json", sound_model_ready);
}

function sound_model_ready(){
    console.log("model is ready");
    sound_model.classify(get_result)
}

function get_result(e,r){
     if(e){
         console.error(e);
     }
     else{
         console.log(r);
         sound_name=r[0].label;
         sound_accuracy=(r[0].confidence*100).toFixed(2);
         document.getElementById("display_sound").innerHTML="I can hear " + sound_name;
         document.getElementById("sound_accuracy").innerHTML="accuracy: "+ sound_accuracy+ "%";
         red=Math.floor(Math.random()*256);
        green=Math.floor(Math.random()*256);
        blue=Math.floor(Math.random()*256);
        document.getElementById("display_sound").style.color="rgb(" + red + "," +green +"," + blue+ ")";
        document.getElementById("sound_accuracy").style.color="rgb(" + red + "," +green +"," + blue+ ")";

        img1=document.getElementById("alien_1");
        img2=document.getElementById("alien_2");
        img3=document.getElementById("alien_3");
        img4=document.getElementById("alien_4");
        

        if(sound_name=="bell"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }

        else if(sound_name=="rattle"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }

        else if(sound_name=="clapping"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }

        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }


     }
}