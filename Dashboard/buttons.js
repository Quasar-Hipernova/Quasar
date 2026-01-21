/* Create an EventListener to view the details of a cart in the table. */
document.querySelector("tbody").addEventListener("click", e =>{
    // Check if the click was on a button with class .details-btn.
    const details = e.target.closest(".details-btn")
    if (details !== null){
        const arr = Array.from(details.parentElement.parentElement.children) // Convert the cells in the row into an array.
            // Display an alert message with the cart data.
            Swal.fire({
                title: "Registration Details",
                html: `
                    <td> Modelo: ${arr[1].textContent} </td> <br>
                    <td> Type: ${arr[2].textContent} </td> <br>
                    <td> People: ${arr[3].textContent} </td> <br>
                    <td> Transmission: ${arr[4].textContent} </td> <br>
                    <td> Fuel: ${arr[5].textContent} </td> <br>
                    <td class="price"> Price: ${arr[6].textContent} </td> <br>
                `,
                icon: "info" ,
                confirmButtonText: "Close" 
            });
    };
});

/* Create an EventListener to delete a row from the table. */
document.querySelector("tbody").addEventListener("click", function(e) {
    // Check if the click was on a button with class .delete-btn.
    const btn = e.target.closest(".delete-btn");
    if (!btn) return;

    const fila = btn.closest("tr");
    
    // Ask the user to confirm that they really want to delete.
    if (!confirm("Delete this record?")) return;

    fila.remove();
    
    // Display a message in the console.
    console.log("Record deleted");
});

/* Create an EventListener to edit a cart in the table */
document.querySelector("tbody").addEventListener("click", function(e) {
    // Check if the click was on a button with class .edit-btn.
    const btn = e.target.closest(".edit-btn");
    if (!btn) return;

    const fila = btn.closest("tr");
    // Ask the user to confirm they want to edit.
    if (!confirm("Edit this record?")) return;
});

