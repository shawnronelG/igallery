# Ex.07 Design of Interactive Image Gallery
## Date:

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
photos.html

<html>
<head>
<title>Image Gallery</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Interactive Image Gallery</h1>

<div class="gallery">
<img id="galleryImage" src="img1.jpg">
<p id="caption">silly jolly doggy</p>
<button onclick="prevImage()">Previous</button>
<button onclick="nextImage()">Next</button>

</div>

<script src="script.js"></script>
<footer>
Designed by G. Shawn Ronel(25005544)
</footer>

</body>
</html>

style.css

body{
text-align:center;
font-family:Arial;
background:#f2f2f2;
color: white;
}

h1{
margin-top:20px;
}

.gallery{
margin-top:40px;
}

.gallery img{
width:400px;
height:250px;
border-radius:10px;
box-shadow:0 5px 15px rgba(93, 85, 85, 0.3);
}

button{
padding:10px 20px;
margin:20px;
font-size:16px;
background:#333;
color:rgb(109, 84, 84);
border:none;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#f71e1e;
} 
footer{
background:#44301f;
color:rgb(65, 51, 51);
padding:10px;
position:fixed;
bottom:0;
width:100%;
}

scripts.js

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
```
## OUTPUT:
![alt text](<Screenshot (36).png>) ![alt text](<Screenshot (35).png>) ![alt text](<Screenshot (34).png>) ![alt text](<Screenshot (33).png>) ![alt text](<Screenshot (32).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
