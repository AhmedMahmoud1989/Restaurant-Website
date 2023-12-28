
let btnMenu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

btnMenu.onclick = () => {
    btnMenu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    btnMenu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

let btnSearch = document.querySelector("#search");
btnSearch.onclick = () => {

    document.querySelector("#search-box").classList.toggle("active");
}

let btnSearchClose = document.querySelector("#search-box-close");

btnSearchClose = document.querySelector("#search-box-close");
btnSearchClose.onclick = () => {
    document.querySelector("#search-box").classList.remove("active");
}

const swiper = new Swiper('.swiper', {
    spaceBetween:30,
    centeredSlides:true,
    loop: true,
  
    autoplay: {
        delay: 7500,
        disableOnInteraction:true,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
  });