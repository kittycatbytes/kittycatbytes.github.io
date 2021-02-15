/* Page Consutructor Function */
class Page {
    constructor(name, template) {
        this.name = name;
        this.template = template;
        this.searchPane = false;
        this.settingsPane = false;
    }
    
    toggleSearchPane() {
        this.searchPane = !this.searchPane;
    }
    toggleSettingsPane() {
        this.settingsPane = !this.settingsPane;
    }
}

function setPage(name, template) {
    let page = new Page(name, template);
    NewsApp.setCurrentPage(name, template);
}