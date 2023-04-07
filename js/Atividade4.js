/*Questão 4 - Faça um programa que leia a idade de  várias pessoas. A cada 
laço, você deverá perguntar para o usuário se ele quer ou não continuar a 
digitar dados. No final, quando o usuário decidir parar, mostre  na tela:

a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas têm 21 anos ou mais.*/

document.write("Questão 4:</br></br>");

condicao = confirm("Deseja adicionar uma nova pessoa?");

let contadorIdade = 0;

let somaIdade = 0;

let maioresDe21 = 0;

while(condicao){

    let nome = prompt('Digite um nome:');

    let idade = Number.parseFloat(prompt('Digite a idade da pessoa digitada:'));

    document.write(`${nome} tem ${idade} anos. </br>`);

    if(idade>=21){
        maioresDe21++;  
    }

    contadorIdade++

    somaIdade+=idade;

    condicao = confirm("Deseja adicionar mais uma pessoa e idade?");

    if(!condicao){
        document.write(`Foram digitadas ${contadorIdade} idades.</br>`);
        document.write(`A média das idades digitadas é ${somaIdade/contadorIdade}.</br>`);
        document.write(`${maioresDe21} pessoas têm 21 anos ou mais.</br>`);
    }
}