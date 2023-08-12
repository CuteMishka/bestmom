let currentIndex = 0;
const texts = document.querySelectorAll('.text');

function showNext() {
    if (currentIndex < texts.length) {
        // Сначала скрываем текущий текст
        if (currentIndex > 0) {
            texts[currentIndex - 1].style.display = 'none';
            texts[currentIndex - 1].style.transform = 'scale(0)';
        }

        // Затем показываем следующий текст
        texts[currentIndex].classList.remove('hidden');
        texts[currentIndex].style.opacity = '1';
        texts[currentIndex].style.transform = 'scale(1)';
        
        currentIndex++;
    }
}
