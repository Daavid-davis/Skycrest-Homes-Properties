const locationFilter =
    document.getElementById("locationFilter");

const typeFilter =
    document.getElementById("typeFilter");

const priceFilter =
    document.getElementById("priceFilter");

const filterButton =
    document.getElementById("filterButton");

const cards =
    document.querySelectorAll(".catalogue-card");

const emptyMessage =
    document.getElementById("catalogueEmpty");

const propertyCount =
    document.getElementById("propertyCount");


function filterProperties() {

    const location =
        locationFilter.value;

    const type =
        typeFilter.value;

    const price =
        priceFilter.value;

    let visible = 0;


    cards.forEach(card => {

        const cardLocation =
            card.dataset.location;

        const cardType =
            card.dataset.type;

        const cardPrice =
            Number(card.dataset.price);


        const locationMatch =
            location === "all" ||
            location === cardLocation;


        const typeMatch =
            type === "all" ||
            type === cardType;


        let priceMatch = true;


        if (price === "100") {

            priceMatch =
                cardPrice < 100;

        }

        if (price === "300") {

            priceMatch =
                cardPrice >= 100 &&
                cardPrice <= 300;

        }

        if (price === "500") {

            priceMatch =
                cardPrice > 300 &&
                cardPrice <= 500;

        }

        if (price === "500plus") {

            priceMatch =
                cardPrice > 500;

        }


        if (
            locationMatch &&
            typeMatch &&
            priceMatch
        ) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";

        }

    });


    propertyCount.textContent =
        `${visible} ${visible === 1 ? "property" : "properties"}`;


    if (visible === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }

}


filterButton.addEventListener(
    "click",
    filterProperties
);


/* Mobile menu */

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
