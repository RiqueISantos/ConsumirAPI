window.onload = function() {
    let name = document.getElementById("name-user");
    let email = document.getElementById("email-user");
   
    let birthday = document.getElementById("birthday-user");

    let userData = JSON.parse(localStorage.getItem("user")) || {};
    let addressUser = JSON.parse(localStorage.getItem("address")) || {};
    let newAddress = localStorage.getItem("updatedAddress");

    name.value = userData.name || "";
    email.value = userData.email || "";
    birthday.value = userData.birthday || "";


}

document.addEventListener("DOMContentLoaded", () => {
    const editBtn = document.querySelectorAll(".edit-name");

    editBtn.forEach(btn => {
        btn.addEventListener("click", () =>{
            const targetId = btn.getAttribute("data-target");
            const inputField = document.getElementById(targetId);

            if (inputField) {
                inputField.disabled = !inputField.disabled;

                if(!inputField.disabled){
                    inputField.focus();
                }
            }
                
        })
    });

})

document.addEventListener("DOMContentLoaded", () => {
    lottie.loadAnimation({
        container: document.getElementById("photo-user"), 
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://lottie.host/35aeb85c-1bb5-4a65-a7d8-4e5d0d977052/pJtejRLLwC.json" 
    });
});
