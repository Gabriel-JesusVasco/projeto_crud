import renderizacao from "./interface.js";
import api from "./api.js";
const formularioEnvioPensamento = document.getElementById('pensamento-form');
document.addEventListener('DOMContentLoaded', () => {
    renderizacao.exporPensamentosTela();
    formularioEnvioPensamento.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        const idPensamento = document.getElementById('pensamento-id').value;
        const conteudo = document.getElementById('pensamento-conteudo').value;
        const autoria = document.getElementById('pensamento-autoria').value;
        if (conteudo != "" && autoria != "") {
            try {
                await api.salvarNovoDado({conteudo, autoria})
                renderizacao.exporPensamentosTela()

            } catch (error) {
                alert('algum erro inesperado ocorreu')
            }
        } else {
            alert('Você deve digitar algo antes de enviar o formulario!')
        }
    })
})