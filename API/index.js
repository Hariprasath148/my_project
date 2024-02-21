
document.addEventListener("DOMContentLoaded",()=>{

    if(localStorage.getItem("main_color")!=null && localStorage.getItem("main_color_number") !==null){
        document.querySelector(":root").style.setProperty("--main_color",localStorage.getItem("main_color"));
        document.querySelector(".color_pallet > .active").classList.remove("active");
        let main_num = localStorage.getItem("main_color_number");
        document.querySelectorAll(".settings_colors")[main_num].classList.add("active");
        console.log("bg set success");
    }

    //this is for navigation menu 
    var navigation_bar = document.getElementById("navigation_bar");
    var over_lay_navigation = document.getElementById("over_lay_navigation");
    var burgermenu = document.getElementById("burgermenu");
    var navigation_bar_close_button = document.getElementById("navigation_bar_close_button");

    burgermenu.addEventListener("click",()=>{
        navigation_bar.classList.add("active");
    });

    over_lay_navigation.addEventListener("click",()=>{
        navigation_bar.classList.remove("active");
    });

    navigation_bar_close_button.addEventListener("click",()=>{
        navigation_bar.classList.remove("active");
    });
        
    // side bar

    let side_bar = document.querySelector(".side_bar");
    let side_open_btn = document.querySelector("#side_bar_open_btn");
    let side_close_btn = document.querySelector("#side_bar_close_btn");
    let side_bar_overlay = document.querySelector("#over_lay_sidebar");

    side_open_btn.addEventListener("click",()=>{
        side_bar.classList.add("active");
    });

    side_close_btn.addEventListener("click",()=>{
        side_bar.classList.remove("active");
    });

    side_bar_overlay.addEventListener("click",()=>{
        side_bar.classList.remove("active");
    });

    setTimeout(()=>{
        document.querySelector("#body_load_container").classList.add("hide");
    },1000);
   
});

//light theme and dark theme
function changetheme(button){
    let s=document.querySelector(":root");
    let style = window.getComputedStyle(s);
    if(button.checked){
        s.style.setProperty("--base_color","#000000");
        s.style.setProperty("--box_shadow","#ffffff");
        s.style.setProperty("--text_color","#ffffff");
        s.style.setProperty("--shadow","rgba(255,255,255,0.2)");
    }
    else{
        s.style.setProperty("--base_color","#ffffff");
        s.style.setProperty("--box_shadow","#000000");
        s.style.setProperty("--text_color","#000000");
        s.style.setProperty("--shadow","rgba(0, 0, 0, 0.2)");
    }
}

//color settings

function change_maincolor(value,button){
    let s=document.querySelector(":root");
    s.style.setProperty("--main_color",value);
    document.querySelector(".color_pallet > .active").classList.remove("active");
    button.classList.add("active");
}

function reset_settings_color(){
    let s=document.querySelector(":root");
    s.style.setProperty("--main_color","#00bcd5");
    document.querySelector(".color_pallet > .active").classList.remove("active");
    document.querySelectorAll(".settings_colors")[2].classList.add("active");
    localStorage.removeItem("main_color_number");
    localStorage.removeItem("main_color");
    alert("Color theme reset Successfully");
    console.log("reset success");
}

function save_settings_color(){
    let main_bg = document.querySelector(".color_pallet > .active");
    let main_bg_style = window.getComputedStyle(main_bg);
    let main_bg_color = main_bg_style.getPropertyValue("background-color");
    let main_bg_color_number = main_bg.getAttribute("data-number");
    localStorage.setItem("main_color_number",main_bg_color_number);
    localStorage.setItem("main_color",main_bg_color);
    alert("Color theme save Successfully");
    console.log("save success");
}

// help box function

let container = document.querySelector("#help_container");
container.addEventListener("scroll",()=>{
    AOS.init();
});

function open_pop_container(value){
    if(window.innerWidth<=900){
        document.getElementById("navigation_bar").classList.remove("active");
    }
    document.querySelector(".body_overlay").classList.remove("hide");
    if(value=="help"){
        let help_box = document.querySelector("#help_container");
        help_box.classList.add("active");
    }
    if(value=="settings"){
        let setting_box = document.querySelector("#settings_container");
        setting_box.classList.add("active");
    }   
}

function close_pop_container(value){
    document.querySelector(".body_overlay").classList.add("hide");
    if(value=="help"){
        let help_box = document.querySelector("#help_container");
        help_box.classList.remove("active");
    }
    if(value=="settings"){
        let setting_box = document.querySelector("#settings_container");
        setting_box.classList.remove("active");
    }
}

