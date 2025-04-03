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
            // let response =  await api.json();
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
        // alert('Erro ao cadastrar. Verifique os dados e tente novamente.')

    }
