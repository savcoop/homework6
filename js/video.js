var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
	volume = document.querySelector("#volume");
}

function playVid() { 
	video.play();
	volume.innerHTML = video.volume * 100 + '%';
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= .8;
  	console.log("Speed is "+ video.playbackRate);

} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
 	console.log("Speed is "+ video.playbackRate );
} 

function skipAhead() {
	if (video.currentTime + 60 < video.duration){
		video.currentTime = video.currentTime + 60;
	}
	else{
		video.currentTime = 0;
		video.playbackRate = 1;
		playVid();
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() {
		console.log(video.muted);  	
  		if (video.muted){
  			video.muted=false;
  			console.log("Unmuted");
  			var button = document.querySelector("#mute");
  			button.innerHTML="Mute";
  		}

  		else{
  			video.muted = true;
  			console.log("Unmuted");
  			var button = document.querySelector("#mute");
  			button.innerHTML="Unmute";
  		}
}

 function changeVolume() {
 	let slider = document.querySelector("#volumeSlider"); 
 	console.log(slider.value);
	volume.innerHTML = slider.value +'%';
	console.log("Volume is " + video.volume);
	video.volume = slider.value / 100;
 }
       

function gray() { 
	video.className = "grayscale";
	console.log("In grayscale");
}

function color() {
	video.className =! "grayscale";
	console.log("In color");
}
