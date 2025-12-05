const scrollTopBtn = document.getElementById("scrollTopBtn");


function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block"; // Show the button
  } else {
    scrollTopBtn.style.display = "none"; // Hide the button
  }
}

window.onscroll = function() {
  scrollFunction();
};