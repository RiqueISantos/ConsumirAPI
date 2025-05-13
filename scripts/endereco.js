async function cadastrarEndereco(){
    let titulo = document.getElementById('titulo').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;

    let address = {
        "title": titulo, 
        "cep": cep, 
        "address": endereco, 
        "number": numero, 
        "complement": complemento, 
    }
    
    let response = await fetch('https://go-wash-api.onrender.com/api/auth/address', {
        method: "POST",
        body:JSON.stringify(address),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      
    });

    let data = await response.json();

    if(response.ok){
        alert("O endereço foi cadastrado com sucesso!");
        localStorage.setItem('address', JSON.stringify(data));
        localStorage.removeItem('addresses');
        console.log("Endereços cadastrados: ", data)
        window.location.href = "../html/perfil.html";
    }else{
        alert("erro")
    }

}