export class BlogService {

    posts = [
        {
            id: 15,
            title: 'I fall in ❤️ with Vue.js',
            date: 'August 3, 2019',
            author: 'AXeL',
            image: './assets/img/posts/vuejs.jpg',
            content: './assets/blog/vuejs.md',
            categories: [
                'Front-end',
                'Javascript'
            ],
            tags: [
                'Vue.js'
            ]
        },
        {
            id: 14,
            title: 'Phoenix OS: use Android as a desktop OS',
            date: 'June 29, 2019',
            author: 'AXeL',
            image: './assets/img/posts/phoenix-os.jpg',
            content: './assets/blog/phoenix-os.md',
            categories: [
                'OS',
                'Desktop'
            ],
            tags: [
                'Phoenix OS'
            ]
        },
        {
            id: 13,
            title: 'osTicket: An open source ticket manager',
            date: 'June 23, 2019',
            author: 'AXeL',
            image: './assets/img/posts/osticket.png',
            content: './assets/blog/osticket.md',
            tags: [
                'osTicket'
            ]
        },
        {
            id: 12,
            title: 'Discover LDAP',
            date: 'June 22, 2019',
            author: 'AXeL',
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
            author: 'AXeL',
            image: './assets/img/posts/photoshop.jpg',
            content: './assets/blog/photoshop-on-linux.md',
            categories: [
                'Software'
            ],
            tags: [
                'Photoshop',
                'Linux',
                'Wine'
            ]
        },
        {
            id: 10,
            title: 'Gitflow: A successful branching model',
            date: 'May 25, 2019',
            author: 'AXeL',
            image: './assets/img/posts/gitflow-mini.png',
            content: './assets/blog/gitflow.md',
            categories: [
                'Workflow'
            ],
            tags: [
                'Git'
            ]
        },
        {
            id: 9,
            title: 'Why being a freelancer is better !',
            date: 'May 18, 2019',
            author: 'AXeL',
            image: './assets/img/posts/freelancer.jpg',
            content: './assets/blog/freelancer.md',
            categories: [
                'Discussion'
            ],
            tags: [
                'Freelance',
                'Work'
            ]
        },
        {
            id: 8,
            title: 'PHP vs node.js',
            date: 'March 27, 2019',
            author: 'AXeL',
            image: './assets/img/posts/php-vs-node.jpg',
            content: './assets/blog/php-vs-node.md',
            categories: [
                'Comparison'
            ],
            tags: [
                'PHP',
                'node.js'
            ]
        },
        {
            id: 7,
            title: 'Magento CMS: Presentation',
            date: 'March 27, 2019',
            author: 'AXeL',
            image: './assets/img/posts/magento.jpg',
            content: './assets/blog/magento.md',
            categories: [
                'CMS',
                'e-commerce'
            ],
            tags: [
                'Magento'
            ]
        },
        {
            id: 6,
            title: 'Is jQuery dying?',
            date: 'March 27, 2019',
            author: 'AXeL',
            image: './assets/img/posts/jquery.png',
            content: './assets/blog/jquery.md',
            categories: [
                'Library'
            ],
            tags: [
                'Javascript',
                'jQuery'
            ]
        },
        {
            id: 5,
            title: 'CodeIgniter 4: What\'s new',
            date: 'March 26, 2019',
            author: 'AXeL',
            image: './assets/img/posts/codeigniter.png',
            content: './assets/blog/codeigniter.md',
            categories: [
                'Back End',
                'Framework'
            ],
            tags: [
                'PHP',
                'CodeIgniter'
            ]
        },
        {
            id: 4,
            title: 'Riot JS: Simple yet Powerful',
            date: 'March 25, 2019',
            author: 'AXeL',
            image: './assets/img/posts/riot-js.png',
            content: './assets/blog/riot-js.md',
            categories: [
                'Front End',
                'Library'
            ],
            tags: [
                'Javascript',
                'Riot.js'
            ]
        },
        {
            id: 3,
            title: 'Dolibarr.. My opinion',
            date: 'March 25, 2019',
            author: 'AXeL',
            image: './assets/img/posts/dolibarr.png',
            content: './assets/blog/dolibarr.md',
            categories: [
                'ERP',
                'CRM'
            ],
            tags: [
                'PHP',
                'Dolibarr'
            ]
        },
        {
            id: 2,
            title: 'Get a free account on lynda.com',
            date: 'March 25, 2019',
            author: 'AXeL',
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
            author: 'AXeL',
            image: './assets/img/posts/github.png',
            content: './assets/blog/github-private-repos.md',
            tags: [
                'Github'
            ]
        }
    ];

    // disqus = {
    //     url: 'https://axel-dev.github.io/portfolio',
    //     shortname: 'axel-dev'
    // };

    getPostById(id: number) {
        return this.posts.find(p => p.id == id);
    }
}