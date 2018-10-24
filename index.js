var button = document.getElementById("submitButton");
var images = document.getElementsByTagName("img");
var image1 = images[0];
var image2 = images[1];

image1.hidden = false;
image2.hidden = true;

image1.onclick = function(event)
{
   image1.hidden = true;
   image2.hidden = false;
}

image2.onclick = function(event) 
{
    image1.hidden = false;
    image2.hidden = true;
}


