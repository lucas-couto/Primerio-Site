function beforeStart(){
    let contador = 5
    const beforeStart = setInterval(() => {
        bStart.disabled = true
        if(contador >= 0){
            nStatus.textContent = contador
            contador--
        }else{
            nStatus.textContent = null
            sStatus.style.opacity = 0
            sTimer.style.opacity = 1
            timer()
            clearInterval(beforeStart)
        }
    }, 1000)
}
function timer(){
    const getOption = document.getElementById('segundos')
    const segundos = getOption.options[getOption.selectedIndex].value    
    let time = segundos
    const interval = setInterval(() =>{
        if(time >= 0){
            nTimer.style.opacity = 1
            bAdd.disabled = false
            nTimer.textContent = time
            time--
            }else{
                bAdd.disabled = true
                bReset.disabled = false
                sTimer.style.opacity = 0
                nTimer.style.opacity = 0
                sEnd.style.opacity = 1
                clearInterval(interval)
            }
    }, 1000)
} 
