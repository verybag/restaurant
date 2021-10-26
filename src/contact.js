function buildContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNum = document.createElement('p');
    phoneNum.textContent = "PHONE: (555) 555-5555"

    const address = document.createElement('p');
    address.textContent = "100 Pizza Blvd, Pizza Town"

    const pic = document.createElement('img');
    pic.src = 'images/contact.jpeg';

    contact.appendChild(phoneNum);
    contact.appendChild(address);
    contact.appendChild(pic);

    return contact;
}

function renderContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(buildContact())
  }
  
  export default renderContact;