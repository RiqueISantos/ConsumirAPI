window.onload = async function() {
    await listarEnderecos()
}

async function listarEnderecos() {
    let api = await fetch('https://go-wash-api.onrender.com/api/auth/address', {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });

    let response = await api.json();
    
    if(api.ok){
        
        const addressList = document.querySelector(".address-list");
        addressList.innerHTML = "";

        response.data.forEach(address => {
            const addressCard = document.createElement("div");
            addressCard.classList.add("address-card");


            addressCard.innerHTML = `
                <div class="address-info">
                    <p>Title: <span>${address.title}</span></p>
                    <p>CEP: <span>${address.cep}</span></p>
                    <p>Address: <span>${address.address}</span></p>
                    <p>Number: <span>${address.number}</span></p>
                    <p>Complement: <span>${address.complement || 'N/A'}</span></p>
                </div>

                <div class="address-actions">
                    <button class="address-att">Update</button>
                    <button class="address-delete">Delete</button>
                </div>
            `;

            addressList.appendChild(addressCard);
        });

        abrirPopUp();
    
        console.log("Meus endereços: ", response);
    }else{
        console.log("Erro");
    }
}