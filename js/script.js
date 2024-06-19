let login = '', senha, qtdCA = 0, totalCompraCA = 0, valor = 0, totalGeral = 0 
let cesta,qtdGE = 0, totalCompraGE = 0,qtdTO = 0, totalCompraTO = 0
let qtdAE = 0, totalCompraAE = 0
const preco_gasolina =5.85
const car1 = 16
const car2 = 13
const car3 = 9
const lucro = 2.5
var carro = car1


function criaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))        
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    let novoUsr = prompt("Login")
    usr.push(novoUsr)
    localStorage.usrArr = JSON.stringify(usr)
    let novaSnh = prompt("senha")
    snh.push(novaSnh)
    localStorage.snhArr = JSON.stringify(snh)
    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("Login criado com Sucesso!")
    }else{
        alert("Login não pode ser criado!")
    }
}

function abreTelaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    login = prompt('Login: ')
    senha = prompt("Senha: ")
    let indUsr = usr.indexOf(login)
    if(usr[indUsr] == login && snh[indUsr] == senha){
        document.getElementById('log').innerHTML = `Bem-vindo, ${login}`
    }else{
        alert("Digite um usuário/senha válidos!\nOu crie um login no link ao lado")
    }
}
function trasladosCamboriu(){
    qtdCA = parseInt(document.getElementById("qtd-1").value)
    const dist_camboriu = 81.2
    if (qtdCA<=2||isNaN(qtdCA)){
        carro = car1
    }
    else if(qtdCA>=3 && qtdCA <=6){
        carro = car2
    }
    else{
        carro = car3
    }
    let custo_viagem = (dist_camboriu/carro)*preco_gasolina*lucro
    document.getElementById("valor_balneario").value=custo_viagem.toFixed(2)

}

function trasladosGerais(){
    qtdGE = parseInt(document.getElementById("qtd-2").value)
    const dist_Gerais = 25
    if (qtdGE<=2||isNaN(qtdGE)){
        carro = car1
    }
    else if(qtdGE>=3 && qtdGE <=6){
        carro = car2
    }
    else{
        carro = car3
    }
    let custo_viagem = (dist_Gerais/carro)*preco_gasolina*lucro
    document.getElementById("valor_traslados").value=custo_viagem.toFixed(2)
}
function tours(){
    qtdTO = parseInt(document.getElementById("qtd-3").value)
    const dist_tours = 117
    if (qtdTO<=2||isNaN(qtdTO)){
        carro = car1
    }
    else if(qtdTO>=3 && qtdTO <=6){
        carro = car2
    }
    else{
        carro = car3
    }
    let custo_viagem = (dist_tours/carro)*preco_gasolina*lucro
    document.getElementById("valor_tours").value=custo_viagem.toFixed(2)
}
function trasladosAeroporto(){
    qtdAE = parseInt(document.getElementById("qtd-4").value)
    const dist_Aeroporto = 40
    if (qtdAE<=2||isNaN(qtdAE)){
        carro = car1
    }
    else if(qtdAE>=3 && qtdAE <=6){
        carro = car2
    }
    else{
        carro = car3
    }
    let custo_viagem = (dist_Aeroporto/carro)*preco_gasolina*lucro
    document.getElementById("valor_aeroporto").value=custo_viagem.toFixed(2)
}

   