//  Side Nav BAR


var menuicon = document.getElementById("menu-icon")
var navbarmenu = document.getElementById("navbar-menu")
var menuclose = document.getElementById("menu-close")

menuicon.addEventListener("click", function(){

    navbarmenu.style.left = "0"
})

menuclose.addEventListener("click", function(){

    navbarmenu.style.left = "-50%"
})

// OFFER BAR

var offerclose = document.getElementById("offer-close")
var offerbar = document.getElementById("offer-bar")

offerclose.addEventListener("click",function(){
    offerbar.style.display="none"
})



// SEARCH BAR 
var searchbar = document.getElementById("searchbar");
var productsrow = document.querySelector(".products-row");
var productlist = productsrow.querySelectorAll(".new-arrivals-card"); // Get all product cards

searchbar.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase(); // Get the search input value

    // Loop through each product card
    productlist.forEach(function(product) {
        var productName = product.querySelector("h3"); // Change this to match your actual structure

        // Check if the productName element exists
        if (productName) {
            // Check if the entered value matches the product name
            if (productName.textContent.toUpperCase().indexOf(enteredValue) < 0) {
                product.style.display = "none"; // Hide the product
            } else {
                product.style.display = "block"; // Show the product
            }
        }
    });
});

// CHECK-BOX SEARCH

document.addEventListener('click', () => {
    const filters = document.getElementsByName("intval")
    const products = document.querySelectorAll('.new-arrivals-card');

    // Function to filter products based on selected checkboxes
    const filterProducts = () => {
        // Get selected filter values
        const selectedTags = Array.from(filters)
            .filter(input => input.checked)
            .map(input => input.value);

        products.forEach(product => {
            const productTags = product.getAttribute('data-tags').split(', ');

            // Check if the product matches any of the selected tags
            const matches = selectedTags.length === 0 || selectedTags.some(tag => productTags.includes(tag));

            // Show or hide the product based on the matches
            product.style.display = matches ? 'block' : 'none';
        });
    };

    // Add event listeners to each filter checkbox
    filters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
});

