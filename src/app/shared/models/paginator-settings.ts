export class PaginatorSettings {
    constructor(
            public length: number, 
            public pageSize: number, 
            public pageSizeOptions: number[], 
            public pageIndex: number) {}

    setPaginatorSettings(length? :number, pageSize?: number, pageSizeOptions?: number[], pageIndex?: number) {
        if(length) {
            this.length = length;
        }
        if(pageSize) {
            this.pageSize = pageSize
        }
        if(pageSizeOptions) {
            this.pageSizeOptions = pageSizeOptions;
        }
        if(pageIndex) {
            this.pageIndex = pageIndex;
        }
    }
}
