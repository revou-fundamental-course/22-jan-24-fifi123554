function validateForm() {
	var name = document.getElementById('name').value;
	var name = document.getElementById('email').value;
	var name = document.getElementById('phone').value;
	var name = document.getElementById('message').value;

	if (name === "" || emaill === "" || phone === "" || message === "") 
		{alert("Please fill in all fields");
	return;	
	}

alert("Form submitted successfully!");
}