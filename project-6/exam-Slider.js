const images = 
[
    "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-23b0-61f7-ab6e-2aa747e58281/raw?se=2025-04-18T13%3A39%3A02Z&sp=r&sv=2024-08-04&sr=b&scid=acec0aa5-92d3-5743-a6d2-23c236217a8c&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-17T20%3A26%3A54Z&ske=2025-04-18T20%3A26%3A54Z&sks=b&skv=2024-08-04&sig=xXqY3lFhcPgoRwSozvloY29LdFE2p/Yc%2BzvPnN/tCOU%3D",
    "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?cs=srgb&dl=pexels-pixabay-356040.jpg&fm=jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20250120/pngtree-colorful-chemistry-laboratory-with-vibrant-liquids-and-scientific-equipment-image_16880391.jpg",
    "https://www.shutterstock.com/image-vector/hand-dropping-basketball-ball-bounce-600nw-2333564847.jpg",
    "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-e52c-61f7-b750-b41731184a40/raw?se=2025-04-18T13%3A48%3A26Z&sp=r&sv=2024-08-04&sr=b&scid=6369a88c-2bdb-5837-8aca-268b1e43991a&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-17T20%3A26%3A57Z&ske=2025-04-18T20%3A26%3A57Z&sks=b&skv=2024-08-04&sig=a%2BClbGdQJo/3YmxHfRR8eMJp0MH0uhI00O46V21CRs8%3D",
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