//logic for handling a form 
//console.log stuff (like the code for button.onClick(), or saving to a database)

const form = document.forms[0]
//you can index into form for example via 'form.email'

function register() {
	var data = {}
	
	if (form.email.value) data.email = form.email.value
	if (form.password.value) data.password = form.password.value
	if (form.name.value) data.name = form.name.value
	
	//take out later
	console.log(data)

	fetch('/register', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	}).then(function(res) {
		res.json()
		.then(function(user){
			alert(JSON.stringify(user))
		})
	}).catch(function(err) {
		console.error(err)
	})
	
}