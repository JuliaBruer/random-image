inspirationImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];
motivationImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
compassionImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];

function randomInspiration() {
    randomImgInspiration = Math.floor(Math.random() * inspirationImages.length);
    selectedImgInspiration = inspirationImages[randomImgInspiration];
    document.getElementById('image_shower1').src = `./img/inspiration/${selectedImgInspiration}`;
}

function randomMotivation() {
    randomImgMotivation = Math.floor(Math.random() * motivationImages.length);
    selectedImgMotivation = motivationImages[randomImgMotivation];
    document.getElementById('image_shower2').src = `./img/motivation/${selectedImgMotivation}`;
}

function randomCompassion() {
    randomImgCompassion = Math.floor(Math.random() * compassionImages.length);
    selectedImgCompassion = compassionImages[randomImgCompassion];
    document.getElementById('image_shower3').src = `./img/compassion/${selectedImgCompassion}`;
}