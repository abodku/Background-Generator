var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	var angle = document.getElementById("angle").value;

	if (angle=="right"){
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ") fixed";
	}
	else if (angle=="bottom"){
		body.style.background = 
		"linear-gradient(to bottom, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ") fixed";	
	}
	else if (angle=="45"){
		body.style.background = 
		"linear-gradient(45deg, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ") fixed";	
	}
		else if (angle=="135"){
		body.style.background = 
		"linear-gradient(135deg, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ") fixed";	
	}


	css.textContent ="background: " + body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
document.getElementById("angle").addEventListener("input", setGradient)