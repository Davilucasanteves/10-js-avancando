let num = document.getElementById('fnum')
let tab = document.getElementById('flista')
let res = document.getElementById('res')
let vetor = []

function adicionar() {
    let n = Number(num.value)
    let pos = vetor.indexOf(n)
    res.innerHTML = ''
        
    if (n.length == 0 || n < 1 || n > 100 || pos != -1) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        vetor.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    let maior = Math.max.apply(null, vetor)
    let menor = vetor[0]
    let soma = 0
    let media = 0
    let tot = vetor.length
    
    if (tot == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        for (let pos in vetor) {
            soma += vetor[pos]
            if (vetor[pos]>maior) 
                maior = vetor[pos]
            if (vetor[pos]<menor)
                menor = vetor[pos]
        } 

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores cadastrados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
    }
}