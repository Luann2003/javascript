let num  = [5, 8, 2, 9, 3]

console.log(`${num[1]}`)
num.push(1)

console.log(num)

console.log('-----------------------')
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])

}

console.log('-----------------------')

for(let pos in num){
    console.log(num[pos])
}