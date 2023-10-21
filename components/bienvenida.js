function addBienvenida(params = {}) {
  const bienvEl = document.createElement("div");
  bienvEl.innerHTML = `
      <section class="welc-conteiner">
        <div class="welcome__section">
          <div class="welc__title">
            <h1 class="title__prin">${params.title} <span class="txt__special">${params.title2}</span></h1>
          </div>
          <div class="wlc-conteiner">
            <img class="welc__imagen" src="${params.image}" alt="" />
          </div>
        </div>
      </section>
    `;

  const container = document.querySelector(".bienvenidaSec");

  container.appendChild(bienvEl);
}

async function getBienvenida() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/grnneudz7zc6/environments/master/entries?access_token=4PkJ6AkXJIZ2PLugew0rZ5qDEsHXi-TXA5ERLl3nAiM&&content_type=prinTitle"
  );
  const data = await res.json();
  return {
    title: data.items[0].fields.titlePrin,
    title2: data.items[0].fields.txtSpecial,
    image: data.includes.Asset[0].fields.file.url,
  };
}

function main() {
  getBienvenida().then((e) => {
    addBienvenida(e);
  });
}
main();
