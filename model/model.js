export function carregarBancoDeDados() {
    return fetch('./bd.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
}