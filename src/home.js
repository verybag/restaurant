function buildHome(){
    const about = document.createElement('div');
    about.classList.add('about');    

    const kitchenImg = document.createElement('img');
    kitchenImg.src = './images/kitchen.jpeg'

    const para = document.createElement('p');
    para.textContent = "Tony Pepperoni's! Pizza fresh from our kitchen to your home!"
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