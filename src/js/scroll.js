window.addEventListener("scroll", function() {
  let { height } = document.querySelector("#header > .row").getBoundingClientRect();
  if (window.scrollY >= height && window.innerWidth > 768) {
    document.body.classList.add("menuFixed");
  } else {
    document.body.classList.remove("menuFixed");
  }
});

