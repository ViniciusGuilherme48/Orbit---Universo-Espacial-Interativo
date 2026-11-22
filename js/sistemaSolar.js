const dadosPlanetas = {
    mercurio: {
        nome: "Mercúrio",
        descricao: "O menor planeta do Sistema Solar e o mais próximo do Sol.",
        diametro: "4.879 km",
        temperatura: "167 ºC",
        distancia: "57,9 milhões km"
    },

    venus: {
        nome: "Vênus",
        descricao: "Um planeta rochoso com uma atmosfera extremamente densa e temperaturas elevadas.",
        diametro: "12.104 km",
        temperatura: "464 ºC",
        distancia: "108,2 milhões km"
    },

    terra: {
        nome: "Terra",
        descricao: "Nosso lar. Um planeta único conhecido por abrigar água líquida e uma grande diversidade de vida.",
        diametro: "12.742 km",
        temperatura: "15 ºC",
        distancia: "149,6 milhões km"
    },

    marte: {
        nome: "Marte",
        descricao: "Conhecido como Planeta Vermelho, possui uma superfície rochosa e características que despertam interesse na exploração espacial.",
        diametro: "6.779 km",
        temperatura: "-65 ºC",
        distancia: "227,9 milhões km"
    },

    jupiter: {
        nome: "Júpiter",
        descricao: "O maior planeta do Sistema Solar, famoso por sua Grande Mancha Vermelha.",
        diametro: "139.820 km",
        temperatura: "-110 ºC",
        distancia: "778,6 milhões km"
    },

    saturno: {
        nome: "Saturno",
        descricao: "Um gigante gasoso conhecido por seu impressionante sistema de anéis.",
        diametro: "116.460 km",
        temperatura: "-140 ºC",
        distancia: "1,4 bilhão km"
    },

    urano: {
        nome: "Urano",
        descricao: "Um gigante de gelo que gira praticamente de lado em relação ao seu plano orbital.",
        diametro: "50.724 km",
        temperatura: "-195 ºC",
        distancia: "2,9 bilhões km"
    },

    netuno: {
        nome: "Netuno",
        descricao: "O planeta mais distante do Sol, conhecido por sua atmosfera azul e ventos extremamente fortes.",
        diametro: "49.244 km",
        temperatura: "-200 ºC",
        distancia: "4,5 bilhões km"
    }
};

let planetasFavoritos = JSON.parse(
    localStorage.getItem("planetasFavoritos")
) || [];

const botaoFavorito = document.getElementById("planetaFavorito");

let planetaSelecionado = null;

const listaFavoritos = document.getElementById("listaFavoritos");

function renderizarFavoritos() {
    listaFavoritos.innerHTML = "";

    planetasFavoritos.forEach((identificador) => {
        const dados = dadosPlanetas[identificador];

        const card = document.createElement("div");

        card.classList.add("cardFavorito");

        card.innerHTML = `
            <h3>${dados.nome}</h3>
            <p>${dados.descricao}</p>
        `;

        listaFavoritos.appendChild(card);
    });
}

const planetas = document.querySelectorAll(".visualizacaoSolar button");

planetas.forEach((planeta) => {
    planeta.addEventListener("click", () => {

        const identificador = planeta.dataset.planet;
        const dados = dadosPlanetas[identificador];

        planetaSelecionado = identificador;

        botaoFavorito.textContent = planetasFavoritos.includes(identificador) ? "☆ Remover aos favoritos" : "☆ Adicionar aos favoritos"

        document.getElementById("nomePlaneta").textContent = dados.nome;

        document.getElementById("descricacaoPlaneta").textContent = dados.descricao;

        document.getElementById("diametroPlaneta").textContent = dados.diametro;

        document.getElementById("temperaturaPlaneta").textContent = dados.temperatura;

        document.getElementById("distanciaPlaneta").textContent = dados.distancia;

    })
});

botaoFavorito.addEventListener("click", () => {
    if (!planetaSelecionado) return;
    if (planetasFavoritos.includes(planetaSelecionado)) {
        planetasFavoritos = planetasFavoritos.filter(
            planeta => planeta !== planetaSelecionado
        );
    }else{
        planetasFavoritos.push(planetaSelecionado);
}

localStorage.setItem(
    "planetasFavoritos",
    JSON.stringify(planetasFavoritos)
);

renderizarFavoritos();

botaoFavorito.textContent = planetasFavoritos.includes(planetaSelecionado) ? "☆ Remover aos favoritos" : "☆ Adicionar aos favoritos";
});

renderizarFavoritos();

