// Link to restaurant images (local files)
const restaurantArray = [
    "images/couqley.png",
    "images/koko-bay.png",
    "images/la-cantine.png",
    "images/mimi-kakushi.png",
    "images/mythos.png",
    "images/nola.png",
    "images/rumba.png",
    "images/tap-house.png"
];

// Connect to HTML
const restaurant = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomRestaurant(restaurantArray);

// Generate new selection on click
button.addEventListener("click", () => generateRandomRestaurant(restaurantArray));

// Function to display a random restaurant
function generateRandomRestaurant(array){
    let randomNum = Math.floor(Math.random() * array.length);
    restaurant.setAttribute("src", array[randomNum]);
}