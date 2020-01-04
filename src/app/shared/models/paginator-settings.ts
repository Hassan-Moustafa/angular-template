export class PaginatorSettings {
    constructor(
            public length: number, 
            public pageSize: number, 
            public pageSizeOptions: number[], 
            public pageIndex: number) {}

    setPaginatorSettings(length? :number, pageSize?: number, pageSizeOptions?: number[], pageIndex?: number) {
        if(length !== null && length !== undefined) {
            this.length = length;
        }
        if(pageSize !== null && pageSize !== undefined) {
            this.pageSize = pageSize
        }
        if(pageSizeOptions !== null && pageSizeOptions !== undefined) {
            this.pageSizeOptions = pageSizeOptions;
        }
        if(pageIndex !== null && pageIndex !== undefined) {
            this.pageIndex = pageIndex;
        }
    }
}
