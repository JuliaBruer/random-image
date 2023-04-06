img_array1 = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
]
function randomImage1() {
random_index1 = Math.floor(Math.random() * img_array1.length);
selected_img1 = img_array1[random_index1];
document.getElementById('image_shower1').src = `./images/inspiration/${selected_img1}`
}

img_array2 = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
]
function randomImage2() {
random_index2 = Math.floor(Math.random() * img_array2.length);
selected_img2 = img_array2[random_index2];
document.getElementById('image_shower2').src = `./images/motivation/${selected_img2}`
}

img_array3 = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
]
function randomImage3() {
random_index3 = Math.floor(Math.random() * img_array3.length);
selected_img3 = img_array3[random_index3];
document.getElementById('image_shower3').src = `./images/compassion/${selected_img3}`
}