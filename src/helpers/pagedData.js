export default class PagedData {
    constructor(pageSize, data) {
        this.pageSize = pageSize;
        this.data = data;
    }

    getPages() {
        var pages = 1;
        if(this.data.length > 0 && (this.pageSize < this.data.length)) {
            pages = this.data.length / this.pageSize;
            pages = (this.data.length % this.pageSize == 0) ? pages : pages + 1;
        }
        return pages;
    }

    getPage(pageNo) {
        var page = this.data;
        if(this.data.length > 0 && (this.pageSize < this.data.length)) {
            pageNo--;
            var start = pageNo * this.pageSize;
            var end = start + this.pageSize;
            page = this.data.slice(start, end);
        } 
        return page;
    }
}