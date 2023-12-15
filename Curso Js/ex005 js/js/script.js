var numbers = [];
var number;
var count = 0;

var result = document.getElementById('resultado');

function adicionar(){
    number = parseInt(document.getElementById('numberInput').value);

    var item = document.createElement('option')
    item.value = number
    item.textContent = number

    document.getElementById('numbers').appendChild(item);

    numbers.push(number);
    count ++;
   
}

function finish(){
    result.innerText = `O total de números é ${count}`

    var maxNumber = findMaxNumber();
    if(maxNumber !== null ){
        result.innerText += `\nO maior número é ${maxNumber}`;
    } else {
        result.innerText += `\nNenhum número foi adicionado.`;
    }

    var minNumber = findMinNumber();
    if(minNumber !== null ){
        result.innerText += `\nO menor número é ${minNumber}`;
    } else {
        result.innerText += `\nNenhum número foi adicionado.`;
    }

    var total = totalNumber();
    result.innerText += `\nO valor total dos números digitados é ${total}`

    var media = mediaTotal();
    result.innerText += `\nA média dos números digitados é ${media}`
    

}

function findMaxNumber(){
    if (numbers.length === 0) {
        return null; 
    }

    var max = numbers[0]
    for (var i = 1; i< numbers.length; i++){
            if(numbers[i] > max){
                max = numbers[i];
            }
    }
    return max;
}

function findMinNumber(){
    if (numbers.length === 0) {
        return null; 
    }

    var min = numbers[0]
    for(var i = 1; i< numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}

function totalNumber(){

    var soma = 0;
    for(var i =0; i<numbers.length; i++){
       
       soma += numbers[i];
    }

    return soma;
}

function mediaTotal(){
    var resu = totalNumber();

    var total = resu / count;

    return total;
}

