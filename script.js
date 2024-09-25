const menu = document.querySelector('.menu-responsive');
const icon = document.querySelector('.icon');
const button = document.querySelector('.icon-button');


const openIcon = "icon fa-solid fa-bars";
const closeIcon = "icon fa-solid fa-xmark";

let isOpen = false;

function toggleMenu() {

    if(isOpen) {
        menu.classList.remove("active")
        icon.className = openIcon;
        isOpen = false;
    } else {
        menu.classList.add('active')
        icon.className = closeIcon;
        
        isOpen = true
    }

}

button.addEventListener('click', toggleMenu)

