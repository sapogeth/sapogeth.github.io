// Получаем selects
const selects = document.querySelectorAll('.form-select');
const selects2 = document.querySelectorAll('.form-select2');
const imageLayerContainer = document.getElementById('image-layer-container');
const playPauseButton = document.getElementById('play-pause-btn');
const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');

let images = {
    background: null,  // Добавлено свойство для эффектов
    skin: null,
    clothes: null,
    hair: null,
    decor: null,
    foreground: null, // Для переднего плана
    hats: null,
    hands: null,
    mouth: null,
    brows: null,
    glasses: null,
    effect: null,
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

        // Создаем и добавляем эффекты (effects) - ниже всех, кроме фона
    if (images.effect) {
        const effectImg = document.createElement('img');
        effectImg.src = `${images.effect}`; // Убрано 'images/'
        effectImg.alt = "Effect Image";
        effectImg.classList.add('visible');
        imageLayerContainer.appendChild(effectImg);
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

    // Создаем и добавляем шляпы (hats)
    if (images.hats) {
        const hImg = document.createElement('img');
        hImg.src = `${images.hats}`; // Исправлено: теперь используется images.hats
        hImg.alt = "Hats Image";
        hImg.classList.add('visible');
        hImg.classList.add('hat-layer'); // Добавляем класс для шляп
        imageLayerContainer.appendChild(hImg);
    }

    // Создаем и добавляем волосы (hair) - теперь после шляп
    if (images.hair) {
        const hrImg = document.createElement('img');
        hrImg.src = `${images.hair}`; // Исправлено: теперь используется images.hair
        hrImg.alt = "Hair Image";
        hrImg.classList.add('visible');
        hrImg.classList.add('hair-layer'); // Добавляем класс для волос
        imageLayerContainer.appendChild(hrImg);
    }

    // Создаем и добавляем декор
    if (images.decor) {
        const decorImg = document.createElement('img');
        decorImg.src = `${images.decor}`; // Убрано 'images/'
        decorImg.alt = "Decor Image";
        decorImg.classList.add('visible');
        imageLayerContainer.appendChild(decorImg);
    }

    // Создаем и добавляем передний план (foreground)
    if (images.foreground) {
        const fgImg = document.createElement('img');
        fgImg.src = `${images.foreground}`; // Убрано 'images/'
        fgImg.alt = "Foreground Image";
        fgImg.classList.add('visible');
        imageLayerContainer.appendChild(fgImg);
    }

    // Создаем и добавляем руки (hands)
    if (images.hands) {
        const hhImg = document.createElement('img');
        hhImg.src = `${images.hands}`; // Исправлено: теперь используется images.hands
        hhImg.alt = "Hands Image";
        hhImg.classList.add('visible');
        imageLayerContainer.appendChild(hhImg);
    }

    // Создаем и добавляем рот (mouth)
    if (images.mouth) {
        const mImg = document.createElement('img');
        mImg.src = `${images.mouth}`; // Исправлено: теперь используется images.mouth
        mImg.alt = "Mouth Image";
        mImg.classList.add('visible');
        imageLayerContainer.appendChild(mImg);
    }

    if (images.brows) {
        const bImg = document.createElement('img');
        bImg.src = `${images.brows}`; // Исправлено: теперь используется images.mouth
        bImg.alt = "Brows Image";
        bImg.classList.add('visible');
        imageLayerContainer.appendChild(bImg);
    }

    if (images.glasses) {
        const sImg = document.createElement('img');
        sImg.src = `${images.glasses}`; // Исправлено: теперь используется images.glasses
        sImg.alt = "Glasses Image";
        sImg.classList.add('visible');
        imageLayerContainer.appendChild(sImg); // Исправлено: было simageLayerContainer
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
        } else if (selectId === 'image-select-eff') {
            images.effect = selectedValue;
        } else if (selectId === 'image-select-skin') {
            images.skin = selectedValue;
        } else if (selectId === 'image-select-clothes') {
            images.clothes = selectedValue;
        } else if (selectId === 'image-select-hair') {
            images.hair = selectedValue;
        } else if (selectId === 'image-select-decor') {
            images.decor = selectedValue;
        } else if (selectId === 'image-select-foreground') {
            images.foreground = selectedValue;
        } else if (selectId === 'image-select-hats') {
            images.hats = selectedValue;
        } else if (selectId === 'image-select-hands') {
            images.hands = selectedValue;
        } else if (selectId === 'image-select-mouth') {
            images.mouth = selectedValue;
        } else if (selectId === 'image-select-brows') {
            images.brows = selectedValue;
        } else if (selectId === 'image-select-glasses') {
            images.glasses = selectedValue;
        }

        // Обновляем отображаемые изображения
        updateImages();
    });
});

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});