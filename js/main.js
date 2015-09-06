function dropCubes() {
	var cubeNumber = getRandomNumber();
	document.getElementById("cube1").innerHTML = cubeNumber;
	cubeNumber = getRandomNumber();
	document.getElementById("cube2").innerHTML = cubeNumber;
	//droptest();
}

function getRandomNumber() {
	var number = Math.random();
	number = number * 100;
	number = Math.round(number);
	number = number % 6;
	number = number + 1;
	return number;
}

function droptest() {
	var pcs = 10;
	var numbersum= 0;
	var i;
	for (i = 0; i < pcs; i++)  {
		numbersum = numbersum + getRandomNumber();
	}
	var average = numbersum / pcs;
	document.getElementById("cube3").innerHTML = average;
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	//console.log("ev.target.id: " + ev.target.id);
	//console.log("ev.target.parentNode: " + ev.target.parentNode);
	//console.log("data: " + data);
	//console.log(ev.target.id.charAt(0));
	var newtarget = ev.target;
	if ((ev.target.id.charAt(0) == "r") || (ev.target.id.charAt(0) == "b")) {
		newtarget = ev.target.parentNode;
		//ev.target = newtarget;
		//console.log("if newtarget.id: " + newtarget.id);
		//console.log("if ev.target.id: " + ev.target.id);
	}
	//console.log("if után newtarget.id: " + newtarget.id);
	newtarget.appendChild(document.getElementById(data));
}


function tableInitialize(){
	$('#red-token1').appendTo('#field12');
	$('#red-token2').appendTo('#field12');
	$('#red-token3').appendTo('#field1');
	$('#red-token4').appendTo('#field1');
	$('#red-token5').appendTo('#field1');
	$('#red-token6').appendTo('#field1');
	$('#red-token7').appendTo('#field1');
	$('#red-token8').appendTo('#field20');
	$('#red-token9').appendTo('#field20');
	$('#red-token10').appendTo('#field20');
	$('#red-token11').appendTo('#field18');
	$('#red-token12').appendTo('#field18');
	$('#red-token13').appendTo('#field18');
	$('#red-token14').appendTo('#field18');
	$('#red-token15').appendTo('#field18');
	$('#black-token1').appendTo('#field13');
	$('#black-token2').appendTo('#field13');
	$('#black-token3').appendTo('#field24');
	$('#black-token4').appendTo('#field24');
	$('#black-token5').appendTo('#field24');
	$('#black-token6').appendTo('#field24');
	$('#black-token7').appendTo('#field24');
	$('#black-token8').appendTo('#field5');
	$('#black-token9').appendTo('#field5');
	$('#black-token10').appendTo('#field5');
	$('#black-token11').appendTo('#field7');
	$('#black-token12').appendTo('#field7');
	$('#black-token13').appendTo('#field7');
	$('#black-token14').appendTo('#field7');
	$('#black-token15').appendTo('#field7');
};