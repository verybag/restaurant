function buildItem(dish, ingredients){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const dishName = document.createElement('h2');
    dishName.textContent = dish;

    const dishDesc = document.createElement('p');
    dishDesc.textContent = ingredients;

    menuItem.appendChild(dishName);
    menuItem.appendChild(dishDesc);

    return menuItem;
}


function buildMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        buildItem("Pepperoni Pizza", "Pepperoni, cheese, sauce")
    );

    menu.appendChild(
        buildItem("Double Pepperoni Pizza", "Twice as much pepperoni!")
    );

    return menu;
}



function renderMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(buildMenu());
}

export default renderMenu;