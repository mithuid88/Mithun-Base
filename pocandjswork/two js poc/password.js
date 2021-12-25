const button  = document.querySelector("button");


// button.addEventListener("onclick" , randompassword)


const inputField  =  document.querySelector("#password");
const randomPassword = () => {
    const generatePassword = (length ,chars) => {
          let password = "";
          for(let i = 1; i < length; i++) {
        password = password + chars[Math.floor(Math.random() * chars.length)];
          }      
          console.log(password);
          return password;
    };
    const password = generatePassword(8 , "!@#$%^&*()01234567789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    inputField.value = password;
}

inputField.addEventListener("keyup",function(){
  checkPassword(inputField.value)
})

const span = document.querySelector(".progress-msgs span")

function checkPassword(password) {
  var strengthBar = document.querySelector("#strength");
  var strength = 0;
  if(password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
strength += 1
  }
  if(password.match(/[~<>?]+/)) {
strength += 1
  }
  if(password.match(/[!@#$%^&*()]+/)) {
strength += 1
  }
  if (password.length > 5) {
strength += 1
  }
  switch(strength) {
    case 0: 
    strengthBar.value = 20;
      span.classList.contains(".weak").style.display = 'block';
    break;
    case 1: 
    strengthBar.value = 40;
    span.classList.contains(".weak").style.display = 'block';
    break;
    case 2: 
    strengthBar.value = 60; 
    span.classList.contains(".okok").style.display = 'block';
    break;
    case 3: 
    strengthBar.value = 80;
    span.classList.contains(".okok").style.display = 'block';
    break;
    case 4: 
    strengthBar.value = 100;
    span.classList.contains(".very-strong").style.display = 'block';
    break;

    }
}

