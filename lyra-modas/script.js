// Lyra Modas — pequenos toques de interatividade da landing page

document.addEventListener('DOMContentLoaded', function () {
  // Rolagem suave para o link "Coleção" do menu
  var link = document.querySelector('a[href="#colecao"]');
  if (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector('#colecao');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Reanima o bloco "reveal" do topo (texto de entrada) sempre que a página carrega
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.style.animation = 'none';
      // força reflow para reiniciar a animação definida no CSS
      void el.offsetWidth;
      el.style.animation = '';
    });
  }
});
