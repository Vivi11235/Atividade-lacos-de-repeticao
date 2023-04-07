document.write("Questão 1:</br></br>");

let mes = prompt('Digite um número de 1 a 12 para que seja informado o mês correspondente:');

switch(mes){
    case '1':
        document.write('O mês correspondente é janeiro.</br></br>');
        break;

    case '2':
        document.write('O mês correspondente é fevereiro.</br></br>');
        break;
    
    case '3':
        document.write('O mês correspondente é março.</br></br>');
        break;
            
    case '4':
        document.write('O mês correspondente é abril.</br></br>');
        break;

    case '5':
        document.write('O mês correspondente é maio.</br></br>');
        break;
            
    case '6':
        document.write('O mês correspondente é junho.</br></br>');
        break;

    case '7':
        document.write('O mês correspondente é julho.</br></br>');
        break;

    case '8':
        document.write('O mês correspondente é julho.</br></br>');
        break;
        
    case '9':
        document.write('O mês correspondente é setembro.</br></br>');
        break;
                
    case '10':
        document.write('O mês correspondente é outubro.</br></br>');
        break;
                    
    case '11':
        document.write('O mês correspondente é novembro.</br></br>');
        break;
                        
    case '12':
        document.write('O mês correspondente é dezembro.</br></br>');
        break;  
        
    default:
        document.write('Opção inválida.</br></br>');
}