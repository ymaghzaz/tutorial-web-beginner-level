var button = document.getElementById("submitButton");
var images = document.getElementsByTagName("img");
var image = images[0];

button.onclick = function(event) {
  image.hidden = !image.hidden;
};
