const doyon = document.getElementById('doyon')
const ajar = document.getElementById('ajar')
const net = document.getElementById('net')
const gas = document.getElementById('gas')
const elec = document.getElementById('elec')
const council = document.getElementById('council')
const tax = document.getElementById('tax')
const talifa = document.getElementById('talifa')
const salaries = document.getElementById('salaries')


const exsiswarat = document.getElementById('exsiswarat')
const rasidCash = document.getElementById('rasidCash')
const usedPhones = document.getElementById('usedPhones')
const newPhones = document.getElementById('newPhones')
const rasidTashrij = document.getElementById('rasidTashrij')
const cardTashrij = document.getElementById('cardTashrij')


const prevTotal = document.getElementById('prevTotal')
const masrifTotal = document.getElementById('masrifTotal')
const mawjodatTotal = document.getElementById('mawjodatTotal')
const netProfit = document.getElementById('netProfit')
const newTotal = document.getElementById('newTotal')

function getMasarif(){
    return Number(doyon.value) + Number(ajar.value) + Number(net.value) + Number(gas.value) + Number(elec.value) + Number(council.value) + Number(tax.value) + Number(talifa.value) + Number(salaries.value)
}
function getMawjodat(){
    return Number(exsiswarat.value) + Number(rasidCash.value) + Number(usedPhones.value) + Number(newPhones.value) + Number(rasidTashrij.value) + Number(cardTashrij.value)
}

function getTotal(){
    const masrif = getMasarif()
    const mawjodat = getMawjodat()
    const total = mawjodat - masrif;
    masrifTotal.value = masrif;
    mawjodatTotal.value = mawjodat;
    newTotal.value = total;
    netProfit.value = total - Number(prevTotal.value)
}