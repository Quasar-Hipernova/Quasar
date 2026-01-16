const cars = [
    {
        id: 1, 
        name: "Koenigsegg",
        type: "Sport",
        imgLink: "./assets/cars/car_koenigsegg.png",
        liters: 90,
        manual : true,
        people: 2,
        price: 99
    }, 
    {
        isFavorite: true, 
        name: "Koenigsegg",
        type: "Sport",
        imgLink: "./assets/cars/car_koenigsegg.png",
        liters: 90,
        manual : true,
        people: 2,
        price: 99
    }, 
    {
        isFavorite: false, 
        name: "Koenigsegg",
        type: "Sport",
        imgLink: "./assets/cars/car_koenigsegg.png",
        liters: 90,
        manual : true,
        people: 2,
        price: 99
    }, 
    {
        isFavorite: true, 
        name: "Nissan",
        type: "Sport",
        imgLink: "./assets/cars/car_nissangt-r.png",
        liters: 80,
        manual : true,
        people: 2,
        price: 80,
        TotalPrice: 100
    }   
]
const tbody = document.querySelector("#tbody");

cars.forEach(function(car){
    tbody.innerHTML += `
    <tr>
        <td>${car.id}</td>
        <td>${car.name}</td>
        <td>${car.type}</td>
        <td>2</td>
        <td>Manual</td>
        <td>90L</td>
        <td class="price">$99.00</td>
        <td class="popular">Popular</td>
    </tr>
    `
})

const carName = "Koenigsegg";

let car = cars.find(function(car){
    return car.name === carName
})

console.log(car)

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
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