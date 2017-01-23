window.addEventListener("keydown", function(event) {
  var current = document.querySelector(".visible");
  var nextSlide = null;
  if (event.keyCode == 39 || event.keyCode == 40) {
    nextSlide = current.nextElementSibling;
  } else if (event.keyCode == 37 || event.keyCode == 38) {
    nextSlide = current.previousElementSibling;
  } else {
    return;
  }

  if (nextSlide) {
    current.classList.remove("visible");
    nextSlide.classList.add("visible");
  }
});
