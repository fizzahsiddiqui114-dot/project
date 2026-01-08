for (let product of products) {
    document.getElementById("select1").innerHTML += `
        <option value="${product.id}">${product.name}</option>
    `;
    document.getElementById("select2").innerHTML += `
        <option value="${product.id}">${product.name}</option>
    `;
}

function item1(a) {
    let select2 = document.getElementById("select2").value;

    if (a != select2) {
        document.getElementById("img1").src = products[a - 1].cardImg;
        document.getElementById("price1").innerHTML = products[a - 1].price;
        document.getElementById("description1").innerHTML = products[a - 1].description;
        document.getElementById("brand1").innerHTML = products[a - 1].name;

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = "";
        document.getElementById("price1").innerHTML = "";
        document.getElementById("description1").innerHTML = "";
        document.getElementById("brand1").innerHTML = "";
    }
}

function item2(a) {
    let select1 = document.getElementById("select1").value;

    if (a != select1) {
        document.getElementById("img2").src = products[a - 1].cardImg;
        document.getElementById("price2").innerHTML = products[a - 1].price;
        document.getElementById("description2").innerHTML = products[a - 1].description;
        document.getElementById("brand2").innerHTML = products[a - 1].name;

    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = "";
        document.getElementById("price2").innerHTML = "";
        document.getElementById("description2").innerHTML = "";
        document.getElementById("brand2").innerHTML = "";
    }
}
