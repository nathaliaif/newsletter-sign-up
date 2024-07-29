const subscribeBt = document.querySelector('#subscribe-button');
const dismissButton = document.querySelector('#dismiss-button');
const emailInput = document.querySelector('#email-input');

const subscribeContainer = document.querySelector('.main-container');
const successContainer = document.querySelector('.success-container');
const errorFeedback = document.querySelector('.error-message');
const emailText = document.querySelector('.email-success');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

subscribeBt.addEventListener('click', () => {
    const emailAddress = emailInput.value;

    function isEmailValid(){
        if(emailRegex.test(emailAddress)){
            gsap.fromTo(subscribeContainer, {opacity: 1}, {duration: 0.5, opacity: 0, ease: 'power3.out'});
            
            setTimeout(() => {
                gsap.fromTo(successContainer, {opacity: 0}, {duration: 0.5, opacity: 1, ease: 'power3.out'});
                subscribeContainer.setAttribute('style', 'display: none');
                successContainer.setAttribute('style', 'display: flex');
            }, 400)

            emailText.innerText = emailAddress;

            //Cleaning the input value
            emailInput.value = '';
            
            //Cleaning the error messages
            emailInput.classList.remove('input--error');
            emailInput.classList.add('input--normal');
            errorFeedback.setAttribute('style', 'display: none');

        } else {
            emailInput.classList.remove('input--normal');
            emailInput.classList.add('input--error');
            errorFeedback.setAttribute('style', 'display: block');
            // emailInput.setAttribute('style', 'background-color: rgb(from var(--primary) r g b / 30%); border: 1px solid var(--primary)');
        }   
    }
    
    isEmailValid();
});

dismissButton.addEventListener('click', () => {
    gsap.to(successContainer, {duration: 0.5, opacity: 0, ease: "power3.out"});
    
    setTimeout(() => {
        gsap.fromTo(subscribeContainer, {opacity: 0}, {duration: 0.5, opacity: 1, ease: 'power3.out'});
        subscribeContainer.setAttribute('style', 'display: flex');
        successContainer.setAttribute('style', 'display: none');
    }, 400)
})