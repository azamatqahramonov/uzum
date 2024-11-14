const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

const productsWrapper = document.querySelector(".products__wrapper");
const GET_PRODUCTS = "http://localhost:5000/products";

async function fetchProducts() {
  const res = await fetch(GET_PRODUCTS);
  const body = await res.json();
  const products = body.data;

  products.forEach((item) => {
    const newElement = createProductCard(item);
    productsWrapper.appendChild(newElement);
  });
}

function createProductCard(data) {
  const el = document.createElement("div");
  el.classList.add("card");

  el.innerHTML = `
        <img class="data__img" src="${data.image}" alt="" />
        <h3 class="data__name">${data.name}</h3>
        <h3 class="data__rating">★ ${data.rating} (1234 sharhlar)</h3>
        <h3 class="data__price">${data.price} so'm/oyiga</h3>
        <h3 class="data__category">${data.category}</h3>
        <h3 class="data__description">${data.description}</h3>
    `;

  return el;
}

fetchProducts();
