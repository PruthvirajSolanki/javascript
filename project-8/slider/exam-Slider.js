const images = 
[
    "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?semt=ais_hybrid&w=740",
    "https://raksha-anirveda.com/wp-content/uploads/2024/02/rocket-science-india.webp",
    "https://png.pngtree.com/thumb_back/fh260/background/20250120/pngtree-colorful-chemistry-laboratory-with-vibrant-liquids-and-scientific-equipment-image_16880391.jpg",
    "https://www.shutterstock.com/image-vector/hand-dropping-basketball-ball-bounce-600nw-2333564847.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Albert_Einstein_sticks_his_tongue.jpg/250px-Albert_Einstein_sticks_his_tongue.jpg",
];

let currentIndex = 0;

function newImage() 
{
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentIndex];
}

function prevImage() 
{
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    newImage();
}

function nextImage() 
{
    currentIndex = (currentIndex + 1) % images.length;
    newImage();
}

newImage();


let index = 0;
const sliderImage = document.getElementById("slider-image");

function showImage() 
{
  sliderImage.src = Images[index];
}

showImage();

setInterval(() => 
{
  index = (index + 1) % Images.length;
  showImage();
}, 1500);