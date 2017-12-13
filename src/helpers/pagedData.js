export default class PagedData {
    constructor(pageSize, data) {
        this.pageSize = pageSize;
        this.data = data;
    }

    getPages() {
        var pages = 1;
        if(this.data.length > 0) {
            pages = this.data.length / this.pageSize;
            pages = (this.data.length % this.pageSize == 0) ? pages : pages + 1;
        }
        return pages;
    }

    getPage(pageNo) {
        return this.data;
    }
}