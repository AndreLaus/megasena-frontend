import { Pageable } from './pageable';
import { PageableSort } from './pageable-sort';

export interface PageableReturn {
    pageable: Pageable
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    sort: PageableSort;
    empty: boolean;
}