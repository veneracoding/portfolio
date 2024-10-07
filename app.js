let menu=document.querySelector('#menu-btn');
let header=document.querySelector('.header');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// let themeToggler = document.querySelector('#theme-toggler');

// themeToggler.onclick = () => { 
//     themeToggler.classList.toggle('fa-sun');
//     if (themeToggler.classList.contains('fa-sun')) {
//          document.body.classList.add('active');
//     }else{
//         document.body.classList.remove('active');
//     }
// }


let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => { 
    // fa-moon klassini olib tashlash va fa-sun klassini qo'shish
    themeToggler.classList.toggle('fa-sun');
    themeToggler.classList.toggle('fa-moon');

    // Agar fa-sun klassi mavjud bo'lsa, body'ga 'active' klassini qo'shish
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

