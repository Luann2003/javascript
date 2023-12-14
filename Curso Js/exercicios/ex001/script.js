function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#c3827c'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#5a3046'
    }else{
        img.src = 'imagens/night.png'
        document.body.style.background = '#9778b1'
    }
}

var a = window.document.getElementById('area')
a.addEventListener('click', click)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function click(){
    a.style.background = 'purple'
}

function entrar(){
    a.style.background = 'darkgray'
}

function sair(){
    a.style.background = 'white'
}