var answer = {
    1 : `1: slect the day you want to shedule <br> 2: Customize the plan based on your needs <br>`,
    2 : `1: click the login button in above navigation bar <br> 2: if you have already  a account click sign up other then click sign in <br> 3:Enter the mail id and password to login <br>`,
    3 : `1: click the above button toggle button in  navigation bar to change theme <br>`,
    4 : `1: When ever you edit the plan it saves automatically <br>`,
    5 : `1: select the settings button on the navigation bar <br> 2: chose the color in the settings <br> 3: click the save button in the bottom of the settings to save <br>`,
    6 : `1: select the settings button on the navigation bar <br> 2: click the reset button in the bottom of the settings to reset <br>`
}

function getanswer(value){
    let container = document.querySelector("#help_container");
    container.innerHTML += ` <p data-aos="fade-left" data-aos-offset="10" >steps : <br> ${answer[value]} </p> <button id="help_more_question" onclick="add_more_question(); ">Have an another question</button>`;
    AOS.init();
    container.scrollTop = container.scrollHeight;
}

function add_more_question(){
    let container = document.querySelector("#help_container");
    container.innerHTML += `<ul data-aos="fade-right" data-aos-offset="10">
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="1">How to start to shedule my plan</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="2">How to login</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="3">How to chage the theme</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="4">How to save the plan</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="5">how change the Theme color</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="6">how reset the theme Color</li>
    </ul>`;
    AOS.init();
    container.scrollTop = container.scrollHeight;
}

function reset(){
    let container = document.querySelector("#help_container");
    container.innerHTML = `<div id="help_pop_heading" class="pop_title">
            <button id="help_reset_button" onclick="reset()"><ion-icon name="refresh"></ion-icon></button>
            <p id="help_heading" class="pop_heading">How can i help You <ion-icon name="logo-reddit" id="help_logo"></ion-icon></p>
            <button class="pop_close_button" onclick="close_pop_container('help');"><ion-icon name="close"></ion-icon></button>
    </div>
    <ul>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="1">How to start to shedule my plan</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="2">How to login</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="3">How to chage the theme</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="4">How to save the plan</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="5">how change the Theme color</li>
        <li class="question" onclick="getanswer(this.getAttribute('data-name'));" data-name="6">how reset the theme Color</li>
    </ul>`;
}

setInterval(change_the_time,1000);

function change_the_time(){
    let date = new Date();
    let hour = date.getHours();
    let mins=date.getMinutes();
    let sec=date.getSeconds();
    let am_pm = "am";
    let time=""
    if(hour>=12){
        am_pm = "pm";
        if(hour>12){
            hour = hour -12;
        }
    }
    if(hour== 0){
        am_pm = "am";
        hour = 12;
    }
    mins = (mins<10) ? "0"+mins : mins;
    sec  = (sec<10)  ? "0"+sec : sec;
    document.querySelector(".time").innerHTML=hour+":"+mins+":"+sec+" "+am_pm;
}

// side bar close

function close_sidebar(a){
    if(window.innerWidth<=900){
        let side_bar = document.querySelector(".side_bar");
        side_bar.classList.remove("active");
    }
}

//main Content Lodaing 

function change_day_container(btn,day){
    document.querySelector("#top_scrollbar > .active").classList.remove("active");
    btn.classList.add("active");
    document.querySelector(".day").innerHTML = btn.text;
    document.querySelector(".container.active").classList.remove("active");
    document.querySelector("#"+day+"_container").classList.add("active");
    let current_day = document.querySelector(".container.active");
    current_day.parentNode.insertBefore(current_day,current_day.parentNode.firstChild);
    document.querySelector(".app_container").scrollTop = 0;
}

function food_change(val){
   let img= document.getElementById("food_img");
   if(val==1){
        img.src="../images/breakfast3.jpg"
   }
   if(val==2){
        img.src="../images/lunch.jpg"
   }
   if(val==3){
    img.src="../images/dinner.jpg"
   }
}

function food_reset(){
    document.getElementById("food_img").src="../images/mainfood.jpg";
}

function close_profile_card() {
    document.querySelector("#arrow_side").checked = false;
}

// setInterval(change_bg_deg,100);
// var deg = 50;
// function change_bg_deg(){
//     let s=document.querySelector(":root");
//     s.style.setProperty("--main_background",`linear-gradient(${deg}deg, var(--main_color) 0%, var(--base_color) 100%)`);
//     (deg==360) ? deg =10 : deg+=50; 
// }