const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    if(username.value === ' ' || username.value == null){
        alert(' Your Name is required');
    }
    else if( username.value.length < 8){
        alert(' Your full name is required');
    }

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.value.match(validRegex)) {

    alert("Valid email address!");
      return true;

    } else {
  
        alert("Invalid email address!");
        return false;
  
    }
});
  
