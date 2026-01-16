document.addEventListener('DOMContentLoaded', () => {
    
    // 1. --- LÓGICA DE NAVEGACIÓN ---
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            if (!pageId) return;

            navItems.forEach(i => i.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            
            item.classList.add('active');
            const targetPage = document.getElementById(pageId);
            if (targetPage) targetPage.classList.add('active');
        });
    });

    // 2. --- TABLA DE ANALÍTICAS ---
    const initialCars = [
        { id: 1, name: "Koenigsegg", type: "Sport", liters: 90, people: 2, price: 99, section: "Popular" },
        { id: 2, name: "Nissan GT-R", type: "Sport", liters: 80, people: 2, price: 80, section: "Popular" }
    ];

    const tbody = document.getElementById("tbody");

    function renderTable() {
        if (!tbody) return;
        const localCars = JSON.parse(localStorage.getItem('misAutosNuevos')) || [];
        const allCars = [...initialCars, ...localCars];

        tbody.innerHTML = allCars.map((car, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${car.name}</td>
                <td>${car.type}</td>
                <td>${car.people}</td>
                <td>Manual</td>
                <td>${car.liters}L</td>
                <td class="price">$${car.price}.00</td>
                <td class="${car.section.toLowerCase()}">${car.section}</td>
            </tr>
        `).join('');
    }

    renderTable();

    // 3. --- LÓGICA DEL FORMULARIO CON IMAGEN (Punto Clave) ---
    const productForm = document.getElementById('form-producto');
    
    if (productForm) {
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtenemos el archivo de imagen
            const imageInput = document.getElementById('p-image');
            const imageFile = imageInput.files[0];

            if (!imageFile) {
                alert("Por favor, selecciona una imagen");
                return;
            }

            const reader = new FileReader();

            // Esto se ejecuta cuando el navegador termina de leer la imagen
            reader.onload = function(event) {
                const base64Image = event.target.result;

                const newCar = {
                    id: Date.now(),
                    name: document.getElementById('p-name').value,
                    type: document.getElementById('p-type').value,
                    price: parseFloat(document.getElementById('p-price').value),
                    liters: document.getElementById('p-liters').value,
                    people: document.getElementById('p-people').value,
                    section: document.getElementById('p-section').value,
                    imgLink: base64Image, // Imagen real convertida a texto
                    isFavorite: false,
                    manual: true
                };

                const localCars = JSON.parse(localStorage.getItem('misAutosNuevos')) || [];
                localCars.push(newCar);
                localStorage.setItem('misAutosNuevos', JSON.stringify(localCars));

                alert("¡Vehículo publicado con éxito!");
                productForm.reset();
                renderTable(); // Actualiza la tabla del dashboard
            };

            // Iniciamos la lectura del archivo
            reader.readAsDataURL(imageFile);
        });
    }
});