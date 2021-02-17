/* Template Literals and Functions */

/* Browse Page */
function getBrowseTemplate(articles) {
    articles = articles || NewsApp.services.articleMetadata;
    let searchTerm = "Ellicott City st mary's college hell house ruins";
    let template = '<div id="browsePage" class="news-page">';
    template += '<div id="searchArea">'
    template += `<div id="searchBar"><input type="text" value="${searchTerm}"></input>
                <img src="./assets/img/search.png"/></div>`;
    template += `<div id="searchTitle">Displaying results 1-10 out of 27 for <b>${searchTerm}</b></div>`;
    template += '</div>';
    template += `<div id="myList">${myList(articles)}</div>`;
    template += '</div>';
    return template;
}

/* Details Page */
function getDetailsTemplate(article) {
    let template = '<div id="detailsPage" class="news-page">';
    template += `<div id="articleTitle">${article.title}}</div>`;
    template += `<div id="articleBody"> ${getArticleContent()}`;
    template += `<div id="articleImg1"><img src="./assets/img/displayart/P1880198_k_sm.jpg" /></div>`;
    template += `<div id="articleImg2"><img src="./assets/img/displayart/P1880198_k_sm.jpg" /></div>`;
    template += '</div>';
    template += '</div>';
    return template;
}


function myList(articles) {
    let template = '';
    /* for all, change to line below, but wanted to be exact according to specs of 5 by 2 */
/*     for (i = 0; i < articles.length; i++) { */
    for (i = 0; i < 10; i++) {
        template += `<div class="article-item">
        <div class="article-img">
        <img src="./assets/img/newsimg/${articles[i].articleId}.jpeg" alt="${articles[i].title}"/></div>
        <div class="article-content">
        <div class="article-title" >${articles[i].title}</div>
        <div class="article-blurb"">${articles[i].blurb}</div>
        </div>
        </div>`;
    }
    return template;
}

