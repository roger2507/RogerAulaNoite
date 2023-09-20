
// Um array para armazenar os doadores
const doadores = [];

// Função para cadastrar um doador
function cadastrarDoador() {
    const nome = prompt(" Qual é seu nome ?")
    const idade = prompt(" Qual é sua idade ?")
    const peso = prompt(" Qual é seu peso ?")
    const tipoSanguineo = prompt(" Qual seu tipo sanguineo ?")
    const ultimaDoacao = prompt(" Quando foi a ultima doação ?")
    
    console.log(`nome${nome},idade${idade}, peso${peso}, tipoSanguineo${tipoSanguineo}, ultimaDoacao${ultimaDoacao}`)
    
    //As informações de cada usuário vão ser armazenadas neste objeto
    const doador = {
    nome1: nome,
    idade1: idade,
    peso1: peso,
    tipoSanguineo1: tipoSanguineo,
    ultimaDoacao1: ultimaDoacao
    };
    //Crie um código que adiciona o objeto doador ao array doadores
    doadores.push(doador)
    console.log(doadores)
    //Este código retorna uma mensagem. Deixe inalterado
    alert("Doador cadastrado com sucesso!");
  }
  
  // Função para listar os doadores
  function listarDoadores(){
  let resultado = "===== LISTAGEM DE DOADORES =====";
  console.log(resultado);

    //Aqui vai o código que lista todos os doadores


    for(pesquisa = 0; pesquisa < doadores.length; pesquisa ++){
console.log(doadores[pesquisa])
    }
    
  }
 
  // Função para buscar doadores por tipo sanguíneo
  function buscarPorTipoSanguineo() {
    const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");
    let resultado = `Digite o tipo sanguíneo desejado: ${tipoSanguineo}\n`;
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
    //Aqui vai o código que busca doadores por tipo sanguíneo
    console.log(resultado);

    
    }



  
  
  // Função para buscar doadores por data da última doação
  function buscarPorDataUltimaDoacao() {
    const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
    let resultado = `Digite a data desejada: ${dataDesejada}\n`;
  
    resultado += "========================\n";
    resultado += "RESULTADO DA BUSCA:\n";
    resultado += "========================\n";
  
    //Aqui vai o código que busca os doadores por data da última doação
  
    console.log(resultado);
  }
  
  // Função para executar a ação com base na opção selecionada no menu suspenso
  function executarAcao() {
    const opcoes = document.getElementById("opcoes");
    const opcaoSelecionada = opcoes.value;
  
    switch (opcaoSelecionada) {
      case "cadastrar":
        cadastrarDoador();
        break;
      case "listar":
        listarDoadores();
        break;
      case "buscarTipo":
        buscarPorTipoSanguineo();
        break;
      case "buscarData":
        buscarPorDataUltimaDoacao();
        break;
      case "sair":
        console.log("Encerrando o programa.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
  
 
  