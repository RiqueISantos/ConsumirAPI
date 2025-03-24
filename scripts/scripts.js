async function cadastroUsuario() {
    let nome = "Alou";
    let email = "lier2504@uorak.com"  
    let userType = 1;
    let password = "1234";
    let cpfCnpj = "12345678912";
    let termos = 1;
    let birthday = "2025-04-03"

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
