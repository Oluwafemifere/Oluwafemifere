document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("myCarousel");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const bgVid = document.getElementById("bgVid");

    let currentIndex = 0;
    let isAnimating = false;
    let hueRotateDegree = 90;

    function showItem(index) {
        if (!isAnimating) {
            isAnimating = true;
            const items = document.querySelectorAll(".carousel-item");
            items.forEach((item, i) => {
                const newPosition = 100 * (i - index);
                item.style.transform = `translateX(calc(${newPosition}% - ${index * 100}%))`;
            });
        }
    }

    function handleTransitionEnd() {
        isAnimating = false;
    }

    function updateHueRotate() {
        bgVid.style.filter = `hue-rotate(${hueRotateDegree}deg)`;
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % 9;
        showItem(currentIndex);

        hueRotateDegree += 30;
        updateHueRotate();
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + 9) % 9;
        showItem(currentIndex);

        hueRotateDegree -= 30;
        updateHueRotate();
    }

    showItem(currentIndex);

    nextButton.addEventListener("click", nextItem);
    prevButton.addEventListener("click", prevItem);

    carousel.addEventListener("transitionend", handleTransitionEnd);
});
const fileUrls = [
    'Thumb (1).png',
    'Thumb (2).png',
    'Thumb (3).png',
    'Thumb (4).png',
    'Thumb (5).png',
    'Thumb (6).png',
    'Thumb (7).png',
    'Thumb (8).png',
    'Thumb (9).png',
];

const downloadButtons = document.querySelectorAll('.common-btn');

downloadButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = fileUrls[index];
        link.download = `Thumb (${index + 1}).png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});