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

    window.history.pushState({slide: nextSlide.id}, "React Isn't Magic", "#" + nextSlide.id);

    //[].forEach.call(nextSlide.querySelectorAll('iframe'), function (iframe) {
      //console.log(iframe);
      //try {
        //iframe.contentWindow.postMessage('jsbin:refresh', '*');
      //} catch (e) { console.error(e); }
    //});
  }
});

window.addEventListener("popstate", function(event) {
  goToSlide(event.state ? event.state.slide : window.location.hash.slice(1));
});

function goToSlide(slideNum) {
  document.querySelector(".visible").classList.remove("visible");
  var currentSlide = document.getElementById(slideNum);
  currentSlide = currentSlide || document.querySelector(".slide");
  currentSlide.classList.add("visible");
}


console.log(document.querySelectorAll(".slide"));
Array.prototype.forEach.call(
  document.querySelectorAll(".slide"),
  function(slide, i) {
    slide.id = "" + (i+1);
  }
);

if (window.location.hash) {
  goToSlide(window.location.hash.slice(1));
}

