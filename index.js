// template_s3chdi9
// service_6qk1yvg
// a4dYJ6M69TcR78KYi

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_6qk1yvg',
        'template_s3chdi9',
        event.target,
        'a4dYJ6M69TcR78KYi'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "This email service is currently unavailable. Please contact me directly at sawut3@gmail.com"
        )
    })
}