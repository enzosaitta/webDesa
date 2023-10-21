function addPortfolio(params = {}) {
  const portfolioEl = document.createElement("div");
  portfolioEl.innerHTML = `
    <div class="portfolio">
      <div class="portfolio-conteiner">
        <div class="portfolio-card">
          <div class="portfolio-conteiner">
          <img class="img-card" src="${params.image}" alt="" />
            <h1 class="portfolio-card__title">${params.title}</h1>
          </div>
          <p class="text__portfolio">${params.description}</p>
        </div>
      </div>
    </div>
  `;
  let conteiner = document.querySelector(".portafolio-cont");
  conteiner.appendChild(portfolioEl);
}

async function getPortafolio() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/grnneudz7zc6/environments/master/entries?access_token=4PkJ6AkXJIZ2PLugew0rZ5qDEsHXi-TXA5ERLl3nAiM&&content_type=portfolio"
  );
  const data = await res.json();
  const collection = data.items.map((item) => {
    const imageId = item.fields.portImg.sys.id;
    const asset = data.includes.Asset.find((a) => a.sys.id == imageId);
    const imagUrl = asset.fields.file.url;
    return {
      title: item.fields.titlePort,
      description: item.fields.descPort,
      image: imagUrl,
    };
  });
  return collection;
}

function main() {
  getPortafolio().then(function (port) {
    for (const p of port) {
      addPortfolio(p);
    }
  });
}

main();
