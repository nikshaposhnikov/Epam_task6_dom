var menu = [];
var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"
    , "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg"];
let buttonList = document.createElement("input",);
var ulList = document.createElement('ul');
var divTable = document.createElement('div');

buttonList.type = "button";
buttonList.value = "Вывести списком";
let counterList = 0;
buttonList.onclick = () => {
    if (counterTable != 0) {
        while (divTable.hasChildNodes()) {
            divTable.removeChild(divTable.firstChild);
        }
        counterTable = 0;
    }
    if (counterList == 0) {
        counterList += 1;
        drawList();
    }
};
let counterTable = 0;
let buttonTable = document.createElement("input",);
buttonTable.type = "button";
buttonTable.value = "Вывести сеткой";
buttonTable.onclick = () => {
    if (counterList != 0) {
        while (ulList.hasChildNodes()) {
            ulList.removeChild(ulList.firstChild);
        }
        counterList = 0;
    }
    if (counterTable == 0) {
        counterTable += 1;
        drawTable();
    }
};

content.appendChild(buttonList);
content.appendChild(buttonTable);
let pizza = new Pizza("Margarita", "Cheese,sause", 250, 10);
menu.push(pizza);
let pizza2 = new Pizza("Bomba", "Cheese,bacon,mushrooms,Cheese,bacon,mushrooms,", 250, 10);
menu.push(pizza2);
let pizza3 = new Pizza("Tasty", "Cheese,sause", 250, 40);
menu.push(pizza3);
let pizza4 = new Pizza("Full", "Cheese,bacon", 250, 10);
menu.push(pizza4);
let pizza5 = new Pizza("Origin", "Cheese,sause", 250, 10);
menu.push(pizza5);
let pizza6 = new Pizza("Best", "Cheese,sause", 250, 40);
menu.push(pizza6);
let pizza7 = new Pizza("pizzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "Cheese,sause", 250, 10);
menu.push(pizza7);
let pizza8 = new Pizza("Cool", "Cheese,sause", 250, 10);
menu.push(pizza8);
let pizza9 = new Pizza("Mister", "Cheese,sause", 250, 40);
menu.push(pizza9);
let pizza10 = new Pizza("Miss", "Cheese,sause", 250, 10);
menu.push(pizza10);
let pizza11 = new Pizza("for girls", "Cheese,sause", 250, 10);
menu.push(pizza11);
let pizza12 = new Pizza("for boys", "Cheese,sause", 250, 40);
menu.push(pizza12);
let pizza13 = new Pizza("soccer", "Cheese,sause", 250, 10);
menu.push(pizza13);
let pizza14 = new Pizza("goal", "Cheese,sause", 250, 10);
menu.push(pizza14);
let pizza15 = new Pizza("Keeper", "Cheese,sause", 250, 40);
menu.push(pizza15);
let pizza16 = new Pizza("Exist", "Cheese,sause", 250, 40);
menu.push(pizza16);

function Pizza(name, composition, calories, price) {
    this.name = name;
    this.composition = composition;
    this.calories = calories;
    this.price = price;
}


function drawList() {
    document.body.appendChild(ulList);
    for (let i = 0; i < menu.length; i++) {
        let div=document.createElement('div');
        let li = document.createElement('li');
        let logo = document.createElement('img');
        logo.src = "img/logo.png";
        logo.style.width = '30px';
        logo.style.height = '30px';
        li.style.listStyleType = "none";
        li.style.marginBottom = '10px';
        div.style.display='flex';
        div.style.alignItems='center';
        div.appendChild(logo);
        div.appendChild(document.createTextNode(menu[i].name + ', ' + menu[i].price + 'hrn'));
        li.appendChild(div);
        ulList.appendChild(li);
    }
}


//drawTable();
function drawTable() {
    divTable.style.display = "flex";
    divTable.style.flexWrap = "wrap";
    document.body.appendChild(divTable);
    for (let i = 0; i < menu.length; i++) {
        let card = document.createElement('div');
        let logo = document.createElement('img');
        let name = document.createElement('div');
        let composition = document.createElement('div');
        let calories = document.createElement('div');
        let price = document.createElement('div');
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.width = '30%';
        card.style.margin = '10px';
        card.style.paddingLeft = '5px';
        card.style.justifyContent = 'space-around';
        logo.src = images[i];
        logo.style.width = '40%';
        logo.style.margin = 'auto';
        logo.style.paddingTop = '5px';
        card.style.border = '2px solid black';
        composition.style.display = "flex";

        card.appendChild(logo);
        name.appendChild(document.createTextNode("Название: " + menu[i].name));
        composition.appendChild(document.createTextNode("Состав: " + menu[i].composition));
        calories.appendChild(document.createTextNode("Калории: " + menu[i].calories));
        price.appendChild(document.createTextNode("Цена: " + menu[i].price + "грн"));
        card.appendChild(name);
        card.appendChild(composition);
        card.appendChild(calories);
        card.appendChild(price);
        divTable.appendChild(card);
    }
}
