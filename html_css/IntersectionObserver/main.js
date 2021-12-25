function ready() {
    if ('IntersectionObserver' in window) {
        let lazySrc = document.querySelectorAll('[lazy-src]')
        let callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let lazy_src = entry.target.getAttribute('lazy-src')
                    if (lazy_src) {
                        entry.target.setAttribute('src', lazy_src)
                        entry.target.removeAttribute('lazy-src')
                    }
                }
            })
        }
        let observer = new IntersectionObserver(callback)
        lazySrc.forEach(img => {
            observer.observe(img)
        })
    } else { }
}

document.addEventListener('DOMContentLoaded', ready)