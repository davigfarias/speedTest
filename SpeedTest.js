const car1 = prompt('Qual a velocidade do primeiro veículo?')
const car2 = prompt('Qual a velocidade do segundo veículo?')

let x = Number(car1)
let y = Number(car2)

if(x === y)
{
    alert('Os dois tem a mesma velocidade')
} else if(x > y)
{
    alert ('O primeiro carro é mais rápido que o segundo carro')
} else if(x < y)
{
    alert('O segundo carro é mais rápido que o primeiro carro')
}
