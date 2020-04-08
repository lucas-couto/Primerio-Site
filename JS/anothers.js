// Constants
const bAdd = document.getElementById('bAdd')
const bReset = document.getElementById('bReset')
const bStart = document.getElementById('bStart')

const sEnd = document.querySelector('.sEnd')
const counter = document.querySelector('.nClicks')
const nTimer = document.querySelector('.nTimer')
const sTimer = document.querySelector('.sTimer')
const nStatus = document.querySelector('.nStatus')
const sStatus = document.querySelector('.sStatus')

// Set Items
bAdd.disabled = true
bReset.disabled = true

// Items Styles
nTimer.style.opacity = 0
sEnd.style.opacity = 0
sTimer.style.opacity = 0
sStatus.style.opacity = 1
nTimer.style.opacity = 0
sEnd.style.opacity = 0
sTimer.style.opacity = 0