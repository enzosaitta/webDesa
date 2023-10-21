function addHeader(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <header class="header__coteiner">
  <div class="header__content">
    <a href="./index.html"><img class="logo" src="./assets/logo.png" alt="" /></a>
    <div class="menu__conteiner">
      <div class="menu__burger">
        <button class="menu__button-burger" type="button">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div class="wind">
          <button class="wind__close-conteiner" type="button">
            <div class="wind__close">
              <img src="./assets/close-svgrepo-com (1) 1.png" alt="" />
            </div>
          </button>
          <div class="wind__content">
            <div class="wind__conteiner">
              <a href="./portafolio.html">Portafolio</a>
              <a href="./servicios.html">Servicios</a>
              <a href="./contacto.html">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-content-menu">
      <a class="header__a" href="./portafolio.html">Portafolio</a>
      <a class="header__a" href="./servicios.html">Servicios</a>
      <a class="header__a" href="./contacto.html">Contacto</a>
    </div>
  </div>`;
  const buttonEl = componentEl.querySelector(".menu__button-burger");
  const buttonCerrarVentEl = componentEl.querySelector(".wind__close");
  const ventanaEl = componentEl.querySelector(".wind");

  buttonEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });
  buttonCerrarVentEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
  el.appendChild(componentEl);
}
