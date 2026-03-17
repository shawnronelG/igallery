let images = [
"img1.jpg",
"img2.jpg",
"img3.jpg",
"img4.jpg.jpeg",
"img5.jpg"
];
var captions=["silly jolly doggy","meowl","seathislion","horse of despair","ceo of kfc"]
var index = 0;

function nextImage(){

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("galleryImage").src = images[index];
document.getElementById("caption").innerHTML = captions[index];

}

function prevImage(){

index--;

if(index < 0){
index = images.length - 1;
}

document.getElementById("galleryImage").src = images[index];

}