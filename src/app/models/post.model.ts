import { Author } from './author.model';

export interface Post {
    id?: number;
    title: string;
    slug?: string;
    link?: string;
    text?: string;
    date: string;
    author: Author;
    image: string;
    content: string;
    tags?: string[];
    disqusIdentifier?: string;
}