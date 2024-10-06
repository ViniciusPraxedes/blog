const articles = ["Article 1", "Article 2"];

function showSuggestions() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const suggestionsBox = document.getElementById('suggestions');

  suggestionsBox.innerHTML = '';

  if (input.length === 0) {
    return;
  }

  const filteredArticles = articles.filter(article => article.toLowerCase().includes(input));

  filteredArticles.forEach(article => {
    const suggestionItem = document.createElement('div');
    suggestionItem.innerText = article;
    suggestionItem.className = 'suggestion-item';

    suggestionItem.onclick = function() {
      document.getElementById('searchInput').value = article;
      suggestionsBox.innerHTML = '';
    };

    suggestionsBox.appendChild(suggestionItem);
  });
}

function searchArticles() {
  const query = document.getElementById('searchInput').value.toLowerCase();

  if (query.includes("article 1")) {
    window.location.href = "article1.html";
  } else if (query.includes("article 2")) {
    window.location.href = "article2.html";
  } else {
    alert("Article not found. Please search for 'Article 1' or 'Article 2'.");
  }
}
