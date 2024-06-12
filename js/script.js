let login = '', senha, qtdCA = 0, totalCompraCA = 0, valor = 0, totalGeral = 0 
let cesta,qtd = 0, totalCompra2 = 0,qtdHulk = 0, totalCompraHulk = 0
let qtdHF = 0, totalCompraHF = 0, qtdCA = 0, totalCompraCA = 0, qtdCM = 0, totalCompraCM = 0

function abreTelalogin(){
    login = prompt("login: ")
    senha = prompt("senha: ")
    document.getElementById("log").innerHTML = `bem-vindo, ${login}`
}
function trasladosCamboriu(){
    qtdCA = parseInt(document.getElementById("qtd-1").value)
    totalCompraCA = qtdCA * parseFloat(document.getElementById("ca").innerText.replace(",","."))
}
function trasladosGerais(){
    qtdThor = parseInt(document.getElementById("qtd-2").value)
    totalCompraThor = qtdThor * parseFloat(document.getElementById("th").innerText.replace(",","."))
}
function tours(){
    qtdHulk = parseInt(document.getElementById("qtd-3").value)
    totalCompraHulk = qtdHulk * parseFloat(document.getElementById("hu").innerText.replace(",","."))
}
function trasladosAeroporto(){
    qtdHF = parseInt(document.getElementById("qtd-4").value)
    totalCompraHF = qtdHF * parseFloat(document.getElementById("hf").innerText.replace(",","."))
}
function calculaCesta(){
    if(login != ''){
        alert(`
        ${qtdHA} x Boneco Homem-Aranha R$${totalCompraHA.toFixed(2)}
        ${qtdThor} x Boneco Thor       R$${totalCompraThor.toFixed(2)}
        ${qtdHulk} x Boneco Hulk       R$${totalCompraHulk.toFixed(2)}
        ${qtdHF} x Boneco Homem de ferro R$${totalCompraHF.toFixed(2)}
        ${qtdCA} x Boneco capitão america R$${totalCompraCA.toFixed(2)}
        ${qtdCM} x Boneco capitã marvel R$${totalCompraCM.toFixed(2)}
        _____________________________________________
        total da compra                       R$${(
        totalCompraHA+totalCompraHulk+totalCompraCA+totalCompraCM+totalCompraHF+totalCompraThor).toFixed(2)}
        `)
    }else{
        alert('Voce nao esta logado! ')
    }
}