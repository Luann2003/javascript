
function contar(){
    var inicio = parseInt(document.getElementById('inicio').value);
    var fim = parseInt(document.getElementById('fim').value);
    var passo = parseInt(document.getElementById('passo').value);
    var res = document.getElementById('res');
    
    if (!isNaN(inicio) && !isNaN(fim) && !isNaN(passo) && passo > 0) {
        res.innerText = '';

        for(inicio; inicio<=fim; inicio+= passo){
                res.innerText += inicio + ' >';
        }
    }else {
        res.innerText = 'Insira números válidos e um passo positivo.';
    }
   
    document.getElementById('inicio').value = '';
    document.getElementById('fim').value = '';
    document.getElementById('passo').value = '';
}