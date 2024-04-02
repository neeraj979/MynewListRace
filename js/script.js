/*--------------------testimonial-------------------------*/
var swiper = new Swiper(".client_div", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
      280:{
        slidesPerView: 1,
      },
      360:{
        slidesPerView: 1,
      },
      800:{
        slidesPerView: 1,
      },
      1040:{
        slidesPerView: 3,
      },
    },
  });


  var sidebtn = document.getElementById("navBtn");
  var navBar = document.getElementById("navBar");

  sidebtn.addEventListener("click", function(){
      navBar.classList.toggle("navClass");
  });



  // scroll bottom to top
  var header1 = document.getElementById("headerid");
  var scroll = document.getElementById("scroll-top");
  var sticky1 = header1.offsetTop;
  window.addEventListener('scroll', function(){
    if(window.pageYOffset>sticky1+800){
      scroll.style.display = "block";
    }else{
      scroll.style.display = "none";
    }
  });
  

    scroll.addEventListener('click', function(){
    header1.scrollIntoView({ behavior: "smooth" });
});
