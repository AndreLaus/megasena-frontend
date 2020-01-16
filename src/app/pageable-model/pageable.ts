import { PageableSort } from './pageable-sort';

export interface Pageable {
    
    sort: PageableSort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
    
}