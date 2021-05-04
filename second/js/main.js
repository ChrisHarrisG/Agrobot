const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

var attempt=3; //no of attempts
// below function executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "admin" && password == "agrobot"){
		//alert("Login Successfully");
		window.location.href = "C:/Users/Chris_Harris/Desktop/Agrobot/dashboard/dashboard.html"; // redirecting to this page
		return false;
	}
	else{
		attempt --; // decrementing by one
		alert("You have left "+attempt+" attempt;");
		//disabling after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}
