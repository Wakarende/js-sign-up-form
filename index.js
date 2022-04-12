const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

console.log('js');
// prevent form from submitting  and validate inputs
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    validateInputs();
});


const validateInputs = () => {
    //Remove whitespces from input stirngs
    const firstValue = first.value.trim();
    const lastValue = last.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstValue === ""){
        setError(first, "First name cannot be empty");
    }else{
        setSuccess(first)
    }

    if(lastValue === "")
    {
        setError (last, "Last name cannot be empty")
    }else{
        setSuccess(last)
    }

    if (emailValue === '')
    {
        setError (email, 'Looks like this is not an email');
    }else if(!isEmail(emailValue)){
        setError(email, 'Not a valid email')
    }else{
        setSuccess(email);
    }

    if (passwordValue === '')
    {
        setError (password,'Password cannot be empty');
    }else{
        setSuccess(password);
    }
}

// Function that adds error message when form is not submitted correctly 
const setError = (input, message) =>{
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = 'form-control error'
    small.innerText = message;
}

const setSuccess = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//correct email format
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

