function addClick(){
    var numeros = (parseInt(counter.textContent)) + 1
    counter.textContent = numeros
}
function resetClick(){
    counter.textContent = 0 
    // Get back to the original "page"
    nTimer.style.opacity = 0
    sEnd.style.opacity = 0
    sTimer.style.opacity = 0
    sStatus.style.opacity = 1
    bStart.disabled = true
}
