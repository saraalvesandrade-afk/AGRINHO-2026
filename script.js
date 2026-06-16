// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MENU RESPONSIVO
    // =========================
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("ativo");
        });
    }

    // =========================
    // ANIMAÇÃO AO ROLAR A PÁGINA
    // =========================
    const elementos = document.querySelectorAll(".animar");

    function mostrarElementos() {
        elementos.forEach(elemento => {
            const posicao = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicao < alturaTela - 100) {
                elemento.classList.add("mostrar");
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos();

    // =========================
    // VALIDAÇÃO DE FORMULÁRIO
    // =========================
    const formulario = document.querySelector("#formContato");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nome = document.querySelector("#nome").value.trim();
            const email = document.querySelector("#email").value.trim();

            if (nome === "" || email === "") {
                alert("Preencha todos os campos!");
                return;
            }

            alert("Mensagem enviada com sucesso!");
            formulario.reset();
        });
    }

});

// =========================
// BOTÃO VOLTAR AO TOPO
// =========================
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
