let nome = 'Ronaldo';
let idade = 32;

alert('Olá, ' + nome +'! ' + 'Você tem ' + idade +' anos.');


document.body.innerHTML += `Olá, ${nome}! Você tem ${idade} anos.`;


// Exercício 2 – Funções
// Crie uma função que receba a idade e diga se a pessoa é maior ou menor de idade, usando alert()

function verificaridade(idade) {
    if (idade >= 18) {
        alert(`Olá, você com ${idade} é maior de idade.`)
    } 
    else {
        alert(`Olá, voce com ${idade} é menor de idade.` )
    }
}

verificaridade(idade);