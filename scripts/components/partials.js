/* Template Literals and Functions */

/* Init Page */
const initTemplate = `<div id="onloadPage" class="news-page"><img src="../assets/img/news.gif"/></div>`;

/* Browse Page */
function getBrowseTemplate(articles) {
    articles = articles || NewsApp.services.articleMetadata;
    let i = NewsApp.currentarticle;
    let template = '<div id="browsePage" class="news-page">';
    template += '<div id="banner"><div id="bannerLeft">'
    template += `<div id="articleTitle">${articleTitle(articles[i])}</div>`;
    template += '<div id="listTitle">My List</div></div>';
    template += `<div id="displayArt">${displayArt(articles[i])}</div>`;
    template += '</div>';
    template += `<div id="myList">${myList(articles, i)}</div>`;
    template += '</div>';
    return template;
}

/* Details Page */
function getDetailsTemplate(articles) {
    let i = NewsApp.currentarticle;
    let template = '<div id="detailsPage" class="news-page">';
    template += '<div id="bannerLeft">';
    template += `<div id="articleTitle">${articleTitle(articles[i])}</div>`;
    template += articleActionsComponent();
    template += '</div>'; 
    template += `<div id="displayArt">${displayArt(articles[i])}</div>`;
    template += '</div>';
    return template;
}

/* Error Page */
function getErrorTemplate(errorMsg) {
    errorMsg = errorMsg ? errorMsg : 'The application has encountered an error';
    let template = `<div class="news-error">${errorMsg}</div>`;
    return template;
}

function displayArt(currentItem) {
    return `<img src="./assets/img/displayart/${currentItem.articleId}.jpg" alt="${currentItem.title}"/>`;
}

function articleTitle(currentItem) {
    return `<div class="article-title">${currentItem.title}</div>
            <div class="article-details">${currentItem.blurb}</div>`;
}

function myList(articles, current) {
    let template = '';
    /* for all, change to line below, but wanted to be exact according to specs of 5 by 2 */
/*     for (i = 0; i < articles.length; i++) { */
    for (i = 0; i < 10; i++) {
        template += i === current ? `<div class="article-img selected"><img src="./assets/img/newsimg/${articles[i].articleId}.jpg" alt="${articles[i].title}"/></div>` : 
                              `<div class="article-img"><img src="./assets/img/newsimg/${articles[i].articleId}.jpg" alt="${articles[i].title}"/></div>`;
    }
    return template;
}

function articleActionsComponent() {
    let template = '<div id="articleActions">';
    for (let i in articleActions) {
        template += i === 'Play' ? `<div class="article-action selected">${i}</div>` : 
                                    `<div class="article-action">${i}</div>`;
    }
    template += '</div>';
    return template;
}
