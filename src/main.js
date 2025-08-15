import renderizacao from "./interface.js";
import api from "./api.js";
const formularioEnvioPensamento = document.getElementById('pensamento-form');
const botaoCancelar = document.getElementById('botao-cancelar');
document.addEventListener('DOMContentLoaded', () => {
    renderizacao.exporPensamentosTela();
    formularioEnvioPensamento.addEventListener('submit', manipularEnvioFormulario)
    botaoCancelar.addEventListener('click', () => {
        const inputConteudo = document.getElementById('pensamento-conteudo');
        const inputAutoria = document.getElementById('pensamento-autoria');
        inputConteudo.value = ""
        inputAutoria.value = ""
    })
})
async function manipularEnvioFormulario(evento) {
evento.preventDefault();
const id = document.getElementById('pensamento-id').value;
const conteudo = document.getElementById('pensamento-conteudo').value;
const autoria = document.getElementById('pensamento-autoria').value;
    try {
        if (id) {
            await api.alterarPensamento({ id, conteudo, autoria})
        }
        else {
            await api.salvarNovoDado({ conteudo, autoria });
        }
        renderizacao.exporPensamentosTela();
    } catch (error) {
        alert('algum erro inesperado ocorreu');
    };
};