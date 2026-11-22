function salvarCookie(nome, valor, dias) {
    const data = new Date();

    data.setTime(data.getTime()+ (dias *24 * 60 * 60 * 1000));

    document.cookie = `${nome}=${valor}; expires=${data.toUTCString()}; path=/; SameSite=Lax`;
}

function buscarCookie(nome) {
    const cookie = document.cookie.split("; ");

    const cookieEncontrado = cookie.find(cookie =>
        cookie.startsWith(nome + "=")
    );

    return cookieEncontrado ? cookieEncontrado.split("=")[1] : null;
}

function definirPreferencia(valor) {
    salvarCookie("preferenciaCookies", valor, 365);
    avisoCookies.style.display = "none";
}

const avisoCookies = document.getElementById("avisoCookies");
const aceitarCookies = document.getElementById("aceitarCookies");
const recusarCookies = document.getElementById("recusarCookies");
const abrirPreferenciasCookies = document.getElementById("abrirPreferenciasCookies");

const preferenciaCookies = buscarCookie("preferenciaCookies");

if (preferenciaCookies) {
    avisoCookies.style.display = "none";
}

aceitarCookies.addEventListener("click", () => {
    definirPreferencia("aceito");
});

recusarCookies.addEventListener("click", () => {
    definirPreferencia("recusado");
});

if (abrirPreferenciasCookies && avisoCookies) {
    abrirPreferenciasCookies.addEventListener("click", () => {
        avisoCookies.style.display = "block";
    });
}

