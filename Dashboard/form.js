/* Initial list of cars. */
const initialCars = [
    { id: 1, name: "Koenigsegg", type: "Sport", liters: 90, people: 2, price: 99, section: "Popular" },
    { id: 2, name: "Nissan GT-R", type: "Sport", liters: 80, people: 2, price: 80, section: "Popular" },
    { id: 3, name: "CR - V", type: "SUV", liters: 80, people: 6, price: 80, section: "Recommendation" },
];

// Find where the cars will be displayed.
const tbody = document.getElementById("tbody");
const productForm = document.getElementById('form-producto');
const DEFAULT_IMAGE = "./Landingpage/img/default-car.jpg";

function renderTable() {
    if (!tbody) return;
    // Combine the initial cars with those added by the user.
    const savedCars = JSON.parse(localStorage.getItem('misAutosNuevos')) || [];
    const allCars = [...initialCars, ...savedCars];

    // Create the HTML for each row and place it inside the <tbody>.
    tbody.innerHTML = allCars.map((car, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${car.name || '—'}</td>
            <td>${car.type || '—'}</td>
            <td>${car.people || '—'}</td>
            <td> Manual </td>
            <td>${car.fuel || car.liters || '—'}L</td>
            <td class="price">$${Number(car.price || 0).toFixed(2)}</td>
            <td class="${(car.section || '').toLowerCase()}">${car.section || '—'}</td>
        </tr>
    `).join('');
};

// Find the form where new vehicles are added.
function guardarNuevoCarro(e) {
    e.preventDefault();

    const name        = document.getElementById('p-name')?.value.trim();
    const type        = document.getElementById('p-type')?.value.trim();
    const fuel        = document.getElementById('p-liters')?.value.trim() || document.getElementById('p-fuel')?.value.trim();
    const people      = document.getElementById('p-people')?.value.trim();
    const price       = parseFloat(document.getElementById('p-price')?.value) || 0;
    const section     = document.getElementById('p-section')?.value?.toLowerCase().trim() || 'popular' || 'recommendation';
    const imageInput  = document.getElementById('p-image');

    if (!name || price <= 0) {
        alert("Nombre y precio son obligatorios.");
        return;
    }

    if (!['popular', 'recommendation'].includes(section)) {
        alert("Sección inválida. Usa 'popular' o 'recommendation'.");
        return;
    }

    let imageValue = DEFAULT_IMAGE;

    function finalizarGuardado(imgData) {
        const newCar = {
            id: Date.now(),
            name,
            type: type || "SUV",
            fuel: fuel || "80",
            transmission: "Manual",
            people: people || "4",
            price,
            section,
            image: imgData,          // ← clave unificada: image
            imgLink: imgData,        // ← mantenemos compatibilidad temporal
            isFavorite: false,
            originalPrice: null
        };

        let autos = JSON.parse(localStorage.getItem('misAutosNuevos')) || [];
        autos.push(newCar);
        localStorage.setItem('misAutosNuevos', JSON.stringify(autos));

        alert("¡Vehículo publicado con éxito!");
        productForm.reset();
        renderTable();           // actualiza la tabla del dashboard
    }

    if (imageInput?.files?.[0]) {
        const reader = new FileReader();
        reader.onload = ev => finalizarGuardado(ev.target.result);
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        finalizarGuardado(imageValue);
    }
}

if (productForm) {
    productForm.addEventListener('submit', guardarNuevoCarro);
}

// Carga inicial de la tabla
renderTable();