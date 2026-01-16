button = document.getElementById('button');
button.addEventListener('click',function(){
email = document.getElementById('email')
password = document.getElementById('password')

if(email.value =='jd@gmail.com'  && password.value == 'password'){
    Swal.fire({
    title: 'Nice!',
    text: 'Niceee iniciaste',
    icon: 'success',
    confirmButtonText: 'Cool'
})
setTimeout(() => {
    window.location = "../Landingpage/index.html"
}, 2000);
} else if(email.value =='admin'  && password.value == 'admin1'){
    Swal.fire({
    title: 'Nice!',
    text: 'Niceee iniciaste',
    icon: 'success',
    confirmButtonText: 'Cool'
})
    setTimeout(() => {
        window.location = "../Dashboard/index.html"
    }, 2000);   
}else{
    Swal.fire({
    title: 'Error!',
    text: 'Revisa bien tus credenciales',
    icon: 'error',
    confirmButtonText: 'Cool'
})
}
});