const next = document.querySelector('.btn_next')
const prev = document.querySelector('.btn_prev')

const conntrolCarousel = (list) => {
    const carouselImage = document.querySelectorAll(".carousel_image img");
    const carouselInner = document.querySelectorAll(".carousel_inner img");
    let length = carouselImage.length - 1
    let item = 0
    list.forEach(element => {
        element.addEventListener('click', () => {
            carouselImage.forEach(img => {
                img.classList.remove('active')
            })
            carouselInner.forEach(img => {
                img.classList.remove('img_inner_active')
            })
            carouselImage[item].classList.add('active')
            carouselInner[item].classList.add('img_inner_active')
            element === next?item++:item
            element === prev?item--:item
            item > length && (item=0)
            item < 0 && (item=length)
        })
    });
}
conntrolCarousel([next, prev])
