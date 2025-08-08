const api = {
    async buscarDados() {
        try {
            const repostaRequisicao = await fetch('http://localhost:3000/pensamentos');
            return await repostaRequisicao.json();
        } catch (error) {
            alert('Algum erro inesperado aconteceu na busca de dadosv');
            throw error;
        };
    }
}

export default api