// Your code goes here

const modal = document.createElement('div')
//modal.style.display = 'none'
modal.style.position = 'fixed'
modal.style.zIndex = '1'
modal.style.width = '25%'
modal.style.height = '25%'
modal.style.marginLeft = '40%'
modal.style.marginTop = '10%'
modal.style.background = 'black'
modal.style.padding = '2%'

const modalP = document.createElement('p')
modalP.textContent = "PLEASE DO NOT CLICK! I'M BEGGING YOU!!!"
modalP.style.color = 'white'
modalP.style.fontSize = '3rem'
const modalButton = document.createElement('button')
modalButton.textContent = 'CLICK ME!!'
modalButton.style.background = 'red'
modalButton.style.marginLeft = '30%'
modalButton.style.marginTop = '2%'
modalButton.style.width = '30%'
modalButton.style.height = '20%'
modalButton.style.border = 'none'

modal.prepend(modalP)
modal.appendChild(modalButton)

const header = document.querySelector('header')

window.addEventListener('load', (e) => {
    header.appendChild(modal)
})



