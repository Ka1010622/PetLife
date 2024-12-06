var elementoDuvidas = document.querySelectorAll('.duvidas')

elementoDuvidas.forEach(function (duvidas) {
    duvidas.addEventListener('click', function () {
        duvidas.classList.toggle('ativa')
    });
});

  // function nome (argumento) {
      //conteúdo da função
  // }
 