document.addEventListener("DOMContentLoaded", () => {
    // Função para renderizar jogos na lista
    const renderGames = (filteredGames) => {
      const gameList = document.getElementById("game-list");
      gameList.innerHTML = ""; // Limpa a lista atual
      filteredGames.forEach((game, index) => {
        const listItem = document.createElement("li");
        listItem.className = "game-item";
        listItem.innerHTML = `
          <span class="game-number">${index + 1}. </span>
          <span class="game-name">${game.name}</span>
          <button class="view-links-btn">GLI</button>
        `;
        listItem.querySelector(".view-links-btn").addEventListener("click", () => {
          createPopup(game.name, game.links);
        });
        gameList.appendChild(listItem);
      });
    };
  
    // Função para pesquisar jogos
    window.searchGames = () => {
      const searchBar = document.getElementById("searchBar");
      const searchTerm = searchBar.value.toLowerCase();
      const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));
      renderGames(filteredGames);
    };
  
    // Evento para exibir jogos OFF
    const showOffBtn = document.getElementById("show-off");
    showOffBtn.addEventListener("click", () => {
      const offGames = games.filter(game => game.name.includes("OFF"));
      renderGames(offGames);
    });
  
    // Evento para exibir jogos ON-LINE
    const showOnlineBtn = document.getElementById("show-online");
    showOnlineBtn.addEventListener("click", () => {
      const onlineGames = games.filter(game => game.name.includes("ON-LINE"));
      renderGames(onlineGames);
    });
  
    // Evento para exibir todos os jogos
    const showAllBtn = document.getElementById("show-all");
    showAllBtn.addEventListener("click", () => {
      renderGames(games); // Exibe todos os jogos
    });
  
    // Exibe todos os jogos inicialmente
    renderGames(games);
  });
  
  function createPopup(title, links) {
    // Remove qualquer pop-up existente
    closePopup();
    const options = links.map(
      (link, index) =>
        `<div class="link-container">
          <button class="popup-link" onclick="window.open('${link}', '_blank')">Link ${index + 1}</button>
          <span class="gov-info">Disponível</span>
        </div>`
    ).join("");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <div class="popup-overlay" onclick="closePopup()"></div>
      <div class="popup-content">
        <h2>${title}</h2>
        ${options}
        <button class="close-popup" onclick="closePopup()">Fechar</button>
      </div>
    `;
    document.body.appendChild(popup);
    // Aplica estilos ao pop-up dinamicamente
    applyPopupStyles();
  }
  
  function closePopup() {
    const popup = document.querySelector(".popup");
    if (popup) popup.remove();
  }
  
  function applyPopupStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .popup-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
      }
      .popup-content {
        position: relative;
        background: #fff;
        color: #000;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
        z-index: 1010;
        max-width: 400px;
        width: 90%;
      }
      .popup-content h2 {
        margin-bottom: 15px;
        font-size: 20px;
        color: #800080;
      }
      .popup-link {
        margin: 10px 5px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #800080;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.2s;
      }
      .popup-link:hover {
        background-color: #5a005a;
      }
      .close-popup {
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #ff0000;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.2s;
      }
      .close-popup:hover {
        background-color: #cc0000;
      }
    `;
    document.head.appendChild(style);
  }