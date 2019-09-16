import { Education } from './education.model';

export interface Experience extends Education {
    description?: string[];
}