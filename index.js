//const racasDeCachorros= ["Husky", "Poodle", "Beagle", "Bulldogue", "Pastor Alemão"]
//let perguntaAoUsuario= 
//console.log(racasDeCachorros[Number (prompt("Digite um numero de 0 a 4"))]) 

//const numeros= [1,2,3,4,5,6]
//console.log(numeros.length)
//numeros.push(7)
//numeros.splice(3,2)
//console.log(numeros)
//console.log(numeros.length)

//const nomeDoUsuario= prompt("Digite aqui o seu nome")
//const emailDoUsuario= prompt("Digite seu email")
//console.log(" O email " + emailDoUsuario + " foi cadastrado com sucesso " + " Seja bem-vinda(o)! " + nomeDoUsuario)

//const comidasPreferidas= [" Espaghetti ", " Arepa ", " Bollito ", " Empanadas ", "Roty "]
//console.log(" Essas são as minhas comidas preferidas " + comidasPreferidas )
//console.log(comidasPreferidas[0])
//console.log(comidasPreferidas [1])
//console.log(comidasPreferidas [2])
//console.log(comidasPreferidas [3])
//console.log(comidasPreferidas [4])
//const perguntaDaComidaAoUsuario= prompt ("Digite sua comida preferida")
//console.log(comidasPreferidas[1] + perguntaDaComidaAoUsuario[0]) Descobrir como fazer!

//const array = []
//const listaDeTarefas= array
//const tarefasDoUsuarioUm= prompt(" Digite 1 atividade que você realize no dia a dia ")
//const tarefasDoUsuarioDois= prompt(" Digite outra atividade que você realize no dia a dia ")
//const tarefasDoUsuarioTres= prompt(" Digite outra atividade que você realize no dia a dia ")
//listaDeTarefas[0]= tarefasDoUsuarioUm
//listaDeTarefas[1]= tarefasDoUsuarioDois
//listaDeTarefas[2]= tarefasDoUsuarioTres
//console.log(listaDeTarefas)

//function imprimirOlaMundo() {
    //console.log("Olá Mundo")
//}
//imprimirOlaMundo()

//function imprimirOla (nils, jack,heist) {
//console.log (`Olá $ { nils, jack, heist }`)
//}
//imprimirOla()

//function soma ( umValor, outroValor) {
  //  const soma= umValor + outroValor
    //return soma
//} 

//const somaValores= soma(4,4)
//console.log(somaValores)

//function lista () {
  //  const listaDeElementos= array [1,3,5,7,9]
    //return lista
//}

//const listaDeNumeros= array 

//let imprimirOla= function (nome) {
  //  return imprimirOla
//}
//const ola= imprimirOla (" nils, jack, heist")
//console.log(imprimirOla)

//const filme = {
  //nome : " Teen Wolf",
  //anoDeLancamento : 2011,
 // elenco : [" Tyler Posey ", " Dylan O'Brien ", "Crystal Reed ", " Dylan Sprayberry "],
  //vistoOuNao : true
//}

//console.log(filme.nome)
//console.log(filme.anoDeLancamento)
//console.log(filme [" elenco "])
//console.log(filme [" vistoOuNao "])

//const pessoa= {
  //nome: "filipe", 
  //idade: 15,
  //generoMusicalPreferido: "Soundtrack de animes"
//}

//console.log(" o nome da pessoa é," + pessoa.nome + " ela tem " + pessoa.idade + " anos e gosta muito de " + pessoa.generoMusicalPreferido )

//filme.novosPersonagens=[" Liam ", " Stiles ", " Scott ", " Alisson "]
//console.log(filme.elenco[0] + ":" + filme.novosPersonagens[2])
//console.log(filme.elenco[1] + ":" + filme.novosPersonagens[1])
//console.log(filme.elenco[2] + ":" + filme.novosPersonagens[3])
//console.log(filme.elenco[3]+ ":" + filme.novosPersonagens[0])

//filme.elenco[0]= "xuxa"
//console.log(filme.elenco)

//console.log(filme.nome + filme.anoDeLancamento + filme.elenco + filme.vistoOuNao + filme.anoDeLancamento)

//let num1= Number(prompt("Digite um numero aqui"))
//let num2= Number(prompt("Digite outro numero aqui"))
//function comparar (num1, num2){
 // if (num1 === num2){
