function abrirPopUp(){
    const attAddress = document.querySelectorAll(".address-att");
    const popUp = document.getElementById("pop-up");
    attAddress.forEach(att =>{
        att.addEventListener("click", () =>{
            popUp.style.display = "flex";

            
        })
    })
}

function fecharModal(){
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
}

const form = document.getElementById("container-id");


form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const addressId = document.getElementById("id-address");
    const myAddress = JSON.parse(localStorage.getItem("address"));
    const address = document.querySelector(".att-card");

    const title = document.getElementById("my-title");
    const cep = document.getElementById("my-cep");
    const addressAtt = document.getElementById("my-address");
    const number = document.getElementById("my-number");
    const complement = document.getElementById("my-complement");

    if(addressId.value == myAddress.data.id){
       
        address.style.display = "flex";
        title.value = myAddress.data.title
        cep.value = myAddress.data.cep
        addressAtt.value = myAddress.data.address
        number.value = myAddress.data.number
        complement.value = myAddress.data.complement

        form.style.display = "none";
    }

})