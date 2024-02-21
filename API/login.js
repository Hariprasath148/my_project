function Switch_page(value){
    let log_in = document.querySelector("#login_container");
    let sign_up = document.querySelector("#signup_container");
    let loader = document.querySelector(".loading_container");
    loader.classList.remove("hide");
    setTimeout(()=>{
        if(value == 1) {
            log_in.classList.remove("active");
            sign_up.classList.add("active");
            loader.classList.add("hide");
            window.scrollTo(0,0);
        }
        else {
            sign_up.classList.remove("active");
            log_in.classList.add("active");
            loader.classList.add("hide");
            window.scrollTo(0,0);
        }
    },800);
}

function back_to_home(){
    history.back();
}

function validate_login(form){
    let mail_format = /^[\w_.-]+@[\w-._]+\.[\w]{2,3}$/;
    let mail = form.login_email;
    let mail_msg = form.querySelector("#mail_msg");
    if(!(mail_format.test(mail.value))){
        mail.style.borderColor = "red"; 
        pop_msg(mail_msg);
        return false;
    }
    return true;
}

function validate_signin(form){
    let mail_format = /^[\w_.-]+@[\w-._]+\.[\w]{2,3}$/;
    let mail = form.signup_email;
    let mail_msg = form.querySelector("#signin_msg");
    let password = form.sigup_password;
    let reentered_password = form.sigup_confrim_password;
    let password_msg = form.querySelector("#password_msg");
    if(!(mail_format.test(mail.value))){
        mail.style.borderColor = "red"; 
        pop_msg(mail_msg);
        return false;
    }
    else{
        mail.style.borderColor = "blue";
        unpop_msg(mail_msg);  
    }
    if(password.value!=reentered_password.value){
        password.style.borderColor = "red";
        reentered_password.style.borderColor = "red";
        pop_msg(password_msg);
        return false;
    }
    else{
        mail.style.borderColor = "blue";
        unpop_msg(mail_msg);  
    }
    return true;
}

function check_name(name){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let name_msg = document.querySelector("#name_msg");
    let last_char = name.value.slice(-1);
    console.log(last_char);
    if(specialChars.test(last_char)){
        name.style.borderColor = "red";
        pop_msg(name_msg);
        name.value = name.value.slice(0,-1);
    }
    else{
        name.style.borderColor = "blue";
        unpop_msg(name_msg);
    }
}

function pop_msg(element){
    element.style.transform = "translatey(0px)";
    element.style.display= "block";
    element.style.opacity = "1";
    element.style.filter = "blur(0px)"
}

function unpop_msg(element){
    element.style.transform = "translatey(-10px)";
    element.style.display= "none";
    element.style.opacity = "0";
    element.style.filter = "blur(10px)"
}
