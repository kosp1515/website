function removeForm(){

    const form= document.getElementById('contactForm')
    if(form){
    form.addEventListener('submit',function(event) {
        event.preventDefault();
        form.remove();
        });
    }
}