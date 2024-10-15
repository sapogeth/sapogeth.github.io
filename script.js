// Получаем элементы плеера
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const selects = document.querySelectorAll('.form-select');
const imageLayerContainer = document.getElementById('image-layer-container');

// Функция для обновления прогресс-бара
const updateProgress = () => {
    const percentage = (audio.currentTime / audio.duration) * 100 || 0;
    progressBar.style.width = percentage + "%";
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
};

// Функция для форматирования времени
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

// Обновляем отображение длительности аудиофайла
audio.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// События для кнопок
playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
});

pauseButton.addEventListener("click", () => {
    audio.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
});

stopButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    progressBar.style.width = "0%";
    currentTimeDisplay.textContent = formatTime(0);
});

// Обновляем прогресс-бары во время воспроизведения
audio.addEventListener("timeupdate", updateProgress);

let images = {
    background: null,
    skin: null,
    clothes: null,
    foreground: null,
    decor: null
};

function updateImages() {
    // Сначала очищаем контейнер
    imageLayerContainer.innerHTML = '';

    // Создаем и добавляем фон
    if (images.background) {
        const bgImg = document.createElement('img');
        bgImg.src = `${images.background}`; // Убрано 'images/'
        bgImg.alt = "Background Image";
        bgImg.classList.add('visible');
        imageLayerContainer.appendChild(bgImg);
    }

    // Создаем и добавляем слой кожи (skin)
    if (images.skin) {
        const skinImg = document.createElement('img');
        skinImg.src = `${images.skin}`; // Убрано 'images/'
        skinImg.alt = "Skin Image";
        skinImg.classList.add('visible');
        imageLayerContainer.appendChild(skinImg);
    }

    // Создаем и добавляем слой одежды (clothes)
    if (images.clothes) {
        const clothesImg = document.createElement('img');
        clothesImg.src = `${images.clothes}`; // Убрано 'images/'
        clothesImg.alt = "Clothes Image";
        clothesImg.classList.add('visible');
        imageLayerContainer.appendChild(clothesImg);
    }

    // Создаем и добавляем передний план
    if (images.foreground) {
        const fgImg = document.createElement('img');
        fgImg.src = `${images.foreground}`; // Убрано 'images/'
        fgImg.alt = "Foreground Image";
        fgImg.classList.add('visible');
        imageLayerContainer.appendChild(fgImg);
    }

    // Создаем и добавляем декор
    if (images.decor) {
        const decorImg = document.createElement('img');
        decorImg.src = `${images.decor}`; // Убрано 'images/'
        decorImg.alt = "Decor Image";
        decorImg.classList.add('visible');
        imageLayerContainer.appendChild(decorImg);
    }
}

// Обработчики событий для выборок
selects.forEach(select => {
    select.addEventListener('change', function() {
        const selectedValue = this.value;
        const selectId = this.id;

        // Обновление изображений на основе выбора
        if (selectId === 'image-select-background') {
            images.background = selectedValue;
        } else if (selectId === 'image-select-skin') {
            images.skin = selectedValue;
        } else if (selectId === 'image-select-clothes') {
            images.clothes = selectedValue; // Теперь учитывается выбор одежды
        }

        // Обновляем отображаемые изображения
        updateImages();
    });
});

