document.querySelectorAll(".projects img").forEach(img => {
    img.addEventListener("click", function () {

        let image = this.getAttribute("src");
        let disc = this.getAttribute("alt");

        document.getElementById("lightbox__image").setAttribute("src", image);
        document.getElementById("lightbox__image").setAttribute("alt", disc);
        document.getElementById("lightbox__disc").innerText = disc;
        document.querySelector(".lightbox").classList.remove("invisible");
        document.querySelector(".lightbox").classList.add("visible");
        console.log("worked!");
    });
});