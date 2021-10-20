import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

//header

function buildHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = "Tony Pepperoni's"

    header.appendChild(restaurantName);
    
    header.appendChild(buildNav());

    return header;
}

//nav

function buildNav(){
    const nav = document.createElement("nav");

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('button-nav');
    homeBtn.setAttribute('id', 'home-button');
    homeBtn.textContent = "About me!";
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn);
        renderHome();
    })

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button-nav');
    menuBtn.setAttribute('id', 'menu-button');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn);
        renderMenu();
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button-nav');
    contactBtn.setAttribute('id', 'contact-button');
    contactBtn.textContent = "Contact me!";
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactBtn);
        renderContact();
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
};


//main

function buildMain(){
    const main = document.createElement("main");
    main.classList.add('main');
    main.setAttribute("id", "main");
    return main;
}


//footer
function buildFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    return footer;
}

const render = (() => {
    const content = document.getElementById('content');

    content.appendChild(buildHeader());
    content.appendChild(buildMain());
    content.appendChild(buildFooter());

    setActiveButton(document.querySelector(".button-nav"));
    renderHome();
});

export default render;