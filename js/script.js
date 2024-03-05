const listaUsuarios = document.getElementById("listaUsuarios");
const divUsers = document.createElement("div");

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud al servidor");
      }
      return response.json();
    })
    .then((data) => {
      getUsers(data); // aqui va la funcion con los usuarios
    })
    .catch((error) => {
      console.error("La has liado, no te saca los datos de la API!!", error);
    });
}

// necesito foto , nombre, username, telefono, email, compañia y direccion casi NÁ //
function getUsers(element) {
  showUsers(element);
}

// Función para mostrar los usuarios DOM

function showUsers(users) {
  users.forEach(({ name, username, phone, email, company, address, id }) => {
    //variables para contener la info en el DOM

    const divUserInfo = document.createElement("div");
    divUserInfo.setAttribute("id", "divUserInfo");
    const divUserCompany = document.createElement("div");
    divUserCompany.setAttribute("id", "divUserCompany");
    const divLi = document.createElement("li");

    //imagen

    const imageUser = document.createElement("img");
    imageUser.src = `./assets/img/${id}.jpeg`;
    divLi.appendChild(imageUser);

    // contenedores del usuario y compañia (despues de la imagen)

    divLi.appendChild(divUserInfo);
    divLi.appendChild(divUserCompany);

    // name

    const nameUser = document.createElement("h5");
    const nameText = document.createElement("span");
    nameText.innerText = "Name: ";
    const nameValue = document.createTextNode(name);
    nameUser.appendChild(nameText);
    nameUser.appendChild(nameValue);
    divUserInfo.appendChild(nameUser);

    //// age

    const ageUser = document.createElement("h5");
    const ageText = document.createElement("span");
    ageText.innerText = "Age: ";
    const ageValue = document.createTextNode(
      Math.floor(Math.random() * (67 - 18 + 7))
    );
    ageUser.appendChild(ageText);
    ageUser.appendChild(ageValue);
    divUserInfo.appendChild(ageUser);

    //// username
    const usernameUser = document.createElement("h5");
    const usernameText = document.createElement("span");
    usernameText.innerText = "Username: ";
    const usernameValue = document.createTextNode(username);
    usernameUser.appendChild(usernameText);
    usernameUser.appendChild(usernameValue);
    divUserInfo.appendChild(usernameUser);

    // // phone
    const phoneUser = document.createElement("h5");
    const phoneText = document.createElement("span");
    phoneText.innerText = "Phone: ";
    const phoneValue = document.createTextNode(phone);
    phoneUser.appendChild(phoneText);
    phoneUser.appendChild(phoneValue);
    divUserInfo.appendChild(phoneUser);

    // // email
    const emailUser = document.createElement("h5");
    const emailText = document.createElement("span");
    emailText.innerText = "Email: ";
    const emailValue = document.createTextNode(email);
    emailUser.appendChild(emailText);
    emailUser.appendChild(emailValue);
    divUserInfo.appendChild(emailUser);

    // // compañia

    const companyUser = document.createElement("h5");
    const companyText = document.createElement("span");
    companyText.innerText = "Company: ";
    const companyValue = document.createTextNode(company.name);
    companyUser.appendChild(companyText);
    companyUser.appendChild(companyValue);
    divUserCompany.appendChild(companyUser);

    //// direccion

    const addressUser = document.createElement("h5");
    const addressText = document.createElement("span");
    addressText.innerText = "Address: ";
    const addressValue = document.createTextNode(
      `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`
    );
    addressUser.appendChild(addressText);
    addressUser.appendChild(addressValue);
    divUserCompany.appendChild(addressUser);

    listaUsuarios.appendChild(divLi);
  });
}

fetchUsers();
