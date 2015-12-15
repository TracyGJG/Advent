"use strict";

(function() {
	var dtNow = new Date();
	var objCal = document.querySelector('.calendar');
	var objImg = document.querySelector('img');
	var objMain = document.querySelector("main");
	var objWindows = objCal.querySelectorAll("div");
	var numWinIndex=0, numWinMax=objWindows.length;
	var numToday = (new Date()).getDate();
	var strImagesFolder = "images/";
	var arrImages = [	//	All images need to be 600x800 or 800x600 pixels.
		"decoration.jpg", "xmas_tree.jpg"];

	objImg.addEventListener( "load", function() {
		objMain.className = (objImg.width==800)? "land": "port";

		for (; numWinIndex<numWinMax; numWinIndex+=1) {
			var numWindow = parseInt(objWindows[numWinIndex].innerHTML,10);
			var strWindowClass = (numWindow > numToday)? "future":
				((numWindow === numToday)? "today": "history");
			objWindows[numWinIndex].className = strWindowClass;
		}
		objCal.addEventListener("click", function(){
			var clickedNode = event.target || event.srcElement;
			if ((clickedNode.className === "today") || (clickedNode.className === "history")) {
				var numDay = parseInt(clickedNode.innerHTML,10);
				alert( 'Day '+ numDay+ ' of Advent\n\n"'+
					messages[numDay -1][0]+ '"\n\n\tby '+
					messages[numDay -1][1]+ '\n\n');
			}
		});
		objCal = null;
		objImg = null;
		objMain = null;
		objWindows = null;
	});

	document.querySelector('h1').innerText += (" - "+ dtNow.getFullYear());
	objImg.src = strImagesFolder+ arrImages[ Math.floor(Math.random()*arrImages.length)];
}());
