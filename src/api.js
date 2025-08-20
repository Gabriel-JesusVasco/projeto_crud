const urlPrincipal = "http://localhost:3000";
const api = {
    async buscarDados() {
        try {
            const repostaRequisicao = await axios.get(`${urlPrincipal}/pensamentos`);
            return await repostaRequisicao.data;
        } catch (error) {
            alert('Algum erro inesperado aconteceu na busca de dados');
            throw error;
        };
    },
    async salvarNovoDado(pensamento) {
        try {
            const repostaRequisicao = await axios.post(`${urlPrincipal}/pensamentos`, pensamento);
            return await repostaRequisicao.data;
        } catch (error) {
            alert('Algum erro inesperado aconteceu no salvamento de dados');
            throw error;
        };
    },
    async buscarPensamentoParaAlterar(id) {
        try {
            const repostaRequisicao = await axios.get(`${urlPrincipal}/pensamentos/${id}`);
            return await repostaRequisicao.data;
        } catch (error) {
            alert('Algum erro inesperado aconteceu na busca do pensamento');
            throw error;
        }
    },
    async alterarPensamento(pensamento) {
        try {
            const repostaRequisicao = await axios.put(`${urlPrincipal}/pensamentos/${pensamento.id}`,pensamento );
            return await repostaRequisicao.data;
        } catch (error) {
            alert('Algum erro inesperado aconteceu na alteração do pensamento');
            throw error;
        };
    },
    async apagarPensamento(id) {
        try {
            const repostaRequisicao = await axios.delete(`${urlPrincipal}/pensamentos/${id}`);
        } catch (error) {
            alert('Algum erro inesperado aconteceu na exclusão do pensamento');
            throw error;
        };
    },
};

export default api;