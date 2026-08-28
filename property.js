const menuBtn =
    document.getElementById("menuBtn");

const closeMenu =
    document.getElementById("closeMenu");

const mobileMenu =
    document.getElementById("mobileMenu");


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });
