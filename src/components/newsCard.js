function createNewsCard(title, description, url) {
    const card = document.createElement('div');
    card.classList.add('news-card');
  
    card.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
      <button data-slug="${url}">Leia mais</button>
    `;
  
    return card;
}
  