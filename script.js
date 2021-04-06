function somar(){
    let n1 = document.getElementById('txtN1') 
    let tab = document.getElementById('seltab')


    if(n1.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(n1.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }








}