function charOver(){
    const msg = document.getElementById('message');
    const error = document.getElementById('msgOver');


    if(msg.value.trim().length > 100){
        error.innerText = 'Το μήνυμα σας δεν πρέπει να υπερβένει τους 100 χαρακτήρες.'
        error.style.display = 'block';

    } else {
        error.style.display = 'none';
        
    }
}