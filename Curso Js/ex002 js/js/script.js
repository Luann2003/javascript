function buscar(){
    var inp = document.getElementById('input').value; 
    var img = document.getElementById('imagem');
    
    var masculino = document.getElementById("male");
    var feminino = document.getElementById("female");

    if(parseInt(inp) <= 2000 && masculino.checked){
        img.src = "imagens/tarde.png"
    }
    else if(parseInt(inp) <= 2000 && feminino.checked){
        img.src = "imagens/night.png"
    }
}