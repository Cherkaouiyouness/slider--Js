
// let img1 = document.querySelector("img")

// left.onclick = function(){
//     img1.src="image3.jpg"
// }
// right.onclick = function(){
//     img1.src="image2.jpg"
// }

let left = document.querySelector("#left")
let right = document.querySelector("#right")
let img = document.querySelector("img")
let images = ["image1.jpg","image2.jpg","image3.jpg"]
let circle = document.querySelector(".circle")

let i = 0 ;
left.onclick = function slideShow(){

    circle.style.backgroundColor = "red"
    
    img.src = images[i]
    if(i<images.length-1)  
    i++;
    else i=0;
}
right.onclick = function slideShow(){
    img.src = images[i]
    if(i<images.length-1)  
    i++;
    else i=0;
}





























// let images = ["image1.jpg","image2.jpg","image3.jpg","image1.jpg","image2.jpg","image3.jpg"]
// let i = 0 ;

// function slideShow(){
//     document.querySelector("img").src = images[i]


//     if(i<5)  
//     i++;
//     else i=0;

//     setTimeout("slideShow()",1000)

// }
// window.onload = slideShow ;