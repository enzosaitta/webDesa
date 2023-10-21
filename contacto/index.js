function addContact(el) {
  const contactEl = document.createElement("div");
  contactEl.innerHTML = `
    <section class="contact">
      <div class="conteiner-all">
        <h2 class="contact__title" data-aos="fade-down">Escribime</h2>
        <form class="contact-form " id="form">
          <div class="contact-form-conteiner">
            <div class="contact-leabel-conteiner">
              <label class="contact__label"  >
                <h3>Nombre</h3>
                <input id="nombre"
                  class="contact__input"
                  placeholder="Tu nombre"
                  type="text"
                />
              </label>
              <label class="contact__label" 
                ><h3>Email</h3>
                <input id="email" 
                  class="contact__input"
                  placeholder="tu@mail.com"
                  type="text"
                />
              </label>
            </div>
            <label class="contact__label" 
              ><h3>Mensaje</h3>
              <textarea id="mensaje" class="text-area" cols="30" rows="10"></textarea>
            </label>
            <div class="contact-buton-conteiner">
              <button class="contact__button">
                Enviar<img
                  class="contact__icon"
                  src="./assets/Vector.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>`;

  el.appendChild(contactEl);
  enviarForm();
}

function enviarForm() {
  const formEl = document.getElementById("form");
  formEl.addEventListener("submit", async (f) => {
    f.preventDefault();

    let nombre = form.querySelector("#nombre").value;
    let email = form.querySelector("#email").value;
    let message = form.querySelector("#mensaje").value;

    const datos = {
      to: "saitta.enzo93@gmail.com",
      message: `Nombre: ${nombre}, <br> Email: ${email}, <br> Mensaje: ${message}`,
    };
    await fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(datos),
    });
    formEl.reset();
  });
}
