function handleEmail(event){
    event.preventDefault();

    const email = event.target.email.value;

    console.log(email);

    const accessEmail = document.getElementById("access-email");
    console.log(accessEmail);

    const emailPara = document.createElement("p");
    emailPara.innerText = `Subscription Successful via ${email}`;
    
    // console.log(emailPara);

    accessEmail.appendChild(emailPara);
}