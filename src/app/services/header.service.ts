import { Menu } from '../models/menu.model';

export class HeaderService {

    title: string = 'AXeL-dev';

    repositoryLink: string = '';//'https://github.com/AXeL-dev/portfolio';

    menu: Menu[] = [
        { name: 'Home', id: '', link: '/' },
        { name: 'Skills', id: 'good-at-section', link: '/' },
        //{ name: 'Good At', id: 'good-at-section', link: '/' },
        //{ name: 'Skills', id: 'skill-section', link: '/' },
        //{ name: 'Tools', id: 'service-section', link: '/' },
        { name: 'Technologies', id: 'technologies-section', link: '/' },
        { name: 'Education', id: 'education-section', link: '/' },
        //{ name: 'Experience', id: 'experience-section', link: '/' },
        //{ name: 'Fun Fact', id: 'fun-fact-section', link: '/' },
        { name: 'Featured Work', id: 'featured-work-section', link: '/' },
        { name: 'Blog', id: 'blog-section', link: '/' }
    ];
}