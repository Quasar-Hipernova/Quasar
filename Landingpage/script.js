/* Car data */
let popularCars = [
    {
        name: "Koenigsegg",
        type: "Sport",
        image: "./Landingpage/img/Car1.png",
        fuel: 90,
        transmission: "Manual",
        people: 2,
        price: 99,
        originalPrice: null,
        isFavorite: false,
        section: "popular",
    },
    {
        name: "Nissan GT-R",
        type: "Sport",
        image: "./Landingpage/img/Car2.png",
        fuel: 80,
        transmission: "Manual",
        people: 2,
        price: 80,
        originalPrice: 100,
        isFavorite: false,
        section: "popular",
    },
    {
        name: "Roll-Royce",
        type: "Sedan",
        image: "./Landingpage/img/Car3.png",
        fuel: 70,
        transmission: "Manual",
        people: 4,
        price: 96,
        originalPrice: null,
        isFavorite: false,
        section: "popular",
    },
    {
        name: "Nissan GT-R",
        type: "Sport",
        image: "./Landingpage/img/Car4.png",
        fuel: 80,
        transmission: "Manual",
        people: 2,
        price: 80,
        originalPrice: 100,
        isFavorite: false,
        section: "popular",
    }
];

let recommendationCars = [
    {
        name: "All New Rush",
        type: "SUV",
        image: "./Landingpage/img/Car5.png",
        fuel: 70,
        transmission: "Manual",
        people: 6,
        price: 72,
        originalPrice: 80,
        isFavorite: false,
        section: "recommendation",
    },
    {
        name: "CR - V",
        type: "SUV",
        image: "./Landingpage/img/Car6.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false,
        section: "recommendation",
    },
    {
        name: "All New Terios",
        type: "SUV",
        image: "./Landingpage/img/Car7.png",
        fuel: 90,
        transmission: "Manual",
        people: 6,
        price: 74,
        originalPrice: null,
        isFavorite: false,
        section: "recommendation",
    },
    {
        name: "CR - V",
        type: "SUV",
        image: "./Landingpage/img/Car8.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false,
        section: "recommendation",
    },
    {
        name: "MGZX Exclusive",
        type: "Hatchback",
        image: "./Landingpage/img/Car9.png",
        fuel: 70,
        transmission: "Manual",
        people: 4,
        price: 76,
        originalPrice: 80,
        isFavorite: false,
        section: "recommendation",
    },
    {
        name: "New MG ZS",
        type: "SUV",
        image: "./Landingpage/img/Car10.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false,
        section: "recommendation",
    },
    {
        name: "MG ZX Excite",
        type: "Hatchback",
        image: "./Landingpage/img/Car11.png",
        fuel: 90,
        transmission: "Manual",
        people: 4,
        price: 74,
        originalPrice: null,
        isFavorite: false,
        section: "recommendation",
    },
    {
        name: "New MG ZS",
        type: "SUV",
        image: "./Landingpage/img/Car12.png",
        fuel: 80,
        transmission: "Manual",
        people: 6,
        price: 80,
        originalPrice: null,
        isFavorite: false,
        section: "recommendation",
    }
];

// Function to create HTML for a card.
function createCarCard(car, index, arrayName) {
    const heartClass = car.isFavorite ? "fa-solid" : "fa-regular";
    const discount = car.originalPrice
        ? `<span class="discount">$${car.originalPrice.toFixed(2)}</span>`
        : "";

    return `
        <article class="car-card added" data-index="${index}" data-array="${arrayName}">
            <header class="card-top">
                <div>
                    <h4>${car.name}</h4>
                    <span>${car.type}</span>
                </div>
                <i class="${heartClass} fa-heart favorite-icon"></i>
            </header>
            <div class="car-image">
                <img src="${car.image || './Landingpage/img/default-img.jpg'}" alt="${car.name}" class="image-car">
            </div>
            <div class="card-specs">
                <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel}L</span>
                <span><i class="fa-solid fa-car"></i> ${car.transmission}</span>
                <span><i class="fa-solid fa-user-group"></i> ${car.people} People</span>
            </div>
            <footer class="card-bottom">
                <span>
                    $${car.price.toFixed(2)}
                    <span class="secondary-text">/ day</span>
                    ${discount}
                </span>
                <button class="rent-btn">Rent Now</button>
            </footer>
        </article>
    `;
};

// Render cars in a section.
function renderCars(containerId, cars, arrayName) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = cars
        .map((car, index) => createCarCard(car, index, arrayName))
        .join('');
};

// Heart function (favorite).
function handleFavoriteClick(event) {
    const icon = event.target.closest(".favorite-icon");
    if (!icon) return;

    const card = icon.closest(".car-card");
    const index = parseInt(card.dataset.index);
    const arrayName = card.dataset.array;

    let carsArray = arrayName === "popular" ? popularCars : recommendationCars;

    if (index >= 0 && index < carsArray.length) {
        carsArray[index].isFavorite = !carsArray[index].isFavorite;
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("red-color");
    }
};

// Basic functionality of the Rent Now button
function handleRentClick(event) {
    const button = event.target.closest(".rent-btn");
    if (!button) return;

    const carName = button.closest(".car-card").querySelector("h4").textContent;
    alert(`¡Estás rentando el ${carName}!`);
};

/* Cargar autos nuevos desde localStorage */
function cargarAutosNuevos() {
    const json = localStorage.getItem('misAutosNuevos');
    if (!json) return;

    try {
        const nuevos = JSON.parse(json);
        nuevos.forEach(car => {
            // Normalizamos section a minúsculas
            const section = (car.section || '').toLowerCase().trim();

            if (section === 'popular') {
                popularCars.push({
                    ...car,
                    fuel: car.fuel || car.liters || '80',
                    transmission: car.transmission || 'Manual',
                    image: car.image || car.imgLink || './Landingpage/img/default-car.jpg',
                    section: 'popular'
                });
            } else if (section === 'recommendation') {
                recommendationCars.push({
                    ...car,
                    fuel: car.fuel || car.liters || '80',
                    transmission: car.transmission || 'Manual',
                    image: car.image || car.imgLink || './Landingpage/img/default-car.jpg',
                    section: 'recommendation'
                });
            }
        });
    } catch (err) {
        console.error("Error leyendo autos de localStorage", err);
    }
}

// Initialize when loading the page.
document.addEventListener("DOMContentLoaded", () => {
    // Cargar autos guardados
    cargarAutosNuevos();

    // Renderizar todo
    renderCars("popular-cars-grid", popularCars, "popular");
    renderCars("recommendation-cars-grid", recommendationCars, "recommendation");

    // Delegación de eventos (un solo listener)
    document.addEventListener("click", event => {
        handleFavoriteClick(event);
        handleRentClick(event);
    });

    // Exponer addCar globalmente para el onclick del botón del modal
    // window.addCar = addCar;
});