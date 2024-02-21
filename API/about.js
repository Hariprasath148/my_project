function rotate_next(){
    let cursole = document.querySelector(".cursole");
    let first_child = cursole.children[0];
    cursole.appendChild(first_child);
    let middle_child = cursole.children[2];
    let img = middle_child.querySelector("img").src;
    document.querySelector("body").style.backgroundImage = `url(${img})`;
    document.querySelector(".discription_container .discription.active").classList.remove("active");
    let curent_discription = middle_child.getAttribute("data-name");
    document.getElementById(curent_discription).classList.add("active");
}
function rotate_pre(){
    let cursole = document.querySelector(".cursole");
    let first_child = cursole.children[0];
    let last_child = cursole.children[4];
    let middle_child = cursole.children[1];
    cursole.insertBefore(last_child,first_child);
    let img = middle_child.querySelector("img").src;
    document.querySelector("body").style.backgroundImage = `url(${img})`;
    document.querySelector(".discription_container .discription.active").classList.remove("active");
    let curent_discription = middle_child.getAttribute("data-name");
    document.getElementById(curent_discription).classList.add("active");
}