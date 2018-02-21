document.getElementsByName("form")[0].addEventListener("keydown", function (e)  {
	if ( e.which === 13 ) {
		console.log(this.value)
	}
})

document.forms["form"]["name"].addEventListener("keydown", function (e)  {
	if (this.value.match(/^[A-Za-z]+$/)){
		this.style.color="";

	} else{
		this.style.color="#ff0000";
	}	
})

document.forms["form"]["email"].addEventListener("keydown", function (e)  {
	if (this.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
		this.style.color="";

	} else{
		this.style.color="#ff0000";
	}	
})

document.forms["form"]["tel"].addEventListener("keydown", function (e)  {
	if (this.value.match(/^[0-9+\s]+$/)){
		this.style.color="";

	} else{
		this.style.color="#ff0000";
	}	
})

document.forms["form"]["comment"].addEventListener("keydown", function (e)  {
	if (this.value.length>500){
		this.style.color="#ff0000";

	} else{
		this.style.color="";
	}	
})

