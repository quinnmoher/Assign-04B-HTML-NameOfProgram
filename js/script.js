function calculateTotal() {
    // Get selected size and toppings
    const size = document.getElementById("size").value; // Get selected size from dropdown
    const toppings = document.querySelectorAll('input[name="topping"]:checked'); // Get all checked toppings

    // Calculate total based on size and toppings
    let total = 0; // Initialize total cost
    let toppingsList = ""; // Initialize empty string for toppings list

    if (size === "tiny") {
        total += 4.99; // Add price for tiny size
    } else if (size === "averageJoe") {
        total += 6.99; // Add price for average Joe size
    } else if (size === "freaky") {
        total += 8.99; // Add price for freaky size
    } else if (size === "colossal") {
        total += 15.99; // Add price for colossal size
        // Implement COLOSSAL CHALLENGE logic here
    }

    // Add price for each selected topping and build toppings list
    toppings.forEach(topping => {
        if (topping.value === "blueberries") {
            total += 1.20; // Add price for blueberries topping
            toppingsList += "Blueberries, ";
        } else if (topping.value === "nuttyButterCups") {
            total += 1.20; // Add price for Nutty Butter Cups topping
            toppingsList += "Nutty Butter Cups, ";
        } else if (topping.value === "cookieDough") {
            total += 1.20; // Add price for Cookie Dough topping
            toppingsList += "Cookie Dough, ";
        } else if (topping.value === "whippedCream") {
            total += 0.80; // Add price for Whipped Cream topping
            toppingsList += "Whipped Cream, ";
        } else if (topping.value === "rainbowSprinkles") {
            total += 1.20; // Add price for Rainbow Sprinkles topping
            toppingsList += "Rainbow Sprinkles, ";
        }
        // Add other topping prices and update toppings list here
    });

    // Remove last comma from toppings list if it's not empty
    if (toppingsList !== "") {
        toppingsList = toppingsList.slice(0, -2);
    }

    // Calculate tax (14%)
    const tax = total * 0.14;
    total += tax; // Add tax to total

    // Display breakdown of the order
    const orderBreakdown = `Size: ${size}\nToppings: ${toppingsList}\nTax: $${tax.toFixed(2)}`;
    alert(`Order Breakdown:\n${orderBreakdown}`);

    // Display total cost and update ice cream image
    const orderTotalElement = document.getElementById("orderTotal"); // Get element to display total cost
    orderTotalElement.textContent = `Your total: $${total.toFixed(2)}`; // Update total cost text

}
