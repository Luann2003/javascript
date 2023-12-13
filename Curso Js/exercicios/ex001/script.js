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
