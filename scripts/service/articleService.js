/* Get Articles Metadata */
function getArticleMetadata() {
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