document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });

    document.querySelectorAll('.animate').forEach((el) => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('loading');
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            image.removeAttribute('loading');
        });
    }
});
