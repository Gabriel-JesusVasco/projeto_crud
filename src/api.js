const api = {
    async buscarDados() {
        try {
            const repostaRequisicao = await fetch('http://localhost:3000/pensamentos');
            return await repostaRequisicao.json();
        } catch (error) {
            alert('Algum erro inesperado aconteceu na busca de dados');
            throw error;
        };
    },
    async salvarNovoDado(pensamento) {
        try {
            const repostaRequisicao = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await repostaRequisicao.json();
        } catch (error) {
            alert('Algum erro inesperado aconteceu no salvamentode dados');
            throw error;
        };
    }
};

export default api;