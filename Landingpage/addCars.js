/* ================================
   CARGA INICIAL (cartas quemadas)
================================ */

const defaultCars = [
    {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        image: "../Landingpage/img/Car1.png",
        fuel: 90,
        transmission: "Manual",
        people: 2,
        price: 99,
        isFavorite: false
    },
    {
        id: 2,
        name: "Nissan GT-R",
        type: "Sport",
        image: "../Landingpage/img/Car2.png",
        fuel: 80,
        transmission: "Manual",
        people: 2,
        price: 80,
        isFavorite: false
    },
    {
        id: 3,
        name: "Roll-Royce",
        type: "Sedan",
        image: "../Landingpage/img/Car3.png",
        fuel: 70,
        transmission: "Manual",
        people: 4,
        price: 96,
        isFavorite: false
    },
    {
        id: 4,
        name: "All New Rush",
        type: "SUV",
        image: "../Landingpage/img/Car5.png",
        fuel: 70,
        transmission: "Manual",
        people: 6,
        price: 72,
        isFavorite: false
    }
];

/* ================================
   ESTADO GLOBAL
================================ */

let cars = JSON.parse(localStorage.getItem("cars"));

if (!cars || cars.length === 0) {
    cars = defaultCars;
    localStorage.setItem("cars", JSON.stringify(cars));
}

/* ================================
   AGREGAR AUTO
================================ */

function addCar() {
    const name = document.getElementById("name").value.trim();
    const type = document.getElementById("type").value.trim();
    const fuel = document.getElementById("fuel").value.trim();
    const transmission = document.getElementById("transmission").value.trim();
    const people = document.getElementById("people").value;
    const price = document.getElementById("price").value;
    const imageInput = document.getElementById("image");

    if (!name || !price || !imageInput.files[0]) {
        alert("Nombre, precio e imagen son obligatorios");
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        const car = {
            id: Date.now(),
            name,
            type,
            fuel,
            transmission,
            people,
            price: Number(price),
            image: reader.result,
            isFavorite: false
        };

        cars.push(car);
        localStorage.setItem("cars", JSON.stringify(cars));
        renderCars();
        clearInputs();

        const modal = bootstrap.Modal.getInstance(
            document.getElementById("addCarModal")
        );
        modal.hide();
    };

    reader.readAsDataURL(imageInput.files[0]);
}

/* ================================
   FAVORITOS
================================ */

function toggleFavorite(id) {
    const car = cars.find(c => c.id === id);
    if (!car) return;

    car.isFavorite = !car.isFavorite;
    localStorage.setItem("cars", JSON.stringify(cars));
    renderCars();
}

/* ================================
   RENDER DE TARJETAS
================================ */

function renderCars() {
    const container = document.getElementById("cardsContainer");
    if (!container) return;

    container.innerHTML = "";

    cars.forEach(car => {
        const heartClass = car.isFavorite ? "fa-solid" : "fa-regular";

        container.innerHTML += `
        <article class="car-card added">
            <header class="card-top">
                <div>
                    <h4>${car.name}</h4>
                    <span>${car.type}</span>
                </div>
                <i class="${heartClass} fa-heart favorite-icon"
                   onclick="toggleFavorite(${car.id})"></i>
            </header>

            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" class="image-car">
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
                </span>
                <button class="rent-btn">Rent Now</button>
            </footer>
        </article>`;
    });
}


/* ================================
   LIMPIAR FORM
================================ */

function clearInputs() {
    document.querySelectorAll("#addCarModal input").forEach(i => i.value = "");
}

/* ================================
   INIT
================================ */

renderCars();

document.addEventListener("click", event => {
    handleRentClick(event);
    function handleRentClick(event) {
    const button = event.target.closest(".rent-btn");
    if (!button) return;

    const carName = button
        .closest(".car-card")
        .querySelector("h4").textContent;

    alert(`¡Estás rentando el ${carName}!`);
}

});

