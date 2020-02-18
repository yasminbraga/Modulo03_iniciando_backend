//Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da media
const aluno01 = "yasmin"
const notaAluno01 = 9.8

const aluno02 = 'yasim'
const notaAluno02 = 10

const aluno03 = 'fulana'
const notaAluno03 = 2

//printa o tipo da variavel aluno01
// console.log(typeof aluno01)

//Se a media for maior  que 5, parabenizar a turma
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

if (media > 5) {
    console.log(`A nota foi de ${media}, Parabéns`)
} else {
    console.log(`A média é menor que 5`)
}


//objetos
const aluno = {
    nome: 'Yasmin',
    nota: 9.7
}

//retorna a nota
console.log(aluno.nota)

//arrays - vetores
const alunos = [
    {
        nome: 'Dalton',
        nota: 8.9
    },
    {
        nome: 'Henrique',
        nota: 8.6
    }
]

console.log(alunos[0].nota)

