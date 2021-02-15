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
        setPage('Browse', getBrowseTemplate(articleData));
    });
}
