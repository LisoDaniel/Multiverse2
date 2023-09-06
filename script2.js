var splashScreen = document.querySelector('.splash');

  setTimeout(()=>{
    splashScreen.classList.add('hidden')
    splashScreen.style.opacity = 0;
  },11000);

function logar(){

    var password = document.getElementById('password').value;
    var encrypted = CryptoJS.AES.encrypt(password, 'CHAVE');
    var decrypted = CryptoJS.AES.decrypt(
      encrypted,
      key
    );
    if(decrypted == "50415353574f5244313131"){
        alert('SUCESSO!!!!');
        location.href = "multiverse.html";
       }else{
        alert('Senha incorreta, tente novamente!');
    }
    }
  
   
