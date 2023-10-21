function addPresent(params = {}) {
  const presentEl = document.createElement("div");
  presentEl.innerHTML = `
  <div class="present">
      <div class="present-content">
        <div class="present__conteiner">
          <div class="present-conteiner-title">
            <h1 class="present__title" data-aos="fade-down">${params.tituloUno}
              <br /><span class="present-txt-special" 
                >${params.tituloDos}</span>
            </h1>
            <p class="present__txt" data-aos="fade-up">${params.descPresent}
            </p>
          </div>
          <div class="present-imagen">
            <img class="present__img" src="${params.imagePresent}" alt="" />
          </div>
        </div>
      </div>
    </div>
      `;

  const container = document.querySelector(".presentation-conteiner");
  container.appendChild(presentEl);
}

async function getPresent() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/grnneudz7zc6/environments/master/entries?access_token=4PkJ6AkXJIZ2PLugew0rZ5qDEsHXi-TXA5ERLl3nAiM&&content_type=present"
  );
  const data = await res.json();
  return {
    tituloUno: data.items[0].fields.titleOne,
    tituloDos: data.items[0].fields.twoTile,
    descPresent: data.items[0].fields.descPresent,
    imagePresent: data.includes.Asset[0].fields.file.url,
  };
}

function main() {
  getPresent().then((p) => {
    addPresent(p);
  });
}
main();
