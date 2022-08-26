const password = document.getElementById('password');
const retype_password = document.getElementById('retype_password');
const mismatch = document.querySelector('.error');


retype_password.addEventListener('input', event => {
    if (password.value !== event.target.value) {
        mismatch.style.visibility = 'visible';  
    }
    else {
        mismatch.style.visibility = 'hidden'
    } 
});

password.addEventListener('input', event => {
    if (retype_password.value !== event.target.value) {
        mismatch.style.visibility = 'visible';  
    }
    else {
        mismatch.style.visibility = 'hidden'
    } 
});