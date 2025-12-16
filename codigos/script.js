document.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById('btn-buscar');
    const conteudoPrincipal = document.querySelector('.conteudo-principal');

    if (btnBuscar) {
        btnBuscar.addEventListener('click', () => {
            const mensagem = document.createElement('p');
            mensagem.textContent = 'Buscando restaurantes... (Funcionalidade a ser implementada)';
            conteudoPrincipal.innerHTML = '';
            conteudoPrincipal.appendChild(mensagem);
            
        });
    }

    console.log('Sistema de Delivery - Script carregado com sucesso!');
});