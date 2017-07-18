
var total = 0;
var itemPrice = 0;
var parent = '';

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, price) {
    itemPrice = price;
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(itemPrice, "###22");
    parent = ev.target.parentElement.id;
}

function drop(ev) {
    var taxPrice = 0;
    if(parent === ev.target.id) {
        ev.preventDefault();
        return;
    }
    else if(ev.target.id == "div1") {
        taxPrice = itemPrice + (12.5*itemPrice)/100;
    	total += taxPrice;
    }else if(ev.target.id !== "div2") {
        ev.preventDefault();
        return;
    }else
        total -= itemPrice + (12.5*itemPrice)/100;

    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("totalValue").value = total;
    document.getElementById("tax").value = taxPrice;
}

function dragEnd(ev, itemPrice) {
    if(total == 0) {
        itemPrice = 0;
    }
    document.getElementById('price').value = itemPrice;
}
