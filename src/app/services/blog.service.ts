import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { SlugifyPipe } from '../pipes/slugify.pipe';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

    constructor(private slugifyPipe: SlugifyPipe) {
        this.generateSlugs();
    }

    private authors: { [key: string]: Author } = {
        'AXeL': {
            name: 'AXeL',
            image: './assets/img/avatar.jpg',
            email: 'contact.axel.dev@gmail.com',
            bio: 'A full-stack developer and freelancer with a passion for thoughtful coding, collaboration, and open-source. I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally make the impossible possible.'
        }
    };

    private posts: Post[] = [
        {
            id: 21,
            title: 'React, Vue or Angular?',
            date: '2019/11/30',
            author: this.authors['AXeL'],
            image: './assets/img/posts/R-V-A.jpg',
            content: './assets/blog/react-vue-or-angular.md',
            tags: [
                'Comparison',
                'Javascript',
                'Front-end'
            ]
        },
        {
            id: 20,
            title: '!! (not not) operator in JavaScript',
            date: '2019/10/25',
            author: this.authors['AXeL'],
            image: './assets/img/posts/javascript.png',
            content: './assets/blog/not-not-operator-in-javascript.md',
            tags: [
                'Javascript',
                'Front-end'
            ]
        },
        {
            id: 19,
            title: 'Some useful design patterns',
            date: '2019/09/28',
            author: this.authors['AXeL'],
            image: './assets/img/posts/design-patterns.jpeg',
            content: './assets/blog/some-useful-design-patterns.md',
            tags: [
                'Design patterns',
                'Architecture',
                'Back-end',
                'PHP'
            ]
        },
        {
            id: 18,
            title: 'Why i switched to Angular',
            date: '2019/09/21',
            author: this.authors['AXeL'],
            image: './assets/img/posts/angular.jpg',
            content: './assets/blog/why-i-switched-to-angular.md',
            tags: [
                'Angular',
                'Front-end',
                'Framework',
                'Javascript'
            ]
        },
        {
            id: 17,
            title: '10 interview questions around Symfony',
            date: '2019/09/20',
            author: this.authors['AXeL'],
            image: './assets/img/posts/symfony.jpg',
            content: './assets/blog/symfony-interview-questions.md',
            tags: [
                'Interview',
                'Symfony',
                'Framework',
                'Back-end'
            ]
        },
        {
            id: 16,
            title: 'Frontend vs Backend',
            date: '2019/09/11',
            author: this.authors['AXeL'],
            image: './assets/img/posts/frontend-vs-backend.jpg',
            content: './assets/blog/frontend-vs-backend.md',
            tags: [
                'Comparison',
                'Front-end',
                'Back-end'
            ]
        },
        {
            id: 15,
            title: 'I fall in ❤️ with Vue.js',
            date: 'August 3, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/vuejs.jpg',
            content: './assets/blog/vuejs.md',
            tags: [
                'Front-end',
                'Javascript',
                'Vue.js'
            ]
        },
        {
            id: 14,
            title: 'Phoenix OS: use Android as a desktop OS',
            date: 'June 29, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/phoenix-os.jpg',
            content: './assets/blog/phoenix-os.md',
            tags: [
                'OS',
                'Desktop',
                'Phoenix OS'
            ]
        },
        {
            id: 13,
            title: 'osTicket: An open source ticket manager',
            date: 'June 23, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/osticket.png',
            content: './assets/blog/osticket.md',
            tags: [
                'osTicket',
                'PHP'
            ]
        },
        {
            id: 12,
            title: 'Discover LDAP',
            date: 'June 22, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/ldap.png',
            content: './assets/blog/ldap.md',
            tags: [
                'LDAP'
            ]
        },
        {
            id: 11,
            title: 'Run Photoshop CS6 on Linux',
            date: 'June 15, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/photoshop.jpg',
            content: './assets/blog/photoshop-on-linux.md',
            tags: [
                'Software',
                'Photoshop',
                'Linux',
                'Wine'
            ]
        },
        {
            id: 10,
            title: 'Gitflow: A successful branching model',
            date: 'May 25, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/gitflow-mini.png',
            content: './assets/blog/gitflow.md',
            tags: [
                'Workflow',
                'Git'
            ]
        },
        {
            id: 9,
            title: 'Why being a freelancer is better !',
            date: 'May 18, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/freelancer.jpg',
            content: './assets/blog/freelancer.md',
            tags: [
                'Discussion',
                'Freelance'
            ]
        },
        {
            id: 8,
            title: 'PHP vs node.js',
            date: 'March 27, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/php-vs-node.jpg',
            content: './assets/blog/php-vs-node.md',
            tags: [
                'Comparison',
                'PHP',
                'node.js'
            ]
        },
        {
            id: 7,
            title: 'Magento CMS: Presentation',
            date: 'March 27, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/magento.jpg',
            content: './assets/blog/magento.md',
            tags: [
                'CMS',
                'e-commerce',
                'Magento',
                'PHP'
            ]
        },
        {
            id: 6,
            title: 'Is jQuery dying?',
            date: 'March 27, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/jquery.png',
            content: './assets/blog/jquery.md',
            tags: [
                'Javascript',
                'jQuery'
            ]
        },
        {
            id: 5,
            title: 'CodeIgniter 4: What\'s new',
            date: 'March 26, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/codeigniter.png',
            content: './assets/blog/codeigniter.md',
            tags: [
                'Back-End',
                'Framework',
                'PHP',
                'CodeIgniter'
            ]
        },
        {
            id: 4,
            title: 'Riot JS: Simple yet Powerful',
            date: 'March 25, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/riot-js.png',
            content: './assets/blog/riot-js.md',
            tags: [
                'Front-End',
                'Javascript',
                'Riot.js'
            ]
        },
        {
            id: 3,
            title: 'Dolibarr.. My opinion',
            date: 'March 25, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/dolibarr.png',
            content: './assets/blog/dolibarr.md',
            tags: [
                'ERP',
                'CRM',
                'PHP',
                'Dolibarr'
            ]
        },
        {
            id: 2,
            title: 'Get a free account on lynda.com',
            date: 'March 25, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/lynda.com.jpg',
            content: './assets/blog/lynda.md',
            tags: [
                'e-learning'
            ]
        },
        {
            id: 1,
            title: 'GitHub: Free unlimited private repos',
            date: 'January 7, 2019',
            author: this.authors['AXeL'],
            image: './assets/img/posts/github.png',
            content: './assets/blog/github-private-repos.md',
            tags: [
                'Git',
                'Github'
            ]
        }
    ];

    private generateSlugs() {
        this.posts.forEach((post) => {
            if (! post.slug) {
                post.slug = this.slugifyPipe.transform(post.title);
            }
        });
    }

    getPosts() {
        return this.posts.slice();
    }

    getPostBySlug(slug: string) {
        return this.posts.find(p => p.slug == slug);
    }

    getPostById(id: number) {
        return this.posts.find(p => p.id == id);
    }

    // getTags() {
    //     let tags = [];
    //     this.posts.forEach((post) => {
    //         post.tags.forEach((tag) => {
    //             if (!tags.includes(tag)) {
    //                 tags.push(tag);
    //             }
    //         });
    //     });
    //     return tags;
    // }
}

export const DisqusConfig = {
    //url: 'https://axel-dev.github.io/portfolio',
    shortname: 'axel-dev'
};
