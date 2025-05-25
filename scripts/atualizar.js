function abrirPopUp(){
    //Botão de atualizar
    const attAddress = document.querySelectorAll(".address-att");
    const popUp = document.getElementById("pop-up");

    attAddress.forEach(att =>{
        att.addEventListener("click", () =>{
            popUp.style.display = "flex";
        })
    })

    //Botão de deletar
    const addressDelete = document.querySelectorAll(".address-delete");
    const popUpDelete = document.getElementById("pop-up-delete");

    addressDelete.forEach(del =>{
        del.addEventListener("click", () =>{
            popUpDelete.style.display = "flex";
        })
    })


}

function fecharModal(){
    //Botão de atualizar
    const popUp = document.getElementById("pop-up");
    const address = document.querySelector(".att-card");
    const form = document.getElementById("container-id");
    const addressId = document.getElementById("id-address");

    popUp.addEventListener("click", (event) =>{
        if (event.target === popUp){
            popUp.style.display = "none";
            address.style.display = "none";
            form.style.display = "flex";
            addressId.value = "";
        }
    })


    //Botão de deletar
    const popUpDelete = document.getElementById("pop-up-delete");
    const deleteContainer = document.getElementById("delete-id-container");
    const deleteCard = document.querySelector(".delete-card");
    const deleteAddress = document.getElementById("delete-address");

    popUpDelete.addEventListener("click", (event) =>{
        if (event.target === popUpDelete){
            popUpDelete.style.display = "none";
            deleteCard.style.display = "none";
            deleteContainer.style.display = "flex";
            deleteAddress.value = "";
        }
    })

}

const form = document.getElementById("container-id");


form.addEventListener("submit", async (event) =>{
    event.preventDefault();

    const addressId = document.getElementById("id-address");
    const addressCard = document.querySelector(".att-card");

    const response = await searchAddress();

    if(response && addressId.value == response.data.id){
       
        addressCard.style.display = "flex";
        const title = document.getElementById("my-title");
        const cep = document.getElementById("my-cep");
        const address = document.getElementById("my-address");
        const number = document.getElementById("my-number");
        const complement = document.getElementById("my-complement");

        title.value = response.data.title;
        cep.value = response.data.cep;
        address.value = response.data.address;
        number.value = response.data.number;
        complement.value = response.data.complement;

        form.style.display = "none";
        return   
    }

    alert("Não existe um endereço com esse ID!");
    

})

async function searchAddress(){
    const myId = document.getElementById("id-address");

    let api = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${myId.value}`,{
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })

    let response = await api.json();

    if(api.ok){
        return response;
    }

    alert("Erro");
}


async function updateAddress(){
    const id = document.getElementById("id-address");
    const title = document.getElementById("my-title").value;
    const cep = document.getElementById("my-cep").value;
    const address = document.getElementById("my-address").value;
    const number = document.getElementById("my-number").value;
    const complement = document.getElementById("my-complement").value;

    let updatedAddress = {
        "title": title, 
        "cep": cep, 
        "address": address, 
        "number": number, 
        "complement": complement
    }

    let api = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id.value}`, {
        method: 'POST',
        body: JSON.stringify(updatedAddress),
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type' : 'application/json'
        },
    })

    if(api.ok){
        alert("Endereço atualizado com sucesso!");
        localStorage.setItem("updatedAddress", address);
        window.location.href = "../html/listarEndereco.html";
        return
    }
    alert("Por favor, prencher todos os campos");
    
}