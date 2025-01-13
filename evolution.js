document.addEventListener("DOMContentLoaded", () => {
    // Lista de jogos da Evolution
    
        
    
    
    
    
    
    
    
     ];
    const gameList = document.getElementById("game-list");

    // Adiciona cada jogo como um item estilizado na lista
    games.forEach(game => {
        const listItem = document.createElement("li");
        listItem.className = "game-item";
        listItem.innerHTML = `
            <span class="game-name">${game.name}</span>
            <button class="view-links-btn">Ver Links</button>
        `;

        // Evento para abrir o pop-up com os links
        listItem.querySelector(".view-links-btn").addEventListener("click", () => {
            createPopup(game);
        });

        gameList.appendChild(listItem);
    });
});

// Função para criar o pop-up
function createPopup(game) {
    // Remove qualquer pop-up existente
    closePopup();

    const options = game.links.map(
        (link, index) =>
            `<div class="link-container">
                <button class="popup-link" onclick="window.open('${link}', '_blank')">Link ${index + 1}</button>
                <span class="gov-info">Enviado ao governo</span>
            </div>`
    ).join("");

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-overlay" onclick="closePopup()"></div>
        <div class="popup-content">
            <h2>${game.name}</h2>
            ${options}
            <button class="close-popup" onclick="closePopup()">Fechar</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Aplica estilos ao pop-up dinamicamente
    applyPopupStyles();
}

// Função para fechar o pop-up
function closePopup() {
    const popup = document.querySelector(".popup");
    if (popup) popup.remove();
}

// Aplica estilos ao pop-up
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
        .link-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
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
        .gov-info {
            margin-left: 10px;
            padding: 5px 10px;
            border-radius: 5px;
            background-color: #d3d3d3;
            color: #000;
            font-size: 12px;
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
