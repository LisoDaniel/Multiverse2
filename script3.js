function logar(){

    var password = document.getElementById('password').value;
    var encrypted = CryptoJS.MD5(password);
    if(encrypted == 'f7f1c73df4561a07bfde1ff55f448056'){
        alert('SUCESSO!!!!');
        location.href = "multiverse.html";
       }else{
        alert('Senha incorreta, tente novamente!');
    }
    }