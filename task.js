var myHeading = document.getElementById("myHeading");
var myButton = document.getElementById("myButton");
var myTextInput = document.getElementById("myTextInput");
	
myButton.addEventListener("click", () => {
	myHeading.style.color = myTextInput.value;

});

const list = document.getElementsByTagName("ul");

for(i = 0; i < list.length; i++) {
	list[i].style.color = "green";
}

const evens = document.querySelectorAll("li:nth-child(odd)");

for(i = 0; i < evens.length; i++){
	evens[i].style.backgroundColor = "lightgreen";

}

var button = document.querySelector("#testbtn");
var p = document.querySelector("#test");

button.addEventListener("click", deyis);

function deyis() {
	p.textContent = "Someone just Clicked me";
}