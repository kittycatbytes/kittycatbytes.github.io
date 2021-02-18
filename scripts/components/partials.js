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
    template += `<div id="articleTitle">${getArticleContent().title}</div>`;
    template += `<div id="articleBody"> <p>${getArticleContent().content[0]}</p>`;
    template += `<div id="articleImg1"><img src="./assets/img/displayart/P1880198_k_sm.jpg" /></div>`;
    template += `<div class="blurb">${getArticleContent().blurbs[0]}</div>`
    template += `<p>${getArticleContent().content[1]}</p><div class="blurb">${getArticleContent().blurbs[1]}</div>`
    template += `<div id="articleImg2"><img src="./assets/img/displayart/P1880257_k_sm.jpg" /></div>`;
    template += `<p>${getArticleContent().content[2]}</p>`
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
    return { 
        title: "The Disturbing Story of Daria Mayfair, Ghost Bride of Hell House",
        blurbs: [
            "'Anastasia Blackwood, Daria's rumored lover, stabbed Daria repeatedly as she stood on her wedding alter. Anastasia was immediately committed to nearby Sheppard Pratt institute, and still resides there to this day.'",
            "'It is rumored that Anastasia devolved into an obsessive madness. County records show that Daria filed a restraining order against Anastasia, though photographic evidence would seem to support a romantic relationship between the two.'"
        ],
        content: [
        `Jan 21, 2019 — Today marks the anniversary of the horrifying event that took place in St. Mary's College Church, 65 years ago. It is believed that her ghost still haunts the ruins in Patapsco Valley State Park in Illchester, Maryland. Since the 
        College was demolished in 1997, locals and visitors alike have reported seeing her apparition walking through the wooded area that surrounds the ruins. We interviewed the local Ellicott City historian, Barnaby Holmes, to get the full story behind her tragic tale.
        "The story is not for the faint of heart. The county records, crime reports, and preserved photographs depict a complicated story, that leaves us with more questions than answers," says Holmes. In the archives of the Ellicott City Historic Institute, 
        we reviewed each piece of this disturbing puzzle in hopes of unraveling the mid-century mystery behind the "Ghost Bride of Hell House".`,
        `Investigative reports show that Anastasia Blackwood, Daria's rumored jealous lover, stabbed Daria repeatedly on her wedding day, as she stood at the alter. Anastasia was immediately committed to nearby psychiatric hospital, Sheppard Pratt institute, 
        and still resides there to this day. Reports also indicate that Daria Mayfair filed a restraining order against Anastasia on account of stalking and threats of physical violence. However, the photographs preserved from the time, paint a different picture.
        "There was clearly a romance between the two. These photographs show their intimacy and relationship, the handwritten dates on these old photographs span nearly five years," Holmes reports. It is not clear what sparked the turn of events in their 
        romance. It is rumored by locals that Daria drove Anastasia to madness after suddenly cutting her off, and pursuing her brother, Gregory Blackwood. 90 year old local resident, Layla Drummond, has a theory.`,
        `"[Ellicott City] was a small town back then. Everybody knew everybody's business. I remember seeing them around town. They didn't try to hide their relationship. It was very controversial at the time, two women together like that. Then all of a 
        sudden, I started seeing them arguing around town. I'm not sure what happened, but they were fighting over something. I think their families found out. Either that or Anastasia did something that Daria didn't like. I'm not sure what was more 
        controversial, Daria and Anastasia flaunting themselves around, or that Daria tried to marry Anastasia's brother not but three months after they started fighting. Obviously, the murder was all over the news. It was all anybody talked about for some time," Drummond explains.
        It is said that a ghost has unfinished business, and must fulfill something before they can pass onto the other side. If this is true, what business will Daria fulfill to pass on, or will she forever haunt the Hell House ruins?`
    ]

    }
}