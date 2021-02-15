/* Get Articles Metadata */
function getArticlesMetadata() {
    //return fetch('forceerror')
    return fetch('data.json')
        .then(response => {
            if (response.status !== 200) {
                let errorPage = new Page('Error', getErrorTemplate(`${response.status}:${response.statusText}`));
                NewsApp.setCurrentPage(errorPage);
                return;
            }
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

//Update Selection Article for All Pages
function setSelectionArticle(i) {
    let articles = NewsApp.services.articleMetadata;
    let current = NewsApp.currentArticle;
    if (i !== NewsApp.currentArticle) {
        document.querySelectorAll(`.article-img`).item(current).classList.remove('selected');
        NewsApp.currentArticle = i;
    }
    document.querySelector('#articleTitle').innerHTML = articleTitle(articles[i]);
    document.querySelector('#displayArt').innerHTML = displayArt(articles[i]);
    document.querySelectorAll(`.article-img`).item(i).focus();
    document.querySelectorAll(`.article-img`).item(i).classList.add('selected');
}

/* Highlight Current Action and Update App Config */
function setAction(i) {
    let currentAction = NewsApp.currentAction;
    document.querySelectorAll('.article-action').item(currentAction).classList.remove('selected');
    document.querySelectorAll('.article-action').item(i).classList.add('selected');
    NewsApp.currentAction = i;
}

/* Object Literal with Functions for Article Actions */
const articleActions = {
    Play: (title) => { alert(`Play ${title}`); },
    Back: () => {
        setPage('Browse', getBrowseTemplate()); 
        NewsApp.currentAction = 0;
    },
    Rate: (title) => { alert(`Rate ${title}`); },
    Episodes: (title) => { alert(`Episodes ${title}`); }
}