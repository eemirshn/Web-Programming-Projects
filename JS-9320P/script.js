const characters = [
  {
    characters: [
      {
        id: 1,
        name: "Luke Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        homeworld: "tatooine",
      },
      {
        id: 2,
        name: "C-3PO",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        homeworld: "tatooine",
      },
      {
        id: 3,
        name: "R2-D2",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        homeworld: "naboo",
      },
      {
        id: 4,
        name: "Darth Vader",
        pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        homeworld: "tatooine",
      },
      {
        id: 5,
        name: "Leia Organa",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        homeworld: "alderaan",
      },
      {
        id: 6,
        name: "Owen Lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 7,
        name: "Beru Whitesun lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        homeworld: "tatooine",
      },
      {
        id: 8,
        name: "R5-D4",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        homeworld: "tatooine",
      },
      {
        id: 9,
        name: "Biggs Darklighter",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        homeworld: "tatooine",
      },
      {
        id: 10,
        name: "Obi-Wan Kenobi",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        homeworld: "stewjon",
      },
      {
        id: 11,
        name: "Anakin Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        homeworld: "tatooine",
      },
      {
        id: 12,
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu",
      },
      {
        id: 13,
        name: "Chewbacca",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        homeworld: "kashyyyk",
      },
      {
        id: 14,
        name: "Han Solo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        homeworld: "corellia",
      },
      {
        id: 15,
        name: "Greedo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        homeworld: "Rodia",
      },
      {
        id: 16,
        name: "Jabba Desilijic Tiure",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        homeworld: "tatooine",
      },
      {
        id: 18,
        name: "Wedge Antilles",
        pic: "./img/wedgeAntilles.jpg",
        homeworld: "corellia",
      },
      {
        id: 19,
        name: "Jek Tono Porkins",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        homeworld: "bestine",
      },
      {
        id: 20,
        name: "Yoda",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      },
      {
        id: 21,
        name: "Palpatine",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        homeworld: "naboo",
      },  
    ],
  },
];

const showCharacterButton = document.getElementById("showCharacters");
showCharacterButton.style.backgroundColor = "green";
showCharacterButton.style.color = "white";

let renderStatus = true;

function renderCharacters() {
  const showInfo = document.getElementById("showInfo");
  // TRUE KISMI BURASI!! //
  if (renderStatus) {
    showInfo.innerHTML = characters[0].characters
      .map(function (character) {
        return `
                  <div class="fw-bold col-lg-3 col-md-6 col-sm-12 card">
                  <h2>${character.name}</h2>
                  <p>Homeworld: ${character.homeworld || "unknown"}</p>
                      <img src="${character.pic}">
                  </div>
              `;
      })
      .join("");
    showCharacterButton.textContent = "Karakterleri Gizle";
    showCharacterButton.style.backgroundColor = "red";
    // FALSE KISMI BURASI!! //
  } else {
    // karakterleri kaldır :
    showInfo.innerHTML = "";
    showCharacterButton.textContent = "Karakterleri Göster";
    showCharacterButton.style.backgroundColor = "green";
    const radios = document.querySelectorAll(".homeworldRadio");
    radios.forEach((radio) => (radio.checked = false));
  }

  renderStatus = !renderStatus;
}

const homeworlds = [
  ...new Set(
    characters[0].characters.map((character) =>
      (character.homeworld ?? "other").toLowerCase()
    )
  ),
];

const radioButtonContainer = document.querySelector(".radioButtonContainer");

radioButtonContainer.innerHTML = homeworlds
  .map(
    (homeworld) =>
      ` 
<div class="fw-bold form-check text-white">
<input class="form-check-input homeworldRadio" name="homeworld" type="radio" id="homeworld-${homeworld}" value="${homeworld}">
<label class="form-check-label" for="homeworld-${homeworld}">${homeworld}</label>
</div>
`
  )
  .join("");

radioButtonContainer.addEventListener("change", function (event) {
  if (event.target.classList.contains("form-check-input")) {
    const selectedHomeworld = event.target.value.toLowerCase();
    const selectedHomeworldsCharacters = characters[0].characters.filter(
      (character) => {
        const homeworld = (character.homeworld || "other").toLowerCase();
        return homeworld === selectedHomeworld;
      }
    );

    console.log("tıklandı");
    console.log(selectedHomeworldsCharacters);

    const row = document.querySelector(".row");
    row.innerHTML = selectedHomeworldsCharacters
      .map((character) => {
        return `
          <div class="col-lg-3 col-md-6 col-sm-12 card">
            <img src="${character.pic}" alt="${character.name}">
            <br>
            <h2>${character.name}</h2>
            <p>Homeworld: ${character.homeworld || "Unknown"}</p>
          </div>
        `;
      })
      .join("");

    showCharacterButton.textContent = "Karakterleri Gizle";
    showCharacterButton.style.backgroundColor = "red";
  }
  renderStatus = !renderStatus;
});


