const dadosCosmicos = {

    galaxias: {
        categoria: "ESTRUTURAS CÓSMICAS",
        titulo: "Galáxias",

        descricao: "Galáxias são gigantescas estruturas mantidas pela gravidade. Elas podem conter bilhões ou até trilhões de estrelas, além de sistemas planetários, gás, poeira e matéria escura. Existem diferentes formatos, como espirais, elípticas e irregulares.",

        curiosidade: "A Via Láctea é uma galáxia espiral que possui centenas de bilhões de estrelas. Nosso Sistema Solar está localizado em um de seus braços espirais.",

        dados: [
            {
                nome: "Nossa galáxia",
                valor: "Via Láctea"
            },
            {
                nome: "Formato",
                valor: "Espiral barrada"
            },
            {
                nome: "Diâmetro aproximado",
                valor: "100 mil anos-luz"
            },
            {
                nome: "Estrelas",
                valor: "Centenas de bilhões"
            }
        ]
    },

    estrelas: {
        categoria: "CORPOS CELESTES",
        titulo: "Estrelas",

        descricao: "Estrelas são enormes esferas de plasma mantidas pela própria gravidade. Em seus núcleos ocorrem reações de fusão nuclear que transformam elementos leves em elementos mais pesados, liberando enormes quantidades de energia.",

        curiosidade: "O Sol é uma estrela de tamanho intermediário. Sua luz demora aproximadamente 8 minutos e 20 segundos para chegar à Terra.",

        dados: [
            {
                nome: "Nossa estrela",
                valor: "Sol"
            },
            {
                nome: "Temperatura superficial do Sol",
                valor: "5.500 °C"
            },
            {
                nome: "Composição principal",
                valor: "Hidrogênio e hélio"
            },
            {
                nome: "Fonte de energia",
                valor: "Fusão nuclear"
            }
        ]
    },

    nebulosas: {
        categoria: "BERÇOS ESTELARES",
        titulo: "Nebulosas",

        descricao: "Nebulosas são enormes nuvens interestelares compostas principalmente por gás e poeira. Algumas funcionam como regiões de formação de novas estrelas, enquanto outras surgem a partir dos materiais liberados por estrelas em estágios finais de evolução.",

        curiosidade: "A Nebulosa de Órion é uma das regiões de formação estelar mais conhecidas e pode ser observada a olho nu em condições favoráveis.",

        dados: [
            {
                nome: "Composição",
                valor: "Gás e poeira"
            },
            {
                nome: "Elemento abundante",
                valor: "Hidrogênio"
            },
            {
                nome: "Exemplo conhecido",
                valor: "Nebulosa de Órion"
            },
            {
                nome: "Função",
                valor: "Formação estelar"
            }
        ]
    },

    "buracos-negros": {
        categoria: "FENÔMENOS EXTREMOS",
        titulo: "Buracos Negros",

        descricao: "Buracos negros são regiões do espaço-tempo nas quais a gravidade é tão intensa que nada pode escapar de dentro do horizonte de eventos, nem mesmo a luz. Muitos se formam a partir do colapso gravitacional de estrelas muito massivas.",

        curiosidade: "O primeiro buraco negro cuja imagem foi divulgada foi o objeto M87*, localizado no centro da galáxia Messier 87. A imagem foi apresentada em 2019.",

        dados: [
            {
                nome: "Região limite",
                valor: "Horizonte de eventos"
            },
            {
                nome: "Força dominante",
                valor: "Gravidade"
            },
            {
                nome: "Exemplo conhecido",
                valor: "Sagittarius A*"
            },
            {
                nome: "Localização",
                valor: "Centro da Via Láctea"
            }
        ]
    }

};


const botoesExploracao = document.querySelectorAll("[data-explore]");

const modalCosmico = document.getElementById("modalCosmico");

const fecharModal = document.getElementById("fecharModal");

const categoriaModal = document.getElementById("categoriaModal");

const tituloModal = document.getElementById("tituloModal");

const descricaoModal = document.getElementById("descricaoModal");

const curiosidadeModal = document.getElementById("curiosidadeModal");

const dadosModal = document.getElementById("dadosModal");


function abrirExploracao(identificador) {

    const dados = dadosCosmicos[identificador];

    if (!dados) return;

    categoriaModal.textContent = dados.categoria;

    tituloModal.textContent = dados.titulo;

    descricaoModal.textContent = dados.descricao;

    curiosidadeModal.textContent = dados.curiosidade;

    dadosModal.innerHTML = "";

    dados.dados.forEach((item) => {

        const card = document.createElement("div");

        card.classList.add("dadoCosmico");

        const nome = document.createElement("span");

        nome.textContent = item.nome;

        const valor = document.createElement("strong");

        valor.textContent = item.valor;

        card.appendChild(nome);

        card.appendChild(valor);

        dadosModal.appendChild(card);

    });

    modalCosmico.classList.add("ativo");

    modalCosmico.setAttribute("aria-hidden", "false");

    fecharModal.focus();

    document.body.style.overflow = "hidden";

}


botoesExploracao.forEach((botao) => {

    botao.addEventListener("click", () => {

        const identificador = botao.dataset.explore;

        abrirExploracao(identificador);

    });

});



function encerrarExploracao() {

    modalCosmico.classList.remove("ativo");

    modalCosmico.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}

fecharModal.addEventListener("click", encerrarExploracao);


modalCosmico.addEventListener("click", (evento) => {

    if (evento.target === modalCosmico) {

        encerrarExploracao();

    }

});


document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape" && modalCosmico.classList.contains("ativo")) {

        encerrarExploracao();

    }

});


const campoEstelar = document.getElementById("campoEstelar");

const contexto = campoEstelar.getContext("2d");

let estrelas = [];

let larguraTela = window.innerWidth;

let alturaTela = window.innerHeight;

const quantidadeEstrelas = Math.min(
    Math.floor((larguraTela * alturaTela) / 4500),
    350
);



function criarEstrelas() {

    estrelas = [];

    for (let i = 0; i < quantidadeEstrelas; i++) {

        estrelas.push({

            x: Math.random() * larguraTela,

            y: Math.random() * alturaTela,

            tamanho: Math.random() * 1.8 + 0.3,

            opacidade: Math.random(),

            velocidade: Math.random() * 0.008 + 0.002

        });

    }

}




function ajustarCanvas() {

    larguraTela = window.innerWidth;

    alturaTela = window.innerHeight;

    const proporcao = Math.min(window.devicePixelRatio || 1, 2);

    campoEstelar.width = larguraTela * proporcao;

    campoEstelar.height = alturaTela * proporcao;

    campoEstelar.style.width = `${larguraTela}px`;

    campoEstelar.style.height = `${alturaTela}px`;

    contexto.setTransform(proporcao, 0, 0, proporcao, 0, 0);

    criarEstrelas();

}




function animarEstrelas() {

    contexto.clearRect(0, 0, larguraTela, alturaTela);

    estrelas.forEach((estrela) => {

        estrela.opacidade += estrela.velocidade;

        if (estrela.opacidade >= 1 || estrela.opacidade <= 0.15) {

            estrela.velocidade *= -1;

        }

        contexto.beginPath();

        contexto.arc(
            estrela.x,
            estrela.y,
            estrela.tamanho,
            0,
            Math.PI * 2
        );

        contexto.fillStyle = `rgba(220, 235, 255, ${estrela.opacidade})`;

        contexto.fill();

    });

    requestAnimationFrame(animarEstrelas);

}

ajustarCanvas();

animarEstrelas();

window.addEventListener("resize", ajustarCanvas);
