(function submit(){
    emailjs.init({
        publicKey: "CBHlhT0H4YekAq378"
    });
    
})();


window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const SERVICE_ID = '031006Kn';
        const TEMPLATE_ID = 'template_tk9wg4z';
        const statusDiv = document.getElementById('status');

        statusDiv.textContent = '';
        statusDiv.className = '';


        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function() {
                statusDiv.textContent = 'Το μήνυμα εστάλη!';
                statusDiv.className = 'statusSuccess';
                //document.getElementById('contactForm').reset();
            }, function(error) {
                console.error('FAILED...', error);
                statusDiv.textContent ='Email failed to send.';
                statusDiv.className = 'statusError';
            });   

    });
}

