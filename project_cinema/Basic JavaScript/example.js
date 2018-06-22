//This file is for code snippets used as examples for TTA

// Personally playing with arrays



// Demonstrates the use of 'this' as a shortcut to 'myfunction'
var lang = "JavaScript"

function myFunction(lang) {
	this.lang = lang;
	alert("Hello, welcome to "+this.lang);
};

// Car make and model 
var myCar1 = new Object();

myCar1.make = "Ford";
myCar1.model = "Mustang";

document.write(myCar1.make);
document.write(myCar1["model"]);

// further instantiation of make and model
function myFunction(make, model) {
	this.make = make;
	this.model = model;
	document.write(this.make + " : " + this.model);

	var myCar1 = new myFunction("Ford", "Mustang");
	var myCar2 = new myFunction("Ford", "F150");
}

// Instantiations for animals to demonstate property inheritance
function animal(name, eyes, ears, nose, legs, fur) {
	this.name = name;
	this.eyes = eyes;
	this.ears = ears;
	this.nose = nose;
	this.legs = legs;
	this.fur = fur;
	document.write("<br><br>Species: "+this.name);
	document.write("<br>Eyes: "+this.eyes);
	document.write("<br>Ears: "+this.ears);
	document.write("<br>Nose: "+this.nose);
	document.write("<br>Legs: "+this.legs);
	document.write("<br>Fur: "+this.fur);
};
var zebra = new animal("zebra",2,2,1,4,true);
var snake = new animal("snake",2,0,1,0,false);

// Exploring data types
function myFunction() {
var num1 = 2;
var num2 = 12;
var equality = (num1 == "2");
var strict = (num1 === "2");
document.write("Equality: "+equality+"<br>");
document.write("Strict: "+strict+"<br><br>");

document.write("Data type: "+typeof num1);
document.write("<br>Data type: "+typeof "2");

var test = isNaN(num2);
console.log("isNaN(num2): "+test);
var words = "words";

var array = [1,2,3,4,5]
document.write("<br>Data type: "+typeof array);

var test2 = isNaN(words);
console.log("isNaN(test2): "+test2);
var results = num1 + num2;
document.write("<br>Data type: "+typeof results);

console.log(num1+" + "+num2+" = "+results);

};
myFunction()

// If else statement using '?'

function myFunction() {
var status;
    var age = 19;
    status = age >18 ? "adult" : "minor";
    console.log(status);
};
 myFunction()


// ClassName selector with HTML array

<p class="text">Some text</p>
<p class="text">More text</p>
<p class="text">Still more text</p> 
<p class="text">Another chunk of text</p>

<script>

var text = document.getElementsByClassName("text");
text[1].style.color = "red";

</script>


//Using an embeded array to countdown
<html>
<head>
<style>
button{font-size:1.5em:font-weight:bold;height:75px;width:100px;}
</style>
</head>
<body>

<h1 id="countdown">Click button for colors!</h1>
<br><br>
<button class="btn" onclick="up()">Start!</button>

<script>
var i=0;
var myArray = [10,9,8,7,6,5,4,3,2,1,"Happy New Year"];
function up() {
	if(i < myArray.length) {
	document.getElementById('countdown').style.color = "red";
	document.getElementById('countdown').innerHTML = myArray[i];
	i++;
	}
	window.setTimeout(up, 250);
};
</script>

</body>
</html>






























