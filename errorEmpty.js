function errorEmpty(text,msg){
    const input = document.getElementById(text);
    const error = document.getElementById(msg);

    if(input.value === ''){
        input.style.borderColor = 'red';
        input.style.display = 'solid';
        error.style.display = 'block';
        error.innerText = 'Παρακαλώ συμπληρώστε όλα τα πεδία.'
    } else {
        input.style.borderColor = '#c8cea6';
        error.style.display = 'none';
        
    }
    
}