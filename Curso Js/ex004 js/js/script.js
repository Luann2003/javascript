function gerar(){
    var number = parseInt(document.getElementById('numberInput').value);
    var tabuadadiv = document.getElementById('tabuada');

    tabuadadiv.innerHTML = ''
    if(number === '' || isNaN(number)){  
     alert('Insira um número valido')   
    }else{
        for(var i = 1; i<=10; i++){
            var res = number * i;
            var linhaTa = document.createElement('p')
            linhaTa.textContent = number  + " x " + i + " = " + res
        
            document.getElementById('tabuada').appendChild(linhaTa);    
        }
    }
}