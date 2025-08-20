import api from "./api.js";
const listaPensamentos = document.getElementById('lista-pensamentos');
const renderizacao = {
  async exporPensamentosTela() {
    listaPensamentos.innerHTML = ''
    try {
      let pensamentos = await api.buscarDados();
      pensamentos.forEach(renderizacao.adicionarPensamentosLista);
    } catch (error) {
      alert('Ocorreu algum erro na renderização das citações');
    };
  },
  adicionarPensamentosLista(pensamento) {
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

    const botaoEditarPensamento = document.createElement('button');
    botaoEditarPensamento.classList.add('botao-editar');

    const iconeEditarPensamento = document.createElement('img');
    iconeEditarPensamento.classList.add('botao-editar')
    iconeEditarPensamento.src = "assets/imagens/icone-editar.png";
    
    iconeEditarPensamento.addEventListener('click', ()=>{
        renderizacao.preencherFormularioAlteracao(pensamento.id);
    })

    const iconeApagarPensamento = document.createElement('img');
    iconeApagarPensamento.classList.add('botao-excluir');
    iconeApagarPensamento.src = "assets/imagens/icone-excluir.png";

    iconeApagarPensamento.addEventListener('click', async ()=>{
      await api.apagarPensamento(pensamento.id);
      renderizacao.exporPensamentosTela();
    });

    const iconesPensamento = document.createElement('div');
    iconesPensamento.classList.add('icones');
    iconesPensamento.append(iconeEditarPensamento);
    iconesPensamento.append(iconeApagarPensamento);

    itemListaPensamentos.append(aspasImagem);
    itemListaPensamentos.append(pensamentoConteudo);
    itemListaPensamentos.append(pensamentoAutoria);
    itemListaPensamentos.append(iconesPensamento);
    listaPensamentos.append(itemListaPensamentos);

    if (listaPensamentos !== "") {
      const secaoListaVazia = document.querySelector('.lista_vazia');
      secaoListaVazia.classList.add('hidden');
    }
  },
  async preencherFormularioAlteracao(pensamentoId){
      const pensamento = await api.buscarPensamentoParaAlterar(pensamentoId);
      document.getElementById('pensamento-id').value = pensamento.id;
      document.getElementById('pensamento-conteudo').value = pensamento.conteudo;
      document.getElementById('pensamento-autoria').value = pensamento.autoria;
  },
  
};
export default renderizacao;

