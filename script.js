const app = document.querySelector("#app");

function renderizar() {
    const rota = location.hash || "#inicio";

    const paginas = {
        "#inicio": "<h1>Início</h1><p>Bem-vindo ao Raízes Vivas.</p>",
        "#projetos": "<h1>Projetos</h1><p>Conheça nossas ações.</p>",
        "#contato": "<h1>Contato</h1><p>Entre em contato conosco.</p>"
    };

    app.innerHTML = paginas[rota] || paginas["#inicio"];
}

window.addEventListener("hashchange", renderizar);
renderizar();