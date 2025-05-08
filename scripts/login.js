async function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userType = 1;

    let user = {
        email: email,
        password: password,
        user_type_id: userType
    }

    let url = "https://go-wash-api.onrender.com/api/login";

    let response =  await fetch(url,{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        } 
    })

    let data = await response.json();

    if (response.ok){
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        console.log(data.user)
        
        alert("Login realizado com sucesso!");
        localStorage.setItem("logado", "true");
        window.location.href = "../html/index.html";

    }else if(response.status === 401){
        alert("Usuário não está ativo!")
        console.log(response)

    }else if(response.status === 404){
        alert("Usuário não foi encontrado!")
    }
}