 document.getElementById("rbgBut").onclick = function () {
	 document.getElementById("atRob").src = "Image/robodog.jpeg";
	 document.getElementById("robTitle").innerHTML = "Robodog";
	 
 } 

 document.getElementById("atlsBut").onclick = function () {
	 document.getElementById("atRob").src = "Image/atlas.jpg";
	 document.getElementById("robTitle").innerHTML = "Atlas";
 } 
 
 document.getElementById("butW1").onclick = function () {
	 document.getElementById("robTitle").style.color = "white";
 }
 
 document.getElementById("butW2").onclick = function () {
	 document.getElementById("robTitle").style.color = "yellow";
 }
 
 document.getElementById("butW3").onclick = function () {
	 document.getElementById("robTitle").style.color = "red";
 }
 
 document.getElementById("subComm").onclick = function () {
	 var cmt = document.getElementById("comRob").value;
	 alert(cmt);
 }
 
 var robot = ["atlas", "robodog", "axeSurgery1", "axeSurgery2"];
 
 document.getElementById("subReq").onclick = function () {
	 var reqqBot = document.getElementById("reqNrb").value;
	 robot.push(reqqBot);
	 alert("permintaan anda diterima");
 }
 console.log(robot);