import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';

const accessToken = 'MC5ad3FrNVJBQUFDRUFyMTFB.77-9eO-_ve-_ve-_ve-_ve-_ve-_vQHvv73vv73vv703Au-_ve-_vRdofh5gAmDvv73vv73vv73vv73vv73vv71JKO-_vQ';
const repositoryName = 'sports-news';

// Função para carregar a notícia completa
async function loadFullNews() {
    const client = prismic.createClient(repositoryName, { accessToken });

    // Pegar o slug da URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const uid = urlParams.get('uid');

    if (slug) {
        // Buscar a notícia pelo slug
        
        const news = await client.getByUID('sport', uid, slug);

        const { title, description, content } = news.data; // Assumindo que 'content' contém o corpo da notícia

        const container = document.getElementById('news-container');

        // Criar o HTML completo da notícia
        const titleHTML = prismic.asHTML(title);
        // const descriptionHTML = prismic.asHTML(description);
        const contentHTML = prismic.asHTML(content);

        container.innerHTML = `
            <h1>${titleHTML}</h1>
            <div>${contentHTML}</div>
        `;
    } else {
        document.getElementById('news-container').innerHTML = `<p>Notícia não encontrada.</p>`;
    }
}

// Carregar a notícia completa ao inicializar
loadFullNews();
