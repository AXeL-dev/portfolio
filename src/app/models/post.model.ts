import { Author } from './author.model';

export interface Post {
    id: number;
    title: string;
    link?: string;
    date: string;
    author: Author;
    image: string;
    content: string;
    tags?: string[];
}