function addFooter(el) {
  const componentFooter = document.createElement("div");
  componentFooter.innerHTML = `
    <section class="footer">
    <div class="footer-conteiner-logo">
    <a href="./index.html"><img class="footer__logo" src="./assets/logo.png" alt="" /></a>
    </div>
    <div class="footer-conteiner">
      <a class="footer__content" href="./index.html">
        <h2 class="footer__a"><img class="icon" src="./assets/home.png" alt="" />Home</h2>
      </a>
      <a class="footer__content" href="./servicios.html">
        <h2 class="footer__a"><img class="icon" src="./assets/user.png" alt="" />Servicios</h2>
      </a>
      <a class="footer__content" href="./contacto.html">
        <h2 class="footer__a">
          <img class="icon" src="./assets/Vector (2).png" alt="" />Contacto
        </h2>
      </a>
    </div>
    <div class="footer__social-media">
      <a
        class="social-media"
        href="https://www.linkedin.com/in/enzoemanuelsaitta/"
      >
        <img src="./assets/XMLID_801_.png" alt="Icono linkedin" />
      </a>
      <a class="social-media" href="https://github.com/enzosaitta">
        <img src="./assets/Vector (3).png" alt="Icono GitHub" />
      </a>
      <a class="social-media" href="https://www.instagram.com/enzosdev/">
        <img src="./assets/icons8-instagram-24.png" alt="Icono Instagram" />
      </a>
    </div>
    <div class="text">
      <p>Created by <span class="text__special">Saitta Enzo</span> ©2023</p>
    </div>
  </section>`;

  el.appendChild(componentFooter);
}
