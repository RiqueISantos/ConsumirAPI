async function cadastroUsuario() {
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let userType = 1;
    let password = document.getElementById('password').value;
    let cpfCnpj = document.getElementById('cpf_cnpj').value;
    let termos = 1;
    let birthday = document.getElementById('birthday').value;

    let dados = {
        "name": nome,
        "email": email,
        "user_type_id": userType,
        "password": password,
        "cpf_cnpj": cpfCnpj,
        "terms": termos,
        "birthday": birthday
    }

    let api = await fetch("https://go-wash-api.onrender.com/api/user",{
        method: "POST",
        body:JSON.stringify(dados),
        headers: {
                'Content-Type': 'application/json'
        } 
    });

    let responseData =  await api.json()

    if (api.ok){
        console.log(responseData);
        alert(`${responseData['data']}`)
        return
    } else {
        if (responseData['data']['errors'].password) {
            alert('A senha deve ter 6 caracteres ou mais')
        } 
        if (responseData['data']['errors'].email) {
            alert('O email ja foi utilizado!')
        }

        if (responseData['data']['errors'].cpf_cnpj == null) {
            alert('O CPF/CNPJ está inválido! Verifique se a numeração do documento está correta. Ela também não deve conter pontuações.')
        } else {
            alert('O CPF/CNPJ já foi cadastrado!')
        }    
    }

    console.log(responseData)

}


const thumbPizza = document.querySelectorAll('.pizza-small');
const mainImg = document.querySelector('.main-img');
const pizzaTitle = document.getElementById('title');
const pizzaDescription = document.getElementById('description-p');
const price = document.getElementById('price');

thumbPizza.forEach(img => {
    img.addEventListener('click', () =>{
        const newSrc = img.getAttribute('data-big');
        const newTitle = img.getAttribute('data-title');
        const newDesc = img.getAttribute('data-description');
        const priceSelect = img.getAttribute('data-price');
        
        mainImg.src = newSrc;
        pizzaTitle.textContent = newTitle;
        pizzaDescription.innerHTML = newDesc;
        price.textContent = priceSelect;
    })
})

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("logado") === "true") {
      document.getElementById("header").innerHTML = `
        <nav>
            <img src="../img/chef.png" alt="Logo" id="logo">
            <ul id="navbar">
                <li><a href="../html/menu.html">Menu</a></li>
                <li><a href="sobre.html">About us</a></li>
                <li><a href="index.html" onclick="logout()"><i class="fas fa-user"></i></a></li>
            </ul>
        </nav>
      `;

      
    }
});

function logout(){
    localStorage.removeItem("logado");
    window.location.href = "../html/index.html";
    alert("Deslogado com sucesso!")
}