document.addEventListener('DOMContentLoaded', () => {
    /* Navegación entre páginas */
    const navItems = document.querySelectorAll('.nav-item'); // Excluye el Log Out 
    const pages = document.querySelectorAll('.page');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(i => i.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            item.classList.add('active');
            
            const pageId = item.getAttribute('data-page');
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
});

/* Búsqueda en la tabla de carros */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const tableBody = document.getElementById('carTableBody');

    if (!searchInput || !tableBody) {
        console.warn('No se encontró la acción requerida');
        return;
    }

    // Búsqueda en tiempo real
    searchInput.addEventListener('input', function() {
        const filter = this.value.toLowerCase().trim();

        Array.from(tableBody.rows).forEach(row => {
            if (row.cells.length < 8) {
                row.style.display = 'none';
                return;
            }

            const textsToSearch = [
                row.cells[1], // Modelo
                row.cells[2], // Tipo
                row.cells[3], // Personas
                row.cells[4], // Transmisión
                row.cells[5], // Combustible
                row.cells[7]  // Sección
            ].map(cell => cell?.textContent?.toLowerCase() || '');

            const matches = textsToSearch.some(text => text.includes(filter));
            row.style.display = matches ? '' : 'none';
        });
    });
});