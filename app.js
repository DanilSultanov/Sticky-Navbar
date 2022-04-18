const header = document.querySelector('.site-header')
const toggleBtn = document.querySelector('.toggle-nav')
const hiddenNav = document.querySelector('.hidden-nav')

toggleBtn.addEventListener('click', () => {
    hiddenNav.classList.toggle('shownav')
} )


document.addEventListener('scroll', (e) => {
    if (window.scrollY > header.clientHeight) {
    header.classList.add('white-header')
    } else {
        header.classList.remove('white-header')
    }
})