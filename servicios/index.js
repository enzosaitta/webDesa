function addServices(params = {}) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
      <div class="service">
        <div class="services-conteiner">
          <div class="services-card">
            <div class="services-card-conteiner">
              <img class="services__imgcard" src="${params.image}" alt="" />
              <h1 class="services-card__title">${params.title}</h1>
            </div>
            <p class="services__text">${params.description}</p>
          </div>
        </div>
      </div>
  `;
  const container = document.querySelector(".sectionServ");
  container.appendChild(componentEl);
}

async function getServices() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/grnneudz7zc6/environments/master/entries?access_token=4PkJ6AkXJIZ2PLugew0rZ5qDEsHXi-TXA5ERLl3nAiM&&content_type=servicios"
  );
  const data = await res.json();
  const fieldsCollection = data.items.map((item) => {
    const imageId = item.fields.imagenServicios.sys.id;
    const asset = data.includes.Asset.find((a) => a.sys.id == imageId);
    const imagUrl = asset.fields.file.url;
    return {
      title: item.fields.tituloServicios,
      description: item.fields.descripcionServicios,
      image: imagUrl,
    };
  });
  return fieldsCollection;
}

function main() {
  getServices().then(function (services) {
    for (const p of services) {
      addServices(p);
    }
  });
}

main();
