/* Navigation between pages */
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item'); // Select all menu items.
    const pages = document.querySelectorAll('.page'); // Select all content sections.
    // We assign a “click” to each menu item.
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(i => i.classList.remove('active')); // Remove the “active” class from ALL menu items.
            pages.forEach(p => p.classList.remove('active')); // Remove the “active” class from ALL sections.
            item.classList.add('active'); // Mark the menu that was just clicked as active.
            
            // Lee el atributo y si lo  encuentra, la hace visible.
            const pageId = item.getAttribute('data-page');
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
});

/* Search in the cart table */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search'); // Search for the search field.
    const tableBody = document.getElementById('carTableBody'); // Search for the cart table body.

    // If the input or tbody is NOT found -> display warning and exit.
    if (!searchInput || !tableBody) {
        console.warn('No se encontró la acción requerida');
        return;
    }

    // Real-time search.
    searchInput.addEventListener('input', function() {
        // Gets the text that the user typed in the search field.
        const filter = this.value.toLowerCase().trim();

        // Goes through each row (<tr>) of the table.
        Array.from(tableBody.rows).forEach(row => {
            // If the row has fewer than 8 cells, hides it and moves on to the next row.
            if (row.cells.length < 8) {
                row.style.display = 'none';
                return;
            }

            // Take only the columns that interest us.
            const textsToSearch = [
                row.cells[1], // Model
                row.cells[2], // Type
                row.cells[3], // People
                row.cells[4], // Transmission
                row.cells[5], // Fuel
                row.cells[7]  // Section
            ].map(cell => cell?.textContent?.toLowerCase() || ''); // Convert each cell to lowercase text.

            // Check if at least one of those columns contains the text that the user wrote.
            const matches = textsToSearch.some(text => text.includes(filter));
            row.style.display = matches ? '' : 'none';
        });
    });
});