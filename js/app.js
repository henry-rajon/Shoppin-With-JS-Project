
const cartArray = [];

function displayCart(cartArr) {
    let totalPrice = 0;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    for (let i = 0; i < cartArr.length; i++){
        const name = cartArr[i].productName;
        const price = parseFloat(cartArr[i].productPrice);
        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i+1}</th>
            <td>${name}</td>
            <td>${price}</td>
        `;
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
            <th></th>
            <td>Total</td>
            <td>${totalPrice}</td>
        `;
    tableBody.appendChild(tr);
}

function addToCart(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const cartObj = {
        productName: productName,
        productPrice: productPrice
    };
    cartArray.push(cartObj);
    const productNumber = cartArray.length;
    document.getElementById('product-add-number').innerText = productNumber;
    displayCart(cartArray);
}