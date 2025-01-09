document.addEventListener("DOMContentLoaded", () => {
    const providers = document.querySelectorAll(".provider");
    providers.forEach(provider => {
        provider.addEventListener("click", () => {
            alert(`Você clicou no provedor: ${provider.textContent}.`);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const games = [
        { 
            name: "101 Candies", 
            links: [
                "https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution", 
                "https://link2.com"
            ] 
        },
        { name: "Outro Jogo", links: ["https://link3.com", "https://link4.com"] },
        { name: "Mais um Jogo", links: ["https://link5.com", "https://link6.com"] },
        // Adicione mais jogos conforme necessário
    ];

    const carousel = document.getElementById("game-carousel");
    games.forEach(game => {
        // Criar apenas os nomes dos jogos
        const gameElement = document.createElement("div");
        gameElement.className = "game-name";
        gameElement.textContent = game.name; // Apenas o nome do jogo
        gameElement.dataset.links = JSON.stringify(game.links);

        carousel.appendChild(gameElement);

        // Adicionar evento de clique para abrir o pop-up
        gameElement.addEventListener("click", () => {
            const links = JSON.parse(gameElement.dataset.links);
            const options = links.map(
                (link, index) =>
                    `<button class="popup-link" onclick="window.open('${link}', '_blank')">Link ${index + 1} (Enviado ao governo)</button>`
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
        });
    });
});

function closePopup() {
    const popup = document.querySelector(".popup");
    if (popup) popup.remove();
}
