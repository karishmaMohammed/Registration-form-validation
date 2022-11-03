let globalIsSubmitted = false 

function validate(isSubmitted = false) {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
    let mobileNumber = document.getElementById('mobile-number').value
	let country = document.getElementById('country').value
	let female = document.getElementById('female').checked
	let male = document.getElementById('male').checked 
	let others = document.getElementById('others').checked
	let tnC = document.getElementById('t-and-c').checked
	let error = false

	if(isSubmitted) {``
		globalIsSubmitted = true
	}

	if(globalIsSubmitted) {
		if(firstName.length >= 3 && firstName.match(/^[a-zA-Z]*$/)) {
			document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
		} else{
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
			error = true
		}

		if(lastName.length >= 3 && lastName.match(/^[a-zA-Z]*$/)) {
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
		} else {
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
			error = true
		}

		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") == 4
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
			error = true
		}
    
		if(mobileNumber.length === 10 && !isNaN(mobileNumber) && mobileNumber.match(/^\(?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/)) {
			document.getElementById('mobile-number-valid').style.display = 'block'
			document.getElementById('mobile-number-invalid').style.display = 'none'
		} else {
			document.getElementById('mobile-number-invalid').style.display = 'block'
			document.getElementById('mobile-number-valid').style.display = 'none'
			error = true
		}
		
		 if(female || male || others){
			document.getElementById('gender-valid').style.display = 'block'
			document.getElementById('gender-invalid').style.display ='none'
		} else {
			document.getElementById('gender-invalid').style.display ='block'
			document.getElementById('gender-valid').style.display = 'none'
			error = true
		}
		


		if(country != 'None') {
			document.getElementById('country-valid').style.display = 'block'
			document.getElementById('country-invalid').style.display = 'none'
		} else {
			document.getElementById('country-invalid').style.display = 'block'
			document.getElementById('country-valid').style.display = 'none'
			error = true
		}

		if(tnC) {
			document.getElementById('t-and-c-invalid').style.display = 'none'
		} else {
			document.getElementById('t-and-c-invalid').style.display = 'block'
			error = true
		}

		if(!error && isSubmitted) {
			alert('Your details have been saved successfully!')

			document.getElementById('registration-form').reset()

			let validFeedbacks = document.getElementsByClassName('valid-feedback')
			for(let i = 0; i < validFeedbacks.length; i++) {
				validFeedbacks[i].style.display = 'none'
			}
			let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
			for(let i = 0; i < invalidFeedbacks.length; i++) {
				invalidFeedbacks[i].style.display = 'none'
			}
		}
	}
}