function getArticleContent () {
    return `Aliquam sed tincidunt ligula. Nam cursus fermentum lobortis. Aenean vel cursus leo. Proin mattis tristique purus, ac tristique dolor volutpat vehicula. Vestibulum nec diam vitae ante porttitor ultricies. Integer tempus sodales dapibus. Integer blandit enim id porta faucibus. In sodales nisl ac felis rhoncus, nec feugiat odio porttitor. Cras quis enim sollicitudin velit vulputate ultricies. Nulla facilisi. Fusce dictum justo non metus rhoncus interdum. Donec convallis porta augue, sed consequat mi lacinia vitae. Proin commodo augue eu mi eleifend, ut volutpat nulla euismod. Pellentesque elementum ex arcu, dapibus mollis ante malesuada eget. Suspendisse quis blandit lacus.

    Donec mattis eu sapien et tincidunt. Vestibulum auctor non nisi vel venenatis. Vestibulum egestas varius ante vitae consequat. Phasellus facilisis commodo posuere. Maecenas mauris enim, suscipit eget dolor quis, vehicula egestas odio. Aliquam ultricies orci at pharetra venenatis. Sed nisi elit, placerat non erat ac, posuere lacinia est. Etiam vitae magna commodo, vehicula enim non, commodo lacus. Curabitur sodales dignissim sem, id blandit eros blandit et. Phasellus interdum finibus blandit. Fusce nec volutpat dui, ac lacinia orci. Phasellus in velit fermentum nulla placerat dignissim. Phasellus commodo, metus quis rhoncus eleifend, odio quam consectetur dui, in interdum mi turpis eget dui.
    
    Aliquam suscipit purus vel lorem feugiat mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam scelerisque tempus nisl id vehicula. Nam urna nisl, tempus nec felis eu, semper porttitor augue. Nam semper in sapien ac ullamcorper. Quisque laoreet metus id lectus iaculis, nec lobortis lectus volutpat. Etiam ornare sed augue iaculis tempus. Nulla blandit ornare ligula id congue. Sed quis orci diam. Sed a sagittis massa. Nulla posuere nisi nec dui venenatis efficitur. Nulla facilisi.
    
    Nunc id elit lectus. Phasellus ornare auctor augue. Nulla pellentesque ornare enim vel rhoncus. Morbi feugiat urna vel odio luctus, nec feugiat purus egestas. Nam at finibus leo. Vestibulum blandit, purus sit amet semper convallis, neque sem lacinia felis, vulputate pulvinar ipsum augue semper dolor. Sed tristique enim at turpis dictum, ut suscipit magna dictum. Donec id quam feugiat, pharetra libero non, consectetur ante. Mauris pulvinar, mauris in iaculis scelerisque, enim orci bibendum turpis, ut interdum sem arcu at tortor. Morbi feugiat malesuada quam, ut ullamcorper sem dignissim vitae. Morbi id libero eget urna faucibus fringilla quis at neque.
    
    Morbi commodo sodales tempor. Nulla rutrum mattis mauris, dignissim placerat sem lacinia ac. Phasellus ut nulla at libero molestie facilisis sed nec dui. Vestibulum ligula arcu, pulvinar at porta at, venenatis id purus. Maecenas sed volutpat augue. Vestibulum in fringilla elit, vel blandit quam. Pellentesque molestie lacus mattis vehicula dapibus. Nulla varius sed lorem ultricies semper.
    
    Nunc nec metus ut nisl auctor consequat. Quisque eu elit eu enim imperdiet facilisis. Phasellus aliquet, libero ac varius finibus, diam purus bibendum purus, non efficitur eros mi sed tortor. Sed accumsan purus non leo ullamcorper, sit amet lacinia dui sodales. Donec vehicula consequat ipsum vitae malesuada. Nam vestibulum urna massa, sit amet sollicitudin dolor interdum sed. Praesent mi eros, facilisis sed purus et, lacinia eleifend felis. Nam at sapien vel neque iaculis ullamcorper quis id justo. Nullam molestie ipsum lobortis lacus lacinia accumsan. Nulla convallis lacus sit amet massa aliquam malesuada.
    
    Morbi varius diam sed leo pulvinar porttitor. Praesent finibus imperdiet massa, a aliquet dolor egestas eleifend. Pellentesque accumsan purus vel porttitor feugiat. In scelerisque porttitor nisl posuere suscipit. Quisque quis tempus risus. In posuere dapibus arcu vitae varius. Curabitur consectetur ipsum lacus, eu varius nisl tempus in. Sed malesuada pretium diam quis vestibulum.
    
    Fusce augue neque, egestas sit amet vestibulum sit amet, vulputate eget dui. Nunc facilisis tincidunt dui fringilla ornare. Ut iaculis vel massa id egestas. Mauris tristique nisl augue, eu tincidunt mi vehicula ac. Duis eu arcu pulvinar, faucibus dui eget, auctor massa. Sed condimentum elit arcu, id consectetur leo ornare eget. Curabitur dapibus diam non dignissim bibendum.
    
    Pellentesque blandit nunc ipsum. Mauris sed varius est. Nunc laoreet nisl ac convallis euismod. Pellentesque tempor vehicula egestas. Morbi sit amet enim ligula. Suspendisse vitae feugiat erat, ut accumsan risus. Nunc interdum mauris vel nisl aliquet maximus. Ut ut turpis laoreet, rhoncus arcu nec, viverra urna. Ut lectus enim, iaculis vel ultrices ac, scelerisque eu dolor. Vestibulum et iaculis arcu, ac rhoncus urna. Sed facilisis id est sit amet vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Maecenas ornare turpis mauris, et tempor massa lacinia vel. Aenean pulvinar libero pellentesque, volutpat sem mattis, hendrerit nisl. Proin scelerisque leo velit, vitae tempus leo viverra vel. Phasellus gravida dignissim ipsum, a condimentum tortor ultrices nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum magna mollis magna tincidunt sodales. Nulla egestas varius mi vel rutrum. Praesent tempor luctus nibh, vel feugiat lorem convallis sed. Cras a vestibulum velit. Phasellus sollicitudin velit mi, sed dictum enim mollis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut maximus dui vitae lacus euismod, eget placerat arcu tempor. Donec a augue imperdiet, malesuada mauris luctus, mattis nulla. Phasellus in ligula eget magna hendrerit dictum. Nulla dapibus sollicitudin leo, sed lacinia erat tincidunt eget.`;
}