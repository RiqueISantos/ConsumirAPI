const deleteForm = document.getElementById("delete-id-container");

deleteForm.addEventListener("submit", async (event) =>{
    event.preventDefault();
    
    const id = document.getElementById("delete-address");
    const response = await searchAddress();
    console.log(response)

    const verifyAddress = response.data.find(address => address.id == id.value);
    if(!verifyAddress){alert("O endereço não existe!")}

    if(response){
        response.data.forEach((address, count) => {
            if(response.data[count].id == id.value){
                const addressCard = document.querySelector(".delete-card");
                const deleteContainer = document.getElementById("delete-id-container");
                const title = document.getElementById("title-delete");
                const cep = document.getElementById("cep-delete");
                const myAddress = document.getElementById("address-delete");
                const number = document.getElementById("number-delete");
                const complement = document.getElementById("complement-delete");

                addressCard.style.display = "flex";
                deleteContainer.style.display = "none";

                title.value = address.title;
                cep.value = address.cep;
                myAddress.value = address.address;
                number.value = address.number;
                complement.value = address.complement;
                
            }
        });
    }
})


async function searchAddress(){
    const myId = document.getElementById("delete-address");

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


async function deleteAddress(){
    const id = document.getElementById("delete-address");

    let api = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id.value}`, {
        method: 'DELETE',
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })

    if(api.ok){
        alert("Endereço deletado com sucesso!")
        window.location.href ="../html/listarEndereco.html";
    }else{
        alert("Erro ao tentar excluir endereço");
    }

}