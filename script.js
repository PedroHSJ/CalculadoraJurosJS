function calcular(){
    let valor = document.getElementById('ValorInic')
    let taxa = document.getElementById('TaxaDeJuros')
    let par = document.getElementById('Parcelas')
    let res = document.getElementById('quadro2')

    if (valor.value.length == 0 || taxa.value.length == 0 || par.value.legth == 0){
        alert('[ERRO] Digite um valor!')
    } else{
        let v = Number(valor.value)
        let t = Number(taxa.value)
        let p = Number(par.value)
        var result = 0
        res.innerHTML = ''
        result = Number.parseInt(v + (v * (t/100)))
        res.innerHTML += `1° Parcela: <br> - ${v} x ${t}% = ${result} - <br>`
        for ( let c = 1 ; c < p ; c++){
            var result1 = 0
            res.innerHTML += `${c+1}° Parcela: <br> - ${result} x ${t}% = ${result1 = Number.parseInt(result + (result*(t/100)))} - <br>`
            result = Number.parseInt(result + (result * (t/100))) 
            //var result1 = result + (result*(t/100))
            //res.innerHTML += `${c+1}° Parcela: ${result.toFixed(1)} x ${t}% = ${result1.toFixed(1)}<br>`
            //result = result + (result * (t/100))
            

        }
    }

}