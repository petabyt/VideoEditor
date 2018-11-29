var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d")
var video = document.getElementById("video");

setInterval(function() {
	var size = 2;
	canvas.width = video.videoWidth/size;
	canvas.height = video.videoHeight/size;
	c.drawImage(video,0,0,video.videoWidth/size,video.videoHeight/size);
	c.fillStyle = "white";
	c.font = "15px Arial";
	c.fillText("Fireworks from July 1st, 2018. Sorry about the unstable video.",18,30);
	c.fillText("This is a test for a HTML5 based video editor (if I ever get to finishing it.)",18,45);
},1);