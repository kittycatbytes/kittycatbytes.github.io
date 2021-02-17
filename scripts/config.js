/* Application Configuration */
var NewsApp = {
    selector: document.querySelector("#main"),
    setCurrentPage: function (name, template) {
        this.currentPage = name;
        document.title = name;
        this.selector.innerHTML = template;
    },
    currentPage: null,
    currentarticle: 0,
    currentAction: 0,
    services: {
        articleMetadata: null
    }
};

function initApp() {
    getArticleMetadata().then(articleData => {
        console.log("article data: " + JSON.stringify(articleData));
        NewsApp.services.articleMetadata = articleData;
        setPage('BizzFind Search Results', getBrowseTemplate(articleData));
        return articleData;
    }).then(articleData => {
        let article = articleData[7];
        console.log("article is: " + JSON.stringify(articleData[7]));
        document.querySelectorAll(`.article-title`).forEach(item => item.addEventListener("click", function() {
            setPage(article.title, getDetailsTemplate(article));
          }));
    });
}
