function errorEmpty(text,msg){
    const input = document.getElementById(text);
    const errorMsg = document.getElementById(msg);

    if(input.value.trim() === ''){
        input.style.borderColor = 'red';
        input.style.borderStyle = 'solid';
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Παρακαλώ συμπληρώστε όλα τα πεδία.'
    } else {
        input.style.borderColor = '#c8cea6';
        input.style.borderStyle = 'none';
        errorMsg.style.display = 'none';
        
    }
    
}