window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const homeSection = document.getElementById("home");
    const welcomeText = preloader.querySelector("h1");

    document.body.classList.add("preload-active");

    welcomeText.style.opacity = 1;
    welcomeText.style.transition = "opacity 1s ease";

    setTimeout(() => {
        preloader.classList.add("hide");
        document.body.classList.remove("preload-active");


        homeSection.classList.add("visible");
    }, 1000);
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section:not(#home)");
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(sec => {
        const boxTop = sec.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            sec.classList.add("visible");
        }
    });
});
