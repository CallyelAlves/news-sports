import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';

const accessToken = environment.accessToken;
const repositoryName = 'sports-news';

async function loadNews() {
  const client = prismic.createClient(repositoryName, { accessToken });
  const newsList = await client.getAllByType('sport'); // Supondo que o tipo seja 'news'

  const container = document.getElementById('news-container');

  // Limpar container antes de adicionar novas notícias
  container.innerHTML = '';

  // Criar cards para cada notícia
  newsList.forEach(news => {
      const { title, content } = news.data; // Assumindo que o campo 'slug' identifica a notícia
      const [ slugs ] = news.slugs;
      const { uid } = news;

      const titleHTML = prismic.asHTML(title);
      const descriptionHTML = prismic.asHTML(content).substring(0, 100) + '...'; // Limitar descrição no card

      const card = createNewsCard(titleHTML, descriptionHTML, slugs);

      // Adicionar listener para o botão "Leia mais"
      card.querySelector('button').addEventListener('click', () => {
          window.location.href = `/public/pages/news.html?uid=${uid}&slug=${slugs}`;
      });

      // Adicionar o card ao container
      container.appendChild(card);
  });
}

// Carregar as notícias ao inicializar
loadNews();