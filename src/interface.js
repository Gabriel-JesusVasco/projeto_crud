import api from "./api.js";
const renderizacao = {
    async exporPensamentosTela() {
        const listaPensamentos = document.getElementById('lista-pensamentos');
        try {
        let pensamentos = await api.buscarDados();
        pensamentos.forEach(pensamento => {
            listaPensamentos.innerHTML += `
            <li class="li-pensamento" data-id=${pensamento.id}>
              <img src="assets/imagens/aspas-azuis.png" alt="aspas azuis" class="icone-aspas">
              <div class="pensamento-conteudo">${pensamento.conteudo}</div>
              <div class="pensamento-autoria">${pensamento.autoria}</div>
            </li>
            `
        });
        } catch (error) {
          alert('Ocorreu algum erro')
        }
    }
}
export default renderizacao;

