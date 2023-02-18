// javascript
const width = document.getElementById('width')

let onResize = () => {
    width.textContent = document.body.clientWidth
    width.classList.add('display-width')
    setTimeout(() => {
        width.classList.remove('display-width')
    }, 3000)
}

window.addEventListener('resize', onResize)