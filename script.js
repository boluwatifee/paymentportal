const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    
    if(username.value === ' ' || username.value == null){
        messages.push('Name is required');
    }

    if(messages.length > 0){ 
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
    if(email.value === ' ' || email.value == null){
        messages.push('Email is required');
        return messages;
    }
});