let introSidebar = document.getElementById('intro-sidebar')
let sidebar = document.getElementById('sidebar')
let openBtn = document.getElementById('intro-sidebar-open-btn')
let closeBtn = document.getElementById('intro-sidebar-close-btn')
let hamburgerBtn = document.getElementById('hamburger-menu-btn')
let xIcon = document.getElementById('x-icon')
let hamburgerIcon = document.getElementById('hamburger-icon')

let animateHeader = document.getElementById('animate-header')
let bounce = document.getElementById('bounce')
let flash = document.getElementById('flash')
let pulse = document.getElementById('pulse')
let rubberBand = document.getElementById('rubberBand')
let shakeX = document.getElementById('shakeX')
let shakeY = document.getElementById('shakeY')
let headShake = document.getElementById('headShake')
let swing = document.getElementById('swing')
let tada = document.getElementById('tada')
let wobble = document.getElementById('wobble')
let jello = document.getElementById('jello')
let heartBeat = document.getElementById('heartBeat')

openBtn.addEventListener('click', (e) => {
    e.preventDefault()
    introSidebar.classList.add('active')
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    introSidebar.classList.remove('active')
})

hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault(e)
    hamburgerBtn.classList.toggle('active')
    sidebar.classList.toggle('active')
    hamburgerIcon.classList.toggle('active')
    xIcon.classList.toggle('active')
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

bounce.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__bounce')
    await sleep(1500)
    animateHeader.classList.remove('animate__bounce')
})

flash.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__flash')
    await sleep(1500)
    animateHeader.classList.remove('animate__flash')
})

pulse.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__pulse')
    await sleep(1500)
    animateHeader.classList.remove('animate__pulse')
})

rubberBand.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__rubberBand')
    await sleep(1500)
    animateHeader.classList.remove('animate__rubberBand')
})

shakeX.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__shakeX')
    await sleep(1500)
    animateHeader.classList.remove('animate__shakeX')
})

shakeY.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__shakeY')
    await sleep(1500)
    animateHeader.classList.remove('animate__shakeY')
})

headShake.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__headShake')
    await sleep(1500)
    animateHeader.classList.remove('animate__headShake')
})

swing.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__swing')
    await sleep(1500)
    animateHeader.classList.remove('animate__swing')
})

tada.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__tada')
    await sleep(1500)
    animateHeader.classList.remove('animate__tada')
})

wobble.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__wobble')
    await sleep(1500)
    animateHeader.classList.remove('animate__wobble')
})

jello.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__jello')
    await sleep(1500)
    animateHeader.classList.remove('animate__jello')
})

heartBeat.addEventListener('click', async (e) => {
    e.preventDefault(e)
    if (introSidebar.classList.contains('active')) {
        introSidebar.classList.remove('active')
        await sleep(300)
    }
    animateHeader.classList.add('animate__heartBeat')
    await sleep(1500)
    animateHeader.classList.remove('animate__heartBeat')
})