import { Author } from './author.model';

export type PostFlags = Partial<{
    starred: boolean;
}>;

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
    flags?: PostFlags;
    disqusIdentifier?: string;
    syntaxHighlighting?: {
        showLineNumbers?: boolean,
    }
}
