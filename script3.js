function logar(){

    var password = document.getElementById('password').value;
    var encrypted = CryptoJS.MD5(password);
    if(encrypted == '4dd74be7c791f54d685fd062109e86f2'){
        alert('SUCESSO!!!!');
        location.href = "multiverse.html";
       }else{
        alert('Senha incorreta, tente novamente!');
    }
    }
