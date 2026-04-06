document.addEventListener('DOMContentLoaded', function() {
    // selector for Ghost-rendered images
    const IMAGE_SELECTOR = '.kg-image-card img, .kg-width-wide img, .kg-width-full img, .kg-image img';

    // Create overlay once
    const overlay = document.createElement('div');
    overlay.className = 'gg-overlay';
    overlay.innerHTML = '<div class="gg-container"></div>';
    document.body.appendChild(overlay);
    const container = overlay.querySelector('.gg-container');

    // Close overlay on click outside image or on Escape
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target === container) closeOverlay();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeOverlay();
    });

    function openOverlay(src) {
        container.innerHTML = '';
        const img = new Image();
        img.src = src;
        img.alt = '';
        img.draggable = false;
        img.className = 'gg-fit-width';
        // Prevent clicks on image from closing overlay
        img.addEventListener('click', function(ev) {
            ev.stopPropagation();
        });
        container.appendChild(img);
        overlay.style.display = 'flex';
        // On touch / pointer devices allow pan by default via container overflow

        // Close when clicking the image
        img.addEventListener('click', function(ev) {
            closeOverlay();
        });
    }

    function closeOverlay() {
        overlay.style.display = 'none';
        container.innerHTML = '';
    }
    // Select Ghost-rendered images (including gallery images)
    const imgs = document.querySelectorAll('.kg-image-card img, .kg-width-wide img, .kg-width-full img, .kg-image img, .kg-gallery-image img');

    imgs.forEach(function(img) {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // treat .kg-width-full as fit-height; gallery images inherit their figure's classes
            const fig = img.closest('figure, .kg-gallery-image, .kg-image-card');
            openOverlay(img.src);
        });
    });
});