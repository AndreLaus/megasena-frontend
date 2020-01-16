import { PageableReturn } from '../pageable-model/pageable-return';
import { Concurso } from './concurso';

export interface ConcursosPaginados extends PageableReturn {
    content: Concurso[];
}