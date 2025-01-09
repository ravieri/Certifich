document.addEventListener("DOMContentLoaded", () => {
    // Lista de jogos da Evolution
    const games = [
        { name: "101 Candies", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution"] },
        { name: "2 Hand Casino Hold'em", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution"] },
        { name: "Aloha! Christmas Touch™", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution"] },
        { name: "Aloha! Christmas™", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution"] },
        { name: "Always 8 Baccarat", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution"] },
        { name: "American Roulette", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL004GAM%2E1%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution",'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "American Roulette Touch™", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Apollo Pays", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Arabian Nights", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution"] },
        { name: "Arabian Nights Touch™", links: ["https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution"] },
        { name: "Arcane: Reel Chaos™", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Arcane: Reel Chaos™Touch", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Archangels: Salvation Touch™", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Archangels: Salvation™", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Asgardian Stones Touch™", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Asgardian Stones™", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&ga=1&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%2D711%2DEVL%2D24%2D40%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Auto French Roulette", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL004GAM%2E1%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Auto Roulette", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL004GAM%2E1%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution','https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Auto Speed Roulette", links: ['https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL004GAM%2E1%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution', 'https://h2grupo-my.sharepoint.com/personal/diego_macedo_h2grupo_com/_layouts/15/onedrive.aspx?sortField=FileLeafRef&isAscending=true&id=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution%2FBR%5FEVL019TRA%2E57%5F56%2E303%2E755%5FREV%2E1%2Epdf&parent=%2Fpersonal%2Fdiego%5Fmacedo%5Fh2grupo%5Fcom%2FDocuments%2F%C3%81rea%20de%20Trabalho%2Fprovedores%20certificados%2FEvolution'] },
        { name: "Awakening™", links: ["https://link20.com"] },
        { name: "Bac Bo", links: ["https://link37.com"] },
        { name: "Baccarat", links: ["https://link38.com"] },
        { name: "Baccarat Touch", links: ["https://link39.com"] },
        { name: "Balloon Race", links: ["https://link40.com"] },
        { name: "Bee Hive Bonanza™", links: ["https://link41.com"] },
        { name: "Beef Lightning", links: ["https://link42.com"] },
        { name: "Big Bad Bison", links: ["https://link43.com"] },
        { name: "Big Bang Boom", links: ["https://link44.com"] },
        { name: "Blackjack", links: ["https://link45.com"] },
        { name: "Blackjack Classic", links: ["https://link46.com"] },
        { name: "Blackjack Classic Touch™", links: ["https://link47.com"] },
        { name: "Blackjack Touch - Single Deck", links: ["https://link48.com"] },
        { name: "Blackjack™", links: ["https://link49.com"] },
        { name: "Blood Suckers II Touch™", links: ["https://link50.com"] },
        { name: "Blood Suckers II™", links: ["https://link51.com"] },
        { name: "Bonanza", links: ["https://link52.com"] },
        { name: "Bonanza Falls", links: ["https://link53.com"] },
        { name: "Boo", links: ["https://link54.com"] },
        { name: "Book of Gods", links: ["https://link55.com"] },
        { name: "Buckshot Wilds", links: ["https://link56.com"] },
        { name: "Burgers", links: ["https://link57.com"] },
        { name: "Buster's Bones™", links: ["https://link58.com"] },
        { name: "Butterfly Staxx 2 Touch™", links: ["https://link59.com"] },
        { name: "Butterfly Staxx 2T", links: ["https://link1.com"] },
    { name: "Butterfly Staxx Touch™", links: ["https://link2.com"] },
    { name: "Butterfly Staxx™", links: ["https://link3.com"] },
    { name: "Caribbean Stud Poker", links: ["https://link4.com"] },
    { name: "Cash Noire Touch™", links: ["https://link5.com"] },
    { name: "Cash Noire™", links: ["https://link6.com"] },
    { name: "Cash or Crash", links: ["https://link7.com"] },
    { name: "Casino Hold'em", links: ["https://link8.com"] },
    { name: "Casino Hold'em Touch", links: ["https://link9.com"] },
    { name: "Castle of Terror", links: ["https://link10.com"] },
    { name: "Chocolates", links: ["https://link11.com"] },
    { name: "Christmas Bonanza", links: ["https://link12.com"] },
    { name: "Christmas Catch", links: ["https://link13.com"] },
    { name: "Classic Bet Stacker", links: ["https://link14.com"] },
    { name: "Classic Bet Stacker Blackjack", links: ["https://link15.com"] },
    { name: "Classic Free Bet Blackjack", links: ["https://link16.com"] },
    { name: "Codex of Fortune Touch™", links: ["https://link17.com"] },
    { name: "Codex of Fortune™", links: ["https://link18.com"] },
    { name: "Control Squeeze Baccarat", links: ["https://link19.com"] },
    { name: "Cornelius Milk Hunter Megaways", links: ["https://link20.com"] },
    { name: "Cornelius™", links: ["https://link21.com"] },
    { name: "Crab Trap", links: ["https://link22.com"] },
    { name: "Craps", links: ["https://link1.com"] },
    { name: "Crazy Balls", links: ["https://link2.com"] },
    { name: "Crazy Coin Flip", links: ["https://link3.com"] },
    { name: "Crazy Pachinko", links: ["https://link4.com"] },
    { name: "Crazy Time", links: ["https://link5.com"] },
    { name: "Creature from the Black", links: ["https://link6.com"] },
    { name: "Creature from the Black Lagoon", links: ["https://link7.com"] },
    { name: "Cupcakes™", links: ["https://link8.com"] },
    { name: "Cursed Treasure", links: ["https://link9.com"] },
    { name: "Cyberslot Megaclusters", links: ["https://link10.com"] },
    { name: "Danger High Voltage", links: ["https://link11.com"] },
    { name: "Danger High Voltage II", links: ["https://link12.com"] },
    { name: "Dark King: Forbidden Riches Touch™", links: ["https://link13.com"] },
    { name: "Dark King: Forbidden Riches™", links: ["https://link14.com"] },
    { name: "Dazzle Me Christmas", links: ["https://link15.com"] },
    { name: "Dazzle Me Touch™", links: ["https://link16.com"] },
    { name: "Dazzle Me™", links: ["https://link17.com"] },
    { name: "Dead Or Alive 2 Touch™", links: ["https://link18.com"] },
    { name: "Dead Or Alive 2™", links: ["https://link19.com"] },
    { name: "Dead or Alive Touch™", links: ["https://link20.com"] },
    { name: "Dead or Alive: Saloon", links: ["https://link21.com"] },
    { name: "Dead or Alive™", links: ["https://link22.com"] },
    { name: "Deal or No Deal", links: ["https://link23.com"] },
    { name: "Diamond Fruits", links: ["https://link24.com"] },
    { name: "Disco Danny Touch™", links: ["https://link25.com"] },
    { name: "Disco Danny™", links: ["https://link1.com"] },
    { name: "Divine Fortune Touch™", links: ["https://link2.com"] },
    { name: "Divine Fortune™", links: ["https://link3.com"] },
    { name: "Divine Fortune™ Megaways™", links: ["https://link4.com"] },
    { name: "Divine Fortune™ Megaways™ Touch", links: ["https://link5.com"] },
    { name: "Donuts", links: ["https://link6.com"] },
    { name: "Double Ball Roulette", links: ["https://link7.com"] },
    { name: "Double Stacks", links: ["https://link8.com"] },
    { name: "Double Stacks Touch", links: ["https://link9.com"] },
    { name: "Dragon Born", links: ["https://link10.com"] },
    { name: "Dragon Tiger", links: ["https://link11.com"] },
    { name: "Drive: Multiplier", links: ["https://link12.com"] },
    { name: "Drive: Multiplier Mayhem™", links: ["https://link13.com"] },
    { name: "Druids' Dream Touch™", links: ["https://link14.com"] },
    { name: "Druids' Dream™", links: ["https://link15.com"] },
    { name: "Dual Play Roulette", links: ["https://link16.com"] },
    { name: "Easy Blackjack", links: ["https://link17.com"] },
    { name: "Eggomatic Touch™", links: ["https://link18.com"] },
    { name: "Eggomatic™", links: ["https://link19.com"] },
    { name: "Elements Touch™: The", links: ["https://link20.com"] },
    { name: "Elements: The", links: ["https://link21.com"] },
    { name: "Elk Hunter", links: ["https://link22.com"] },
    { name: "European Roulette Touch™", links: ["https://link23.com"] },
    { name: "European Roulette™", links: ["https://link24.com"] },
    { name: "Extra Chilli", links: ["https://link25.com"] },
    { name: "Extra Chilli Epic Spins", links: ["https://link1.com"] },
    { name: "Fairytale Legends -", links: ["https://link2.com"] },
    { name: "Fairytale Legends: Red Riding Hood Touch™", links: ["https://link3.com"] },
    { name: "Fairytale Legends: Red Riding Hood™", links: ["https://link4.com"] },
    { name: "Fan Tan", links: ["https://link5.com"] },
    { name: "Feature Buy", links: ["https://link6.com"] },
    { name: "Finn and the Candy Spin", links: ["https://link7.com"] },
    { name: "Finn and the Swirly", links: ["https://link8.com"] },
    { name: "Finn and the Swirly Spin Touch™", links: ["https://link9.com"] },
    { name: "Finn's Golden Tavern Touch™", links: ["https://link10.com"] },
    { name: "Finn's Golden Tavern™", links: ["https://link11.com"] },
    { name: "Fireworks Megaways", links: ["https://link12.com"] },
    { name: "First Person American Roulette", links: ["https://link13.com"] },
    { name: "First Person Bac Bo", links: ["https://link14.com"] },
    { name: "First Person Baccarat", links: ["https://link15.com"] },
    { name: "First Person Blackjack", links: ["https://link16.com"] },
    { name: "First Person Craps", links: ["https://link17.com"] },
    { name: "First Person Deal or No Deal", links: ["https://link18.com"] },
    { name: "First Person Dragon Tiger", links: ["https://link19.com"] },
    { name: "First Person Dream Catcher", links: ["https://link20.com"] },
    { name: "First Person Golden Wealth Baccarat", links: ["https://link21.com"] },
    { name: "First Person Hilo", links: ["https://link22.com"] },
    { name: "First Person Lightning Baccarat", links: ["https://link1.com"] },
    { name: "First Person Lightning Blackjack", links: ["https://link2.com"] },
    { name: "First Person Lightning Roulette", links: ["https://link3.com"] },
    { name: "First Person Mega Ball", links: ["https://link4.com"] },
    { name: "First Person Prosperity Tree Baccarat", links: ["https://link5.com"] },
    { name: "First Person Roulette", links: ["https://link6.com"] },
    { name: "First Person Super Sic Bo", links: ["https://link7.com"] },
    { name: "First Person Top Card", links: ["https://link8.com"] },
    { name: "First Person Video Poker", links: ["https://link9.com"] },
    { name: "First Person XXXtreme", links: ["https://link10.com"] },
    { name: "First Person XXXtreme Lightning", links: ["https://link11.com"] },
    { name: "Fizzy Pennyslot", links: ["https://link12.com"] },
    { name: "Flowers Christmas Edition", links: ["https://link13.com"] },
    { name: "Flowers Christmas Edition Touch™", links: ["https://link14.com"] },
    { name: "Flowers Touch™", links: ["https://link15.com"] },
    { name: "Flowers™", links: ["https://link16.com"] },
    { name: "Football: Champions Cup Touch™", links: ["https://link17.com"] },
    { name: "Football: Champions Cup™", links: ["https://link18.com"] },
    { name: "Fortune Rangers Touch™", links: ["https://link19.com"] },
    { name: "Fortune Rangers™", links: ["https://link20.com"] },
    { name: "Free Bet Blackjack", links: ["https://link21.com"] },
    { name: "French Roulette", links: ["https://link22.com"] },
    { name: "French Roulette Touch™", links: ["https://link1.com"] },
    { name: "French Roulette™", links: ["https://link2.com"] },
    { name: "Fruit Shop Christmas Edition Touch™", links: ["https://link3.com"] },
    { name: "Fruit Shop Christmas Edition™", links: ["https://link4.com"] },
    { name: "Fruit Shop Touch™", links: ["https://link5.com"] },
    { name: "Fruit Shop™", links: ["https://link6.com"] },
    { name: "Fruit Spin Touch™", links: ["https://link7.com"] },
    { name: "Fruit Spin™", links: ["https://link8.com"] },
    { name: "Funk Master Touch™", links: ["https://link9.com"] },
    { name: "Funk Master™", links: ["https://link10.com"] },
    { name: "Funky Time", links: ["https://link11.com"] },
    { name: "Ghost Pirates Touch™", links: ["https://link12.com"] },
    { name: "Ghost Pirates™", links: ["https://link13.com"] },
    { name: "Gifts Of Fortune", links: ["https://link14.com"] },
    { name: "Gods of Gold Infinireels Touch™", links: ["https://link15.com"] },
    { name: "Gods of Gold Infinireels™", links: ["https://link16.com"] },
    { name: "Gold Vault Roulette", links: ["https://link17.com"] },
    { name: "Golden Catch", links: ["https://link18.com"] },
    { name: "Golden Goose Megaways", links: ["https://link19.com"] },
    { name: "Golden Grimoire Touch™", links: ["https://link20.com"] },
    { name: "Golden Grimoire™", links: ["https://link21.com"] },
    { name: "Golden Wealth Baccarat", links: ["https://link22.com"] },
    { name: "Golden Wheels of Egypt", links: ["https://link23.com"] },
    { name: "Gonzo's Gold Touch™", links: ["https://link24.com"] },
    { name: "Gonzo's Gold™", links: ["https://link25.com"] },
    { name: "Gonzo's Quest Touch™", links: ["https://link26.com"] },
    { name: "Gonzo's Quest™", links: ["https://link27.com"] },
    { name: "Gonzo's Treasure Map", links: ["https://link28.com"] },
    { name: "Gordon Ramsay Hell's", links: ["https://link29.com"] },
    { name: "Gorilla Kingdom Touch™", links: ["https://link30.com"] },
    { name: "Gorilla Kingdom™", links: ["https://link31.com"] },
    { name: "Grand Spinn Superpot Touch™", links: ["https://link32.com"] },
    { name: "Grand Spinn Superpot™", links: ["https://link1.com"] },
    { name: "Grand Spinn Touch™", links: ["https://link2.com"] },
    { name: "Grand Spinn™", links: ["https://link3.com"] },
    { name: "Great Train Heist Touch™", links: ["https://link4.com"] },
    { name: "Great Train Heist™", links: ["https://link5.com"] },
    { name: "Guns N'Roses Video Slots Touch™", links: ["https://link6.com"] },
    { name: "Guns N'Roses Video Slots™", links: ["https://link7.com"] },
    { name: "Halloween Jack Touch™", links: ["https://link8.com"] },
    { name: "Halloween Jack™", links: ["https://link9.com"] },
    { name: "Hansel and Gretel Touch™", links: ["https://link10.com"] },
    { name: "Hansel and Gretel™", links: ["https://link11.com"] },
    { name: "Holy Diver", links: ["https://link12.com"] },
    { name: "Hotline 2 Touch™", links: ["https://link13.com"] },
    { name: "Hotline 2™", links: ["https://link14.com"] },
    { name: "Hotline Touch™", links: ["https://link15.com"] },
    { name: "Hotline™", links: ["https://link16.com"] },
    { name: "Infinite Bet Stacker Blackjack", links: ["https://link17.com"] },
    { name: "Infinite Blackjack", links: ["https://link18.com"] },
    { name: "Infinite Fun Fun 21 Blackjack", links: ["https://link19.com"] },
    { name: "Instant Roulette", links: ["https://link20.com"] },
    { name: "Irish Pot Luck Touch™", links: ["https://link21.com"] },
    { name: "Irish Pot Luck™", links: ["https://link22.com"] },
    { name: "Jack and the Beanstalk Remastered", links: ["https://link23.com"] },
    { name: "Jack and the Beanstalk Touch™", links: ["https://link24.com"] },
    { name: "Jack and the Beanstalk™", links: ["https://link25.com"] },
    { name: "Jack Hammer 3", links: ["https://link26.com"] },
    { name: "Jack Hammer Touch™", links: ["https://link27.com"] },
    { name: "Jack Hammer™", links: ["https://link28.com"] },
    { name: "Jackpot 6000", links: ["https://link29.com"] },
    { name: "Jackpot 6000 Touch™", links: ["https://link30.com"] },
    { name: "Jacks or Better Double Up™", links: ["https://link31.com"] },
    { name: "Jacks or Better Double Up Touch™", links: ["https://link32.com"] },
    { name: "Jimi Hendrix Online Slot Touch™", links: ["https://link33.com"] },
    { name: "Jimi Hendrix Online Slot™", links: ["https://link34.com"] },
    { name: "Jingle Spin™", links: ["https://link35.com"] },
    { name: "Jingle Spin™ Touch", links: ["https://link36.com"] },
    { name: "Joker Pro Touch™", links: ["https://link37.com"] },
    { name: "Joker Pro™", links: ["https://link1.com"] },
    { name: "Jumanji®", links: ["https://link2.com"] },
    { name: "Jumanji Touch®", links: ["https://link3.com"] },
    { name: "Jungle Spirit Megaways", links: ["https://link4.com"] },
    { name: "Jungle Spirit: Call of the Wild Touch™", links: ["https://link5.com"] },
    { name: "Jungle Spirit: Call of the Wild™", links: ["https://link6.com"] },
    { name: "King Of Cats", links: ["https://link7.com"] },
    { name: "King of Slots Touch™", links: ["https://link8.com"] },
    { name: "King of Slots™", links: ["https://link9.com"] },
    { name: "Kingmaker Fully Loaded", links: ["https://link10.com"] },
    { name: "Kitchen Touch™", links: ["https://link11.com"] },
    { name: "Kitchen™", links: ["https://link12.com"] },
    { name: "Knight Rider Video Slot", links: ["https://link13.com"] },
    { name: "Knight Rider Video Slot Touch™", links: ["https://link14.com"] },
    { name: "Koi Princess Touch™", links: ["https://link15.com"] },
    { name: "Koi Princess™", links: ["https://link16.com"] },
    { name: "Lagoon Touch", links: ["https://link17.com"] },
    { name: "Let It Burn Touch™", links: ["https://link18.com"] },
    { name: "Let It Burn™", links: ["https://link19.com"] },
    { name: "Lightning Baccarat", links: ["https://link20.com"] },
    { name: "Lightning Ball", links: ["https://link21.com"] },
    { name: "Lightning Blackjack", links: ["https://link22.com"] },
    { name: "Lightning Dice", links: ["https://link23.com"] },
    { name: "Lightning Dragon Tiger", links: ["https://link24.com"] },
    { name: "Lightning Roulette", links: ["https://link25.com"] },
    { name: "Lightning Sic Bo", links: ["https://link26.com"] },
    { name: "Lightning Storm", links: ["https://link27.com"] },
    { name: "Lil' Devil", links: ["https://link28.com"] },
    { name: "Lost Relics Touch™", links: ["https://link29.com"] },
    { name: "Lost Relics™", links: ["https://link30.com"] },
    { name: "Lucky Streak Mk2", links: ["https://link31.com"] },
    { name: "Magic Maid Café Touch™", links: ["https://link32.com"] },
    { name: "Magic Maid Cafe™", links: ["https://link33.com"] },
    { name: "Max Megaways", links: ["https://link1.com"] },
    { name: "Max Megaways 2", links: ["https://link2.com"] },
    { name: "Mayhem Touch™", links: ["https://link3.com"] },
    { name: "Mega Ball", links: ["https://link4.com"] },
    { name: "Mega Fortune Dreams Touch™", links: ["https://link5.com"] },
    { name: "Mega Fortune Dreams™", links: ["https://link6.com"] },
    { name: "Mega Fortune Touch™", links: ["https://link7.com"] },
    { name: "Mega Fortune™", links: ["https://link8.com"] },
    { name: "Mega Joker Touch™", links: ["https://link9.com"] },
    { name: "Mega Joker™", links: ["https://link10.com"] },
    { name: "Megaways™", links: ["https://link11.com"] },
    { name: "Megaways™ Touch", links: ["https://link12.com"] },
    { name: "Mercy of the Gods Touch™", links: ["https://link13.com"] },
    { name: "Mercy of the Gods™", links: ["https://link14.com"] },
    { name: "Milkshake™ XXXtreme", links: ["https://link15.com"] },
    { name: "Millionaire", links: ["https://link16.com"] },
    { name: "Millionaire Mystery Box", links: ["https://link17.com"] },
    { name: "Millionaire Rush", links: ["https://link18.com"] },
    { name: "Mirror Mirror Touch™", links: ["https://link19.com"] },
    { name: "Mirror Mirror™", links: ["https://link20.com"] },
    { name: "Money Wheel", links: ["https://link21.com"] },
    { name: "Monopoly Big Baller", links: ["https://link22.com"] },
    { name: "Monopoly Live", links: ["https://link23.com"] },
    { name: "More Turkey", links: ["https://link24.com"] },
    { name: "Motorhead Video Slot Touch™", links: ["https://link25.com"] },
    { name: "Motorhead Video Slot™", links: ["https://link26.com"] },
    { name: "Narcos", links: ["https://link27.com"] },
    { name: "Narcos Touch", links: ["https://link28.com"] },
    { name: "No Commission Baccarat", links: ["https://link29.com"] },
    { name: "No Commission Speed Baccarat", links: ["https://link30.com"] },
    { name: "Ocean's Treasure Touch™", links: ["https://link31.com"] },
    { name: "Ocean's Treasure™", links: ["https://link1.com"] },
    { name: "Opal Fruits", links: ["https://link2.com"] },
    { name: "Outlaw", links: ["https://link3.com"] },
    { name: "Over The Moon", links: ["https://link4.com"] },
    { name: "Panda Money", links: ["https://link5.com"] },
    { name: "Parthenon: Quest for Immortality Touch™", links: ["https://link6.com"] },
    { name: "Parthenon: Quest for Immortality™", links: ["https://link7.com"] },
    { name: "Peek Baccarat", links: ["https://link8.com"] },
    { name: "Pirate From The East Touch™", links: ["https://link9.com"] },
    { name: "Pirate from the East™", links: ["https://link10.com"] },
    { name: "Pirate Pays", links: ["https://link11.com"] },
    { name: "POP", links: ["https://link12.com"] },
    { name: "Power Blackjack", links: ["https://link13.com"] },
    { name: "Powerpoints™", links: ["https://link14.com"] },
    { name: "Powerpoints™ Touch", links: ["https://link15.com"] },
    { name: "Prosperity Tree Baccarat", links: ["https://link16.com"] },
    { name: "Queen of Riches", links: ["https://link17.com"] },
    { name: "Race Track", links: ["https://link18.com"] },
    { name: "Rage", links: ["https://link19.com"] },
    { name: "Rage of the Seas Touch™", links: ["https://link20.com"] },
    { name: "Rage of the Seas™", links: ["https://link21.com"] },
    { name: "Rasputin Megaways", links: ["https://link22.com"] },
    { name: "Red Door Roulette", links: ["https://link23.com"] },
    { name: "Reef Raider Touch™", links: ["https://link24.com"] },
    { name: "Reef Raider™", links: ["https://link1.com"] },
    { name: "Reel Rush 2 Touch™", links: ["https://link2.com"] },
    { name: "Reel Rush 2T", links: ["https://link3.com"] },
    { name: "Reel Rush Touch™", links: ["https://link4.com"] },
    { name: "Reel Rush™", links: ["https://link5.com"] },
    { name: "Reel Steal Touch™", links: ["https://link6.com"] },
    { name: "Reel Steal™", links: ["https://link7.com"] },
    { name: "Riches of Midgard: Land and Expand Touch™", links: ["https://link8.com"] },
    { name: "Riches of Midgard: Land and Expand™", links: ["https://link9.com"] },
    { name: "Rise of Maya™", links: ["https://link10.com"] },
    { name: "Rise of Maya™ Touch", links: ["https://link11.com"] },
    { name: "Roulette", links: ["https://link12.com"] },
    { name: "Roulette Advanced™", links: ["https://link13.com"] },
    { name: "Roulette Touch™", links: ["https://link14.com"] },
    { name: "Royal Mint", links: ["https://link15.com"] },
    { name: "Sanctuary", links: ["https://link16.com"] },
    { name: "Scruffy Duck Touch™", links: ["https://link17.com"] },
    { name: "Scruffy Duck™", links: ["https://link18.com"] },
    { name: "Scudamore's Super Stakes", links: ["https://link19.com"] },
    { name: "Scudamore's Super Stakes Touch", links: ["https://link20.com"] },
    { name: "Secrets of Atlantis Touch™", links: ["https://link21.com"] },
    { name: "Secrets of Atlantis™", links: ["https://link22.com"] },
    { name: "Secrets of Christmas Touch™", links: ["https://link23.com"] },
    { name: "Secrets of Christmas™", links: ["https://link24.com"] },
    { name: "Silverback Gold Touch™", links: ["https://link25.com"] },
    { name: "Silverback Gold™", links: ["https://link26.com"] },
    { name: "Slots Vegas Fully Loaded", links: ["https://link1.com"] },
    { name: "Space Wars 2™", links: ["https://link2.com"] },
    { name: "Speed Baccarat", links: ["https://link3.com"] },
    { name: "Speed Blackjack", links: ["https://link4.com"] },
    { name: "Speed Roulette", links: ["https://link5.com"] },
    { name: "Spicy Meatballs", links: ["https://link6.com"] },
    { name: "Spiñata Grande Touch™", links: ["https://link7.com"] },
    { name: "Spiñata Grande™", links: ["https://link8.com"] },
    { name: "Spinsane Touch™", links: ["https://link9.com"] },
    { name: "Spinsane™", links: ["https://link10.com"] },
    { name: "Spin™", links: ["https://link11.com"] },
    { name: "Squeeze Baccarat", links: ["https://link12.com"] },
    { name: "Star Clusters", links: ["https://link13.com"] },
    { name: "Starburst", links: ["https://link14.com"] },
    { name: "Starburst Galaxy", links: ["https://link15.com"] },
    { name: "Starburst Touch™", links: ["https://link16.com"] },
    { name: "Starburst Xxxtreme Touch™", links: ["https://link17.com"] },
    { name: "Starburst Xxxtreme™", links: ["https://link18.com"] },
    { name: "Steam Tower Touch™", links: ["https://link19.com"] },
    { name: "Steam Tower™", links: ["https://link20.com"] },
    { name: "Stock Market", links: ["https://link21.com"] },
    { name: "Street Fighter™ II: The", links: ["https://link22.com"] },
    { name: "Super Andar Bahar", links: ["https://link1.com"] },
    { name: "Super Sic Bo", links: ["https://link2.com"] },
    { name: "Super Striker Touch™", links: ["https://link3.com"] },
    { name: "Super Striker™", links: ["https://link4.com"] },
    { name: "Superstars™", links: ["https://link5.com"] },
    { name: "Teen Patti", links: ["https://link6.com"] },
    { name: "Temple of Nudges Touch™", links: ["https://link7.com"] },
    { name: "Temple of Nudges™", links: ["https://link8.com"] },
    { name: "Temple Quest Spinfinity", links: ["https://link9.com"] },
    { name: "Texas Hold'em Bonus Poker", links: ["https://link10.com"] },
    { name: "The Phantom's Curse", links: ["https://link11.com"] },
    { name: "The Phantom's Curse Video Slot", links: ["https://link12.com"] },
    { name: "The Race", links: ["https://link13.com"] },
    { name: "The Wolf's Bane Touch™", links: ["https://link14.com"] },
    { name: "The Wolf's Bane™", links: ["https://link15.com"] },
    { name: "Three Card Poker", links: ["https://link16.com"] },
    { name: "Thrill to Grill", links: ["https://link17.com"] },
    { name: "Top Card", links: ["https://link18.com"] },
    { name: "Top Dice", links: ["https://link19.com"] },
    { name: "Trigger Happy", links: ["https://link20.com"] },
    { name: "Trollpot 5000 Touch™", links: ["https://link21.com"] },
    { name: "Trollpot 5000™", links: ["https://link22.com"] },
    { name: "Turn Your Fortune Touch™", links: ["https://link23.com"] },
    { name: "Turn Your Fortune™", links: ["https://link24.com"] },
    { name: "Twin Spin Deluxe Touch™", links: ["https://link25.com"] },
    { name: "Twin Spin Deluxe™", links: ["https://link26.com"] },
    { name: "Twin Spin Touch™", links: ["https://link27.com"] },
    { name: "Twin Spin™", links: ["https://link28.com"] },
    { name: "Twin Spin™ Megaways™", links: ["https://link29.com"] },
    { name: "Twin Spin™ Megaways™ Touch", links: ["https://link30.com"] },
    { name: "Twister", links: ["https://link1.com"] },
    { name: "Ultimate Texas Hold'em", links: ["https://link2.com"] },
    { name: "Universal Monsters™", links: ["https://link3.com"] },
    { name: "Vegas Megaways", links: ["https://link4.com"] },
    { name: "Vegas Night Life Touch™", links: ["https://link5.com"] },
    { name: "Vegas Night Life™", links: ["https://link6.com"] },
    { name: "Vegas Rush", links: ["https://link7.com"] },
    { name: "Victorious Touch™", links: ["https://link8.com"] },
    { name: "Victorious™", links: ["https://link9.com"] },
    { name: "Video Poker", links: ["https://link10.com"] },
    { name: "Video Slot Touch", links: ["https://link11.com"] },
    { name: "Warlords - Crystals of Power™", links: ["https://link12.com"] },
    { name: "Warlords - Crystals of Power™ Touch", links: ["https://link13.com"] },
    { name: "Wealth Baccarat", links: ["https://link14.com"] },
    { name: "White Rabbit", links: ["https://link15.com"] },
    { name: "Wild Bazaar Touch™", links: ["https://link16.com"] },
    { name: "Wild Bazaar™", links: ["https://link17.com"] },
    { name: "Wild Flower", links: ["https://link18.com"] },
    { name: "Wild Portals", links: ["https://link19.com"] },
    { name: "Wild Turkey Touch™", links: ["https://link20.com"] },
    { name: "Wild Turkey™", links: ["https://link21.com"] },
    { name: "Wild Unicorns", links: ["https://link22.com"] },
    { name: "Wild Water Touch™", links: ["https://link23.com"] },
    { name: "Wild Water™", links: ["https://link24.com"] },
    { name: "Wild Wild West: The", links: ["https://link25.com"] },
    { name: "Wild Worlds Touch™", links: ["https://link26.com"] },
    { name: "Wild Worlds™", links: ["https://link27.com"] },
    { name: "Wilderland Touch™", links: ["https://link28.com"] },
    { name: "Wilderland™", links: ["https://link29.com"] },
    { name: "Willy's Hot Chillies Touch™", links: ["https://link30.com"] },
    { name: "Willy's Hot Chillies™", links: ["https://link1.com"] },
    { name: "Wings of Riches Touch™", links: ["https://link2.com"] },
    { name: "Wings of Riches™", links: ["https://link3.com"] },
    { name: "Witchcraft Academy Touch™", links: ["https://link4.com"] },
    { name: "Witchcraft Academy™", links: ["https://link5.com"] },
    { name: "Wolf Cub Touch™", links: ["https://link6.com"] },
    { name: "Wolf Cub™", links: ["https://link7.com"] },
    { name: "Wonderland Protector Touch™", links: ["https://link8.com"] },
    { name: "Wonderland Protector™", links: ["https://link9.com"] },
    { name: "World Warrior Slot", links: ["https://link10.com"] },
    { name: "XXXtreme Lightning Baccarat", links: ["https://link11.com"] },
    { name: "XXXtreme Lightning Roulette", links: ["https://link12.com"] },
        
    
    
    
    
    
    
    
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
