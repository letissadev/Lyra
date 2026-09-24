const WHATSAPP_NUMBER = '556284062832';

const products = [
  {
    name: 'Camiseta Mostarda',
    image: 'assets/modelo-mostarda-DrJXP9xC.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa mostarda em malha peruana',
  },
  {
    name: 'Camiseta Café',
    image: 'assets/modelo-cafe-feminina-qIf8bz-m.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa marrom café em malha peruana',
  },
  {
    name: 'Camiseta Azul',
    image: 'assets/modelo-azul-feminina-DS44wmOG.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa azul em malha peruana',
  },
  {
    name: 'Camiseta Nude',
    image: 'assets/modelo-nude-CV-BE56T.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa bege nude em malha peruana',
  },
  {
    name: 'Camiseta Terracota',
    image: 'assets/modelo-terracota-Bd8wQpsW.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa terracota em malha peruana',
  },
  {
    name: 'Camiseta Manteiga',
    image: 'assets/modelo-manteiga-g_e87RXM.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa amarelo manteiga em malha peruana',
  },
  {
    name: 'Camiseta Vinho',
    image: 'assets/modelo-vinho-feminina-vE0VNdbf.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa vinho em malha peruana',
  },
  {
    name: 'Camiseta Salvia',
    image: 'assets/modelo-salvia-DC0dRS-U.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa verde salvia em malha peruana',
  },
  {
    name: 'Camiseta Rosa',
    image: 'assets/modelo-rosa-s2RkoxGX.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa rosa em malha peruana',
  },
  {
    name: 'Camiseta Preta',
    image: 'assets/modelo-preta-feminina-BFht6tQT.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa preta em malha peruana',
  },
  {
    name: 'Camiseta Branca',
    image: 'assets/modelo-branca-Bs9dadWu.jpg',
    alt: 'Modelo feminina vestindo camiseta lisa branca em malha peruana',
  },
];

function buildWhatsAppLink(productName) {
  const message = `Olá! Quero pedir a ${productName} da Lyra Modas.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildProductCard(product) {
  return `
    <article class="group">
      <div class="relative mb-6 overflow-hidden bg-ice">
        <img
          src="${product.image}"
          alt="${product.alt}"
          width="1024"
          height="1280"
          loading="lazy"
          class="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
        <div class="absolute inset-x-0 bottom-0 flex items-center justify-center bg-brand/10 p-3 transition-opacity duration-500 sm:inset-0 sm:opacity-0 sm:group-hover:opacity-100">
          <a
            href="${buildWhatsAppLink(product.name)}"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-card px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Pedir no WhatsApp
          </a>
        </div>
      </div>
      <div class="flex items-end justify-between border-b border-brand/10 pb-4">
        <div>
          <h3 class="font-display text-lg font-bold text-brand">${product.name}</h3>
          <p class="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-lyra">Cor sólida · Malha peruana</p>
        </div>
        <span class="text-lg font-semibold text-accent">R$ 60</span>
      </div>
    </article>
  `;
}

function renderProducts() {
  const productsGrid = document.querySelector('#products-grid');

  if (!productsGrid) return;

  productsGrid.innerHTML = products.map(buildProductCard).join('');
}

function initSmoothScroll() {
  const collectionLink = document.querySelector('a[href="#colecao"]');

  if (!collectionLink) return;

  collectionLink.addEventListener('click', (event) => {
    const target = document.querySelector('#colecao');

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function replayRevealAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  document.querySelectorAll('.reveal').forEach((element) => {
    element.style.animation = 'none';
    void element.offsetWidth;
    element.style.animation = '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initSmoothScroll();
  replayRevealAnimations();
});
