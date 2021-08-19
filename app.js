function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;

    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    //update Product Total

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //Calculate Sub Total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}



function calculateTotal() {
    let phoneTotal = getInputValue('phone') * 1219;
    let caseTotal = getInputValue('case') * 1100;
    let macbookTotal = getInputValue('macbook') * 1450;



    const subTotal = phoneTotal + caseTotal + macbookTotal;
    const tax = subTotal / 10;

    const totalPrice = subTotal + tax;

    //Update on HTML
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}





//Phone Plus Button Handle Events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})

//Phone Minus Button Handle Events
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

//Case Plus Button Handle Events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 1100, true);
})

//Case Minus Button Handle Events
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 1100, false);

})

//Macbook Plus Button Handle Events
document.getElementById('macbook-plus').addEventListener('click', function () {
    updateProductNumber('macbook', 1450, true);
})

//Macbook Minus Button Handle Events
document.getElementById('macbook-minus').addEventListener('click', function () {
    updateProductNumber('macbook', 1450, false);

})


//Remove Item and Update Checkout Totals Again
let phoneTotal = getInputValue('phone') * 1219;
let caseTotal = getInputValue('case') * 1100;
let macbookTotal = getInputValue('macbook') * 1450;
function removeItem(item) {

    const product = document.getElementById(item + '-item');
    product.style.display = 'none';


    if (item == 'phone') {
        phoneTotal = 0;
    }
    else if (item == 'case') {
        caseTotal = 0;
    }
    else if (item == 'macbook') {
        macbookTotal = 0;
    }

    const subTotal = phoneTotal + caseTotal + macbookTotal;
    const tax = subTotal / 10;

    const totalPrice = subTotal + tax;

    //Update on HTML
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

//Phone Input Key
document.getElementById('phone-number').addEventListener('keyup', function (event) {

    const productTotal = document.getElementById('phone-total');
    productTotal.innerText = (event.target.value) * 1219;
    calculateTotal()
})

//Case Input Key
document.getElementById('case-number').addEventListener('keyup', function (event) {

    const productTotal = document.getElementById('case-total');
    productTotal.innerText = (event.target.value) * 1100;
    calculateTotal()
})

//Macbook Input Key
document.getElementById('macbook-number').addEventListener('keyup', function (event) {
    let userInput = event.target.value;
    const productTotal = document.getElementById('macbook-total');
    productTotal.innerText = (userInput) * 1450;
    calculateTotal()
})




//Hidding Checkout if all the products are removed

// const phoneCart = document.getElementById('phone-item');


// const caseCart = document.getElementById('case-item');

// const macCart = document.getElementById('macbook-item');



// const cartItems = document.getElementsByClassName('cart-item');

// for (items of cartItems) {
//     console.log(items);
// }