/* DOM elements we are going to use */
const email = document.getElementById('email'); // We capture the email element 
const password = document.getElementById('password'); // We capture the password element
const button = document.getElementById('button'); // We capture the button element

/* Login validation function */
function intentarLogin () {
    // Get the values of the email and password fields
    const emailValue = email.value.trim(); // Trim = Remove unnecessary spaces
    const passwordValue = password.value.trim();

    // Access the Landing Page 
    if (emailValue === 'admin@gmail.com' && passwordValue === 'password') {
        Swal.fire ({
            title: 'Nice',
            text: '!WELCOME¡',
            icon: 'success',
            confirmButtonText: 'Close'
        });
        // Redirect after 2 seconds
        setTimeout (() => {
            window.location = "../index.html";
        }, 2000);
    }
    // Access the Dashboard
    else if (emailValue === 'admin' && passwordValue === 'admin') {
        sessionStorage.setItem("admin", "True")
        Swal.fire ({
            title: 'Nice',
            text: '!WELCOME ADMIN¡',
            icon: 'success',
            confirmButtonText: 'Close'
        });
        setTimeout (() => {
            window.location = "../Dashboard/index.html";
        }, 2000);
    }
    // Incorrect credentials
    else {
        Swal.fire ({
            title: 'Error',
            text: 'Revisa bien tus credenciales',
            icon: 'error',
            confirmButtonText: 'Close'
        });
    }
}

/* Button Events */
    // Click Event
    button.addEventListener('click', intentarLogin);
    // Enter Key Event
    email.addEventListener('keydown', function (event){
        if (event.key === 'Enter') {
            event.preventDefault();
            intentarLogin();  // Same button function
        }
    });
    password.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            intentarLogin();
        }
    });