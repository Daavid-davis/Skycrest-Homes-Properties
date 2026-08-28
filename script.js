const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================
   PROPERTY SEARCH
========================================= */

const searchBtn = document.getElementById("searchBtn");

const locationSelect =
    document.getElementById("location");

const typeSelect =
    document.getElementById("type");

const priceSelect =
    document.getElementById("price");

const cards =
    document.querySelectorAll(".property-card");

const noResults =
    document.getElementById("noResults");


searchBtn.addEventListener("click", () => {

    const selectedLocation =
        locationSelect.value;

    const selectedType =
        typeSelect.value;

    const selectedPrice =
        priceSelect.value;


    let visibleCards = 0;


    cards.forEach(card => {

        const location =
            card.dataset.location;

        const type =
            card.dataset.type;

        const price =
            Number(card.dataset.price);


        let matchesLocation =
            !selectedLocation ||
            location === selectedLocation;

        let matchesType =
            !selectedType ||
            type === selectedType;

        let matchesPrice = true;


        if (selectedPrice === "100") {

            matchesPrice = price < 100;

        }

        else if (selectedPrice === "300") {

            matchesPrice =
                price >= 100 &&
                price <= 300;

        }

        else if (selectedPrice === "500") {

            matchesPrice =
                price > 300 &&
                price <= 500;

        }

        else if (selectedPrice === "500+") {

            matchesPrice =
                price > 500;

        }


        const match =
            matchesLocation &&
            matchesType &&
            matchesPrice;


        if (match) {

            card.style.display = "";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


/* =========================================
   HEART BUTTONS
========================================= */

document.querySelectorAll(".heart-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            if (button.textContent.trim() === "♡") {

                button.textContent = "♥";

            } else {

                button.textContent = "♡";

            }

        });

    });
