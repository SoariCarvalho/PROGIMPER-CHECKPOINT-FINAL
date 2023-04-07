// Passo 1 : Criar a Classe Aluno e seus atributos: nome (string), qtde de faltas(number) e notas (array de números)
class Aluno {
    constructor(nome, numfaltas, notas) {
        this.nome = nome;
        this.numfaltas = numfaltas;
        this.notas = notas;
    }

    // Passo 2: Na Classe Aluno criar o método calcularMedia que retorna a média de suas notas. Também criar um método chamado faltas, e aumentar em 1.

    notas = [ ]

    Aluno1 = new Aluno("Hércules", 0, [ 10, 10]);
    Aluno2 = new Aluno("Guaíra", 1, [ 8, 6]);
    Aluno3 = new Aluno("Diana", 2, [ 3, 7]);
  

    calcularMedia( ) {              //  calcula a média de uma lista de alunos 

         medias = [];

        for (let i = 0; i < lista_de_estudantes.length; i++) {
            const aluno = lista_de_estudantes[i];
            let soma = 0;
            for (let j = 0; j < aluno.notas.length; j++) {
            soma += aluno.notas[j];
            }
            media = soma / aluno.notas.length;
            medias[i] = media;
        }
    }
           
    faltas( ) {   
        for (let i = 0; i < lista_de_estudantes.length; i++) {
            const aluno = lista_de_estudantes[i],               
            numfaltas = numfaltas + 1;                           // aumenta o número de faltas em mais 1
        }
    }
}
    
 // Passo 3 : Criar um objeto literal curso que tem como atributos: nome do curso, nota de aprovação, faltas máximas e lista de estudantes

const curso = {
    nome_do_curso: 'Programação Imperativa',
    nota_de_aprovacao:7,
    faltas_maximas: 2,
    lista_de_estudantes: [Aluno1, Aluno2, Aluno3],

    // Passo 4: Criar método que adicione alunos à  lista do curso

    adicionarAlunos( ) {
        const aluno = new Aluno(nome, numfaltas, notas); 
        this.lista_de_estudantes.push(aluno);  
    },

    // Passo 5: Criar método para o objeto curso que receba um aluno e retorne true ( se aprovado) e false (se reprovado)

    media = [Aluno1, Aluno2, Aluno3],
    resultado = [Aluno1.notas, Aluno2.notas, Aluno3.notas],

    situacaoAluno( ) {
        for (let aluno of this.Aluno) {
            for ( i=0; i < lista_de_estudantes.length; i++){
                if (( media[i] >= nota_de_aprovacao ) && (lista_de_estudantes.numfaltas[i] < faltas_maximas) )
                    if ((media[i]*1,10 > nota_de_aprovacao) && (lista_de_estudantes.numfaltas[i] = faltas_maximas))
                        return resultado = aprovado 
                else
                        return resultado = reprovado
            }
        }
    },

    // Passo 6: Criar método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados dos alunos.

    
    listarResultados( ) {
        for (let aluno of this.Aluno) {
            for ( i=0; i < lista_de_estudantes.length; i++){
                resultados = resultado[i]
            }
        }
    }
}
      

