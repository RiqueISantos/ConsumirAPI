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

    if (api.ok){
        let response =  await api.json();
        console.log(response);
        return
    }

    let responseErro =  await api.json()
    console.log(responseErro);
}
