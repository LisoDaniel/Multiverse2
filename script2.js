var splashScreen = document.querySelector('.splash');

  setTimeout(()=>{
    splashScreen.classList.add('hidden')
    splashScreen.style.opacity = 0;
  },11000);

function logar(){

    var password = document.getElementById('password').value;

    if(password == "PASSWORD111"){
        alert('SUCESSO!!!!');
        location.href = "multiverse.html";
       }else{
        alert('Senha incorreta, tente novamente!');
    }
    }
  
   
