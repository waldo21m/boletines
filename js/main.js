let links = document.querySelectorAll(".close");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let content = document.querySelector(".content");

    content.classList.remove("zoomInUp");
    content.classList.remove("animated");

    content.classList.add("zoomOutUp");
    content.classList.add("animated");

    setTimeout(function () {
      location.href = "../"
    }, 600);

    console.log(":)");
  });
});