//console.log("Sucesso!") 
//} else {
 // console.log("Não deu certo")
//}
//}
//comparar(num1, num2)

//let numUm= Number (prompt("Digite um numero:"))
//let numDois= Number(prompt("Digite outro numero aqui:"))

//function comparador (numUm,numDois){
  //if( numUm === numDois){
   // console.log("É igual")
  //} else if (numUm < numDois) {
   // console.log("É menor")
//} else { ( numUm > numDois) 
 //  console.log("É maior ") 
//}
//}

//let pokemon= prompt("Digite um pokemon")
//switch (pokemon){
  //case "Bulbasauro":
  //console.log(" É tipo planta e veneno ")
  //break
  //case "Charmander":
    //console.log(" É tipo fogo ")
    //break
    //case "Squirtle":
      //console.log(" É tipo água ")
      //break
      //default:
        //console.log(" Não foi encontrado o tipo ")
      //}

      //let ensinoMedio= prompt(" Você já concluiu o ensino médio, digite aqui:  ")
      //let idade= Number (prompt(" Quantos anos você tem? digite aqui: "))
     // let faculdade= prompt(" Está cursando uma faculdade? ")
   //function medio(ensinoMedio,idade,faculdade ){
       //if (idade >= 18 && ensinoMedio === "sim" && faculdade === "não"){
       // console.log("ocê pode estudar na faculdade")
     //  }
   //else {
    //console.log("Você não pode estudar na faculdade")
   //}
   //}
   //podeEstudar(idade,ensinoMedio,faculdade)

   //function soma(){
   // let soma=0
   // while(soma){
     // let numero= Number(prompt("Digite um numero aqui"))""
      //if numero === 0
      //break
    //}
  //}

 //let numerosTres= [ 12,23,34,56,67,78,89,90 ]
  //  function lista(){
   //  for( numeroTres.length;     ){}

let abrigos= [];

function mostrarMenu (){
  let abrigo;
  while ( abrigo !== '4'){
    let abrigo= prompt(" === Abrigos Temporarios ===\n 1- Cadastrar abrigo\n 2- Listar abrigos\n 3- Procurar abrigos\n 4- Sair\n Escolha uma opção:\n")
   switch (abrigo){
   case "1":
    cadastrarAbrigo()
    break
    case "2":
    listarAbrigos()
  break
  case "3":
procurarAbrigos()
  break
case "4":
  sair()
  alert ("Obrigada pela sua participação!")
  break
  default:
    alert ( " Tente novamente ")
   }
}
}

function cadastrarAbrigo(){
  const nome= prompt(" Qual será o nome do abrigo?: ")
  const endereco= prompt(" Insira o endereço do seu abrigo:")
  const telefone= prompt(" Insira o número de telefone: ")
  const capacidade= prompt(" Qual é a capacidade de pessoas que podem estar em determinado abrigo?: ")
  const cidade= prompt(" Cidade do abrigo:")

  let novoAbrigo= {
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    capacidade: capacidade,
    cidade: cidade
  }; abrigos.push(novoAbrigo)
  alert ("Abrigo cadastrado!")
}

function listarAbrigos(){
if (abrigos.length === 0) {
alert ("Não tem nehum abrigo cadastrado")
  
} else {
for(let i= 0; i < abrigos.length; i++){
  alert ( ` Nome: ${abrigos[i].nome}\n Endereço: ${abrigos[i].endereco}\n Telefone: ${abrigos[i].telefone}\n Capacidade: ${abrigos[i].capacidade}\n Cidade: ${abrigos[i].cidade}\n `)

}
}
}

function procurarAbrigos (){
let cidades= prompt(" Em que cidade você está? ").toLowerCase()
if (abrigos.length === 0) {
  alert ( " Você ainda não cadastrou seu abrigo ")

} else {
  alert("Não tem nenhum abrigo nessa cidade")

  for (let i= 0; i < abrigos.length; i++){
   if (abrigos[i].cidade.includes(cidades)) {
    alert ( ` Nome: ${abrigos[i].nome}\n Endereço: ${abrigos[i].endereco}\n Telefone: ${abrigos[i].telefone}\n Capacidade: ${abrigos[i].capacidade}\n Cidade: ${abrigos[i].cidade}\n `)
  
    alert("Não tem nenhum abrigo nessa cidade")
   }
   }
   } 
   }


mostrarMenu()
