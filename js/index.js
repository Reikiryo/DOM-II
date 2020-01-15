// Your code goes here

//warning div
const warning = document.createElement('div')
warning.style.position = 'fixed'
warning.style.zIndex = '1'
warning.style.marginLeft = '27%'
warning.style.width = '50%'
warning.style.height = '25%'
//warning img
const warningImg = document.createElement('img')
warningImg.src = 'img/warning.png'
warningImg.style.width = '100%'
warningImg.style.height = '100%'
//apend warning img to warning
warning.appendChild(warningImg)

//static div
const static = document.createElement('div')
static.style.position = 'fixed'
static.style.zIndex = '1'
static.style.width = '100%'
static.style.height = '100%'
//static img
const staticImg = document.createElement('img')
staticImg.src = 'img/static.png'
staticImg.style.width = '100%'
staticImg.style.height = '100%'
//apend static img to static
static.appendChild(staticImg)

//error div
const error = document.createElement('div')
error.style.position = 'fixed'
error.style.zIndex = '1'
error.style.width = '20%'
error.style.height = '28%'
error.style.margin = '3%'
//error img
const errorImg = document.createElement('img')
errorImg.src = 'img/error.png'
errorImg.style.width = '100%'
errorImg.style.height = '100%'
//apend error img to error
error.appendChild(errorImg)

//error2 div
const error2 = document.createElement('div')
error2.style.position = 'fixed'
error2.style.zIndex = '2'
error2.style.width = '100%'
error2.style.height = '100%'
//error img
const error2Img = document.createElement('img')
error2Img.src = 'img/error2.png'
error2Img.style.width = '100%'
error2Img.style.height = '100%'
//apend error img to error
error2.appendChild(error2Img)

//error content
const errorP = document.createElement('p')
errorP.textContent = "THIS SITE HAS BEEN CORRUPTED!"
errorP.style.color = 'red'
errorP.style.width = '80%'
errorP.style.height = '20%'
errorP.style.top = '0'
errorP.style.fontSize = '4rem'
errorP.style.marginLeft = '29%'


//modal
const modal = document.createElement('div')
modal.style.position = 'fixed'
modal.style.zIndex = '1'
modal.style.width = '25%'
modal.style.height = '30%'
modal.style.marginLeft = '40%'
modal.style.marginTop = '12%'
modal.style.background = 'black'
modal.style.padding = '2%'

//modal content
const modalP = document.createElement('p')
modalP.textContent = "PLEASE DO NOT CLICK! I'M BEGGING YOU!!!"
modalP.style.color = 'white'
modalP.style.fontSize = '3rem'
const modalButton = document.createElement('button')
modalButton.textContent = 'CLICK ME!!'
modalButton.style.background = 'red'
modalButton.style.marginLeft = '35%'
modalButton.style.marginTop = '2%'
modalButton.style.width = '30%'
modalButton.style.height = '20%'
modalButton.style.border = 'none'
//appending content to modal
modal.prepend(modalP)
modal.appendChild(modalButton)

//singular
const header = document.querySelector('.main-navigation')
const logo = document.querySelector('h1')
const content = document.querySelector('.content-section')
const footer = document.querySelector('footer')
const destinationContent = document.querySelector('.content-destination')
const home = document.querySelector('.home')
const container = document.querySelector('.container')
const body = document.querySelector('body')
const headerImg = document.querySelector('.header-img')
const destinationImg = document.querySelector('.destination-img')
//all
const imgSections = document.querySelectorAll('.img-content')
const img = document.querySelectorAll('img')
const h2 = document.querySelectorAll('h2')
const h4 = document.querySelectorAll('h4')
const p = document.querySelectorAll('p')
const destination = document.querySelectorAll('.destination')
const btn = document.querySelectorAll('.btn')
const a = document.querySelectorAll('a')

//prevent default
a.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
    })
})


//array of colors
const colors = ['cadetblue', 'azure', 'aqua', 'blueviolet', 'firebrick', 'lightgray', 'lime', 'maroon', 'snow', 'yellowgreen', 'orchid', 'brown', 'darkslateblue', 'darkseagreen', 'deepskyblue', 'lightseagreen', 'lavenderblush', 'limegreen', 'lightpink', 'magenta', 'mediumspringgreen', 'navajowhite', 'navy', 'red', 'blue', 'green', 'white', 'black', 'purple', 'yellow']

//random colors
const random = () => {
    return Math.floor(Math.random() * Math.floor(colors.length));
 }

