const url = "https://go-wash-api.onrender.com/api/user";
async function cadastroUsuario(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let userType = 1
    let password = document.getElementById("password").value
    let cpfCnpj = document.getElementById("cpf_cnpj").value
    let termos = document.getElementById("termos").checked
    let birthday = document.getElementById("birthday").value

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
            "name":name,
            "email":email,
            "user_type_id":userType,
            "password": password,
            "cpf_cnpj": cpfCnpj,
            "terms": termos,
            "birthday": birthday    
        }),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        return
    }
    let respostaErro = await api.json();
        console.log(respostaErro.data.errors.cpf_cnpj)}
