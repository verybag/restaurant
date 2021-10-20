function buildHome(){
    const about = document.createElement('div');
    about.classList.add('about');    

    const kitchenImg = document.createElement('img');
    kitchenImg.src = './images/kitchen.jpg'

    const para = document.createElement('p');
    para.textContent = "Tony Pepperoni's! Made fresh in our kitchen since 2003 BC"
    about.appendChild(kitchenImg);
    about.appendChild(para);

    return about;

}

function renderHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(buildHome());
}

export default renderHome;