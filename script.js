function showMessage() {
    let drink = document.getElementById("drinks").value;
    let drinkQty = document.getElementById("drinkQty").value;

    let food = document.getElementById("foods").value;
    let foodQty = document.getElementById("foodQty").value;

    let total = (drink * drinkQty) + (food * foodQty);

    if (drinkQty == 0 && foodQty == 0) {
        alert("Invalid purchase! Please enter a quantity.");
    } else {
        document.getElementById("totalText").innerText = "Total: ₱" + total;
        alert("Thank you for your purchase!\nYour total is ₱" + total);
    }
}
