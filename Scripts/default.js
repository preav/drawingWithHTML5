$(document).ready(function(){
	drawRect();
	drawMoreRect();
	drawColouredRect();
	drawGradientRect();
	gradientBorder();
});

function drawRect(){
	var rectCanvas=document.getElementById("rectCanvas1");
	var cont=rectCanvas.getContext("2d");
	cont.fillRect(425, 20, 300, 80);
}

function drawMoreRect(){
	var rectCanvas=document.getElementById("rectCanvas2");
	var cont=rectCanvas.getContext("2d"), 
	offset=42,
	clearOffset=30,
	pushDownOffset=10,
	height=45,
	width=150,
	count=5,
	i=0;
	for(i=0;i<count;i++){
		cont.fillRect(i*(offset+width)+offset, offset, width, height );
		cont.clearRect(i*(offset+width)+(clearOffset/2)+offset, offset+(clearOffset/2)+pushDownOffset, width-clearOffset, height-clearOffset);
		cont.strokeRect(i*(offset+width)+offset, 2*offset+height, width, height);
	}
}

function drawColouredRect(){
	var rectCanvas=document.getElementById("rectCanvas3");
	var cont=rectCanvas.getContext("2d");
	cont.fillStyle="#bbbbbb";
	cont.fillRect(20, 10, 300, 75);
}

function drawGradientRect(){
	var rectCanvas=document.getElementById("rectCanvas3"); 
	var cont=rectCanvas.getContext("2d");


	gradient=cont.createLinearGradient(340, 0, 650, 0);
	addColorStops(gradient);
	cont.fillStyle=gradient;
	cont.fillRect(340, 10, 300, 75);

	gradient=cont.createRadialGradient(810, 45, 10, 810, 45, 140);
	addColorStops(gradient);
	cont.fillStyle=gradient;
	cont.fillRect(660, 10, 300, 75);

	cont.lineWidth= 5;
	cont.strokeRect(995, 10, 125, 70);
}

function gradientBorder(){
	var rectCanvas=document.getElementById("rectCanvas4");
	var cont=rectCanvas.getContext("2d");

	cont.lineWidth= 5;
	cont.strokeRect(20, 13, 300, 75);

	gradient=cont.createLinearGradient(245, 15, 620, 10);
	addColorStops(gradient);
	cont.strokeStyle=gradient;
	cont.lineWidth=10;
	cont.strokeRect(345, 15, 300, 70);

	cont.fillStyle="magenta";
	cont.strokeStyle="blue";
	cont.lineWidth=5;

	cont.beginPath();
	cont.moveTo(820, 13);
	cont.lineTo(970, 87);
	cont.lineTo(670, 87);
	cont.closePath();
	cont.fill();
	cont.stroke();
}

function addColorStops(gradient){
	gradient.addColorStop("0", "magenta");
	gradient.addColorStop("0.25", "blue");
	gradient.addColorStop("0.50", "green");
	gradient.addColorStop("0.75", "yellow");
	gradient.addColorStop("1.0", "red");
}
