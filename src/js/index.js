function ver_senha(){
    let senha = document.getElementById('senha')
    if(senha.type == 'password'){
        senha.type = "Text"
    }
    else{
        senha.type = "password"
    }
}

function entrar(){
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')
    var login_user = login.value
    var senha_user = senha.value

    if(login_user.length == 0 || senha_user.length == 0){
        if(login_user.length == 0){
            window.alert('digite seu login')
        }
        if(senha_user.length == 0){
            window.alert('digite uma senha')
        }
    }
    else{
        if(login_user == 'admin' && senha_user == 'admin'){
            location.href = 'bem-vindo.html'
        }
        else{
            window.alert('login ou senha incorretos')
        }
    }
}
