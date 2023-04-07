/*Questão 3 - Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
qualquer e mostre uma contagem até esse valor mostrando apenas os números
ímpares:

Exemplo:
Input: 35
Output: 1 3 5 7 ... 33 35 Acabou!*/

document.write("Questão 3:</br></br>");

let num2 = Number.parseInt(prompt('Digite um número inteiro e positivo:'));

for(let contador=1;contador<=num2;contador+=2){
    document.write(contador + ' ');
    if(contador==num2||contador==num2-1){
        document.write('</br></br>');
    }
}
