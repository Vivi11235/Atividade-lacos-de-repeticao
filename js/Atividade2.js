/*Questão 2 - Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
qualquer e mostre uma contagem até esse valor:

Exemplo:
Input: 35
Output: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!*/

document.write("Questão 2:</br></br>");

let numero = Number.parseInt(prompt('Digite um número inteiro e positivo:'));

for(let contador=0;contador<=numero;contador++){
    document.write(contador + ' ');
    if(contador==numero){
        document.write('</br></br>');
    }
}
