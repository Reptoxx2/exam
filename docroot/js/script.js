$(document).ready(function (){
  $('.content__banner-slide').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  });
});
$(document).ready(function (){
  $('.content__share-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  });
});
$(document).ready(function (){
  $('.content__features-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  });
});
let likeblock = document.querySelectorAll(".content__taken-photo");
let menu = document.querySelector(".header__menu");
let content = document.querySelector('.content');
let logo = document.querySelector('.header__logo');
document.body.addEventListener('click', (event)=>{
  if (event.target === logo.children[0])
  {
    menu.classList.toggle('active');
  }
  if (event.target === menu.children[0].children[0])
  {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  else if (event.target === menu.children[0].children[1])
  {
    window.scrollTo({
      top: content.children[1].offsetTop,
      behavior: 'smooth'
    })
  }
  else if (event.target === menu.children[0].children[2])
  {
    window.scrollTo({
      top: content.children[2].offsetTop,
      behavior: 'smooth'
    })
  }
  else if (event.target === menu.children[0].children[3])
  {
    window.scrollTo({
      top: content.children[3].offsetTop,
      behavior: 'smooth'
    })
  }
  else if (event.target === menu.children[0].children[4])
  {
    window.scrollTo({
      top: content.children[4].offsetTop,
      behavior: 'smooth'
    })
  }
  else if (event.target === menu.children[0].children[5])
  {
    window.scrollTo({
      top: content.children[5].offsetTop,
      behavior: 'smooth'
    })
  }
  else if (event.target === menu.children[0].children[6])
  {
    window.scrollTo({
      top: content.children[6].offsetTop,
      behavior: 'smooth'
    })
  }
});
document.body.addEventListener('mouseover', (event)=>{
  for (const value of likeblock) {
    if (event.target === value.children[0])
    {
        value.children[1].classList.add("active");
    }
    else if (event.target.closest(".content__like-block")) {
      event.target.closest(".content__like-block").classList.add(".active");
    }
    else
    {
      value.children[1].classList.remove("active")
    }
  }
});