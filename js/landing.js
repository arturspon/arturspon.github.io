document.addEventListener("DOMContentLoaded", function (event) {
    calculateAge()
    initializeMaterializeElements()
})

function calculateAge() {
    const birthday = new Date(1997, 9, 15) // 9 == October
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    document.getElementById('myAge').innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970) + ' anos'
}

function initializeMaterializeElements() {
    initializeCarousel()
    initializeSlider()

    function initializeCarousel() {
        const elems = document.querySelectorAll('.carousel')
        const instances = M.Carousel.init(elems, {})
    }

    function initializeSlider() {
        const elems = document.querySelectorAll('.slider')
        const instances = M.Slider.init(elems, { interval: 2000 })
    }
}

function scrollToElement(elementId) {
    document.getElementById(elementId)
        .scrollIntoView(
            {
                behavior: 'smooth',
                block: 'start'
            }
        )
}