//event 1 load event
window.addEventListener('load', (e) => {
    header.appendChild(modal)
})

//event 2 mouse enter event
modal.addEventListener('mouseenter', (e) => {
    header.appendChild(warning)

    modalP.style.fontSize = '2.5rem'

    gsap.to(modal, {
        border: '5px dotted red'
    })

    gsap.to(modalButton, {
        duration: 7,
        fontSize: '3rem',
        width: '70%',
        height: '50%',
        marginLeft: '15%'
    })

    gsap.to(warning, {
        duration: 1.5,
        opacity: '90%',
        repeat: 20,
        scale: 1.1,
        y: 9,
        yoyo: true 
    })
})

//event 3 click event
modalButton.addEventListener('click', () => {
    modal.style.display = 'none'
    header.appendChild(static)
    header.appendChild(error)
    header.appendChild(error2)
    header.appendChild(errorP)


        p.forEach(el => {
            el.style.color = colors[random()]
            el.style.background = colors[random()]
        })
        h2.forEach(el => {
            el.style.color = colors[random()]
            el.style.background = colors[random()]
        })
        h4.forEach(el => {
            el.style.color = colors[random()]
            el.style.background = colors[random()]
        })
        destination.forEach(el => {
            el.style.color = colors[random()]
            el.style.background = colors[random()]
        })
        btn.forEach(el => {
            el.style.color = colors[random()]
            el.style.background = colors[random()]
        })
        a.forEach(el => {
            el.style.color = colors[random()]
            el.style.background = colors[random()]
        })
        home.style.background = colors[random()]
        container.style.background = colors[random()]
        body.style.background = colors[random()]
        header.style.background = colors[random()]
        logo.style.background = colors[random()]
        footer.style.background = colors[random()]
        body.style.background = colors[random()]
        destinationContent.style.background = colors[random()]

        gsap.to(warning, {
            duration: 5,
            opacity: '20%',
            display: 'none'
        })

        gsap.to(static, {
            duration: 0.1,
            repeat: 70,
            opacity: '50%',
            display: 'none'
        })

        gsap.to(error2, {
            duration: 1,
            repeat: 3,
            opacity: '90%',
            display: 'none'
        })
})

//event 4 scroll event
window.addEventListener('scroll', (e) => {
    gsap.to(logo, {
        marginTop: '20%',
        rotate: 200,
        y: 50
    })
    gsap.to(destinationImg, {
        rotate: 200,
    })
})

//event 5 resize event
window.addEventListener('resize', (e) => {
    p.forEach(el => {
        el.style.color = colors[random()]
        el.style.background = colors[random()]
    })
    h2.forEach(el => {
        el.style.color = colors[random()]
        el.style.background = colors[random()]
    })
    h4.forEach(el => {
        el.style.color = colors[random()]
        el.style.background = colors[random()]
    })
    destination.forEach(el => {
        el.style.color = colors[random()]
        el.style.background = colors[random()]
    })
    btn.forEach(el => {
        el.style.color = colors[random()]
        el.style.background = colors[random()]
    })
    a.forEach(el => {
        el.style.color = colors[random()]
        el.style.background = colors[random()]
    })
    home.style.background = colors[random()]
    container.style.background = colors[random()]
    body.style.background = colors[random()]
    header.style.background = colors[random()]
    logo.style.background = colors[random()]
    footer.style.background = colors[random()]
    body.style.background = colors[random()]
    destinationContent.style.background = colors[random()]
})

//event 6 double click event
error.addEventListener('dblclick', (e) => {
    errorP.style.fontSize = '10rem'
    errorP.style.marginLeft = '20%'
})


//event 7 mouse leave event
img.forEach(el => {
    if (el !== headerImg) {
        el.addEventListener('mouseleave', (e) => {
            gsap.to(e.target, {
                scale: 1.2
            })
        })
    }
})

//event 8 focus event
a.forEach(el => {
    el.addEventListener('focus', (e) => {
        gsap.to(e.target, {
            color: colors[random()],
            background: colors[random()],
            fontSize: '2rem'
        })
    })
})

//event 9 select event
btn.forEach(el => {
    el.addEventListener('auxclick', (e) => {
        gsap.to(e.target, {
            color: colors[random()],
            background: colors[random()]
        })
    })
})

//event 10 key press event 
document.addEventListener('keypress', (e) => {
    gsap.to(headerImg, {
        duration: 2,
        scale: 0.3
    })
})

