// form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

window.onload = () => {
    if(sessionStorage.name){
        location.href = '/';
    }
}

// form validation

document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting if there are validation errors
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const username = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Flag to track if form is valid
    let isValid = true;

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    }

    // If form is valid, you can submit it or handle the login logic here
    if (isValid) {
        window.location.href = '../home2.html';
    }
});