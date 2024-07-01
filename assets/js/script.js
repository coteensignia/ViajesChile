//alert enviar coreo
$("#enviarCorreo").click(function () {
  alert("El correo fue enviado correctamente...");
});

//esconder contenido en card
$(".card-img-top").click(function () {
  $("p").toggle();
});

//tooltips
$(function () {
  $(".tooltip1").tooltip();
});

//smooth scroll
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var targetId = $(this).attr("href");
    var offset = $(targetId).offset().top;

    $("html, body").animate(
      {
        scrollTop: offset,
      },
      1000
    );
  });
});
