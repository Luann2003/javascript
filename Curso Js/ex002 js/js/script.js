function buscar(){
    var inp = document.getElementById('input').value; 
    var img = document.getElementById('imagem');
    var res = document.getElementById('res');
    var data = new Date();
    var ano = data.getFullYear();

   if(inp > ano){
    window.alert(`[ERRO] verifique os dados e tente novamente`);
   }else{
    var sexo = document.getElementsByName('sexo')
    var idade = ano - inp;
    res.innerHTML = `idade calculada ${idade}`
    if(sexo[0].checked){
        if(inp < 1990){
            img.src = 'imagens/tarde.png'
        }
        else if(inp < 2000){
            img.src = 'imagens/manha.png'
        }

    }else if(sexo[1].checked) {
        if(inp < 1990){
            img.src = 'imagens/tarde.png'
        }
        else if(inp < 2000){
            img.src = 'imagens/manha.png'
        }
    }
   }
    
}