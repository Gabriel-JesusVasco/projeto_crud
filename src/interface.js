import api from "./api.js";

const listaPensamentos = document.getElementById('lista-pensamentos');
const renderizacao = {
    async exporPensamentosTela() {
        try {
        let pensamentos = await api.buscarDados();
        pensamentos.forEach(renderizacao.adicionarPensamentosLista);
        } catch (error) {
          alert('Ocorreu algum erro')
        };
    },
    adicionarPensamentosLista(pensamento){
      const itemListaPensamentos = document.createElement("li");
      itemListaPensamentos.setAttribute('data-id', pensamento.id);
      itemListaPensamentos.classList.add("li-pensamento");

      const aspasImagem = document.createElement('img');;
      aspasImagem.src = "assets/imagens/aspas-azuis.png"
      aspasImagem.classList.add("icone-aspas");

      const pensamentoConteudo = document.createElement('div');
      pensamentoConteudo.classList.add("pensamento-conteudo");
      pensamentoConteudo.textContent = pensamento.conteudo;

      const pensamentoAutoria = document.createElement("div");
      pensamentoAutoria.classList.add("pensamento-autoria");
      pensamentoAutoria.textContent = pensamento.autoria;

      itemListaPensamentos.append(aspasImagem);
      itemListaPensamentos.append(pensamentoConteudo);
      itemListaPensamentos.append(pensamentoAutoria);
      listaPensamentos.append(itemListaPensamentos)
    }
};
export default renderizacao;

