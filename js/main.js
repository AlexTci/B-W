$(document).ready(function () {
    
  // плавная прокрутка
  $("nav a[href^='#']").click(function (event) {
    event.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
    $("nav a[href^='#']").parent().removeClass("active");
    $(this).parent().addClass("active");
    document.body.classList.remove("lock");
    $('.menu__burger').removeClass("close");
    $('.menu').removeClass("active");
    // $(".menu").toggle(500);
    return false;
  });
  // Меню бургер
  $(".menu__burger-wrapper").click(function (event) {
    event.preventDefault();
    document.body.classList.toggle("lock");
    $('.menu').toggleClass("active");
    // $(".menu").toggle(500);
    $('.menu__burger').toggleClass("close");
  });
});
