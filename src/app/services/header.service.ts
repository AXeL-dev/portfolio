import { Menu } from '../models/menu.model';

export class HeaderService {

    title: string = 'AXeL-dev';

    repositoryLink: string = '';//'https://github.com/AXeL-dev/portfolio';

    menu: Menu[] = [
        { name: 'Home', id: '', link: '/' },
        //{ name: 'Good At', id: 'service-section', link: '/' },
        { name: 'Skills', id: 'skill-section', link: '/' },
        { name: 'Tools & Technologies', id: 'technology-section', link: '/' },
        { name: 'Education', id: 'education-section', link: '/' },
        { name: 'Experience', id: 'experience-section', link: '/' },
        { name: 'Portfolio', id: 'portfolio-section', link: '/' },
        { name: 'Fun Fact', id: 'fun-fact-section', link: '/' },
        { name: 'Blog', id: 'blog-section', link: '/' }
    ];
}