import { Project } from '../models/project.model';

export class PortfolioService {

    // List of projects groups
    groups = {
        'Web apps': 'web-apps',
        'Desktop apps': 'desktop-apps',
        'Web extensions': 'web-extensions'
    };

    // List of projects
    private projects: Project[] = [
        {
            name: 'FireAdmin',
            image: './assets/img/projects/FireAdmin.png',
            link: 'https://github.com/AXeL-dev/FireAdmin',
            category: [
                'Typescript',
                'Angular'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Firestore Manager',
            image: './assets/img/projects/firestore-manager.png',
            link: 'https://github.com/AXeL-dev/firestore-manager',
            category: [
                'Typescript',
                'Angular'
            ],
            group: [
                this.groups['Web apps'],
                this.groups['Web extensions']
            ]
        },
        {
            name: 'Youtube Viewer',
            image: './assets/img/projects/youtube-viewer.png',
            link: 'https://github.com/AXeL-dev/youtube-viewer',
            category: [
                'Typescript',
                'React'
            ],
            group: [
                this.groups['Web extensions']
            ]
        },
        {
            name: 'Distract Me Not',
            image: './assets/img/projects/distract-me-not.png',
            link: 'https://github.com/AXeL-dev/distract-me-not',
            category: [
                'Javascript'
            ],
            group: [
                this.groups['Web extensions']
            ]
        },
        {
            name: 'ngx-diff2html',
            image: './assets/img/projects/ngx-diff2html.png',
            link: 'https://github.com/AXeL-dev/ngx-diff2html',
            category: [
                'Typescript',
                'Angular'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Riot Presents',
            image: './assets/img/projects/riot-presents.png',
            link: 'https://github.com/AXeL-dev/riot-presents',
            category: [
                'Riot.js'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Dolibarr Modules',
            image: './assets/img/projects/revamp-my-dolibarr.png',
            link: 'https://www.dolistore.com/en/search?orderby=position&orderway=desc&search_query=axel',
            category: [
                'PHP',
                'MySQL',
                'Jquery'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Dindo Bot',
            image: './assets/img/projects/dindo-bot.gif',
            link: 'https://github.com/AXeL-dev/Dindo-Bot/tree/v1.x',
            category: [
                'Python',
                'GTK'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Silaty',
            image: './assets/img/projects/silaty.png',
            link: 'https://github.com/AXeL-dev/Silaty',
            category: [
                'Python',
                'GTK'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'XAMPP Indicator',
            image: './assets/img/projects/xampp-indicator.png',
            link: 'https://github.com/AXeL-dev/xampp-indicator',
            category: [
                'Python',
                'GTK'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Dolibase Framework',
            image: './assets/img/projects/dolibase.png',
            link: 'https://github.com/AXeL-dev/dolibase',
            category: [
                'PHP',
                'Javascript'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Easy Image Downloader',
            image: './assets/img/projects/easy-image-downloader.png',
            link: 'https://github.com/AXeL-dev/easy-image-downloader',
            category: [
                'Javascript'
            ],
            group: [
                this.groups['Web extensions']
            ]
        },
        {
            name: 'CodeIgniter Starter',
            image: './assets/img/projects/codeigniter-starter.png',
            link: 'https://github.com/AXeL-dev/CodeIgniter-Starter',
            category: [
                'PHP',
                'CodeIgniter',
                'MySQL'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Dental Care',
            image: './assets/img/projects/dental-care.png',
            link: 'https://github.com/AXeL-dev/Dental-Care',
            category: [
                'ASP.Net MVC',
                'Entity Framework'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'ZTE SAT Tool',
            image: './assets/img/projects/zte-sat-tool.png',
            link: 'https://github.com/AXeL-dev/ZTE-SAT-Tool',
            category: [
                'PHP',
                'Jquery'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'OVH CTI Dashboard',
            image: './assets/img/projects/ovh-cti.png',
            link: '#',
            category: [
                'AngularJS'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'OVH CTI Dashboard Lite (for Raspberry Pi)',
            image: './assets/img/projects/ovh-rp.png',
            link: '#',
            category: [
                'AngularJS'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Anime website',
            image: './assets/img/projects/anime-site.png',
            link: 'https://github.com/AXeL-dev/anime-site',
            category: [
                'Javascript',
                'Jquery'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Design Helper',
            image: './assets/img/projects/design-helper.png',
            link: 'https://github.com/AXeL-dev/design-helper-site',
            category: [
                'Javascript'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        // {
        //     name: 'Mendicity website',
        //     image: './assets/img/projects/mendicity-site.png',
        //     link: 'https://github.com/AXeL-dev/mendicity-site',
        //     category: [
        //         'Javascript'
        //     ],
        //     group: [
        //         this.groups['Web apps']
        //     ]
        // },
        {
            name: 'MM Portfolio',
            image: './assets/img/projects/mm-portfolio.png',
            link: '#',
            category: [
                'HTML',
                'CSS',
                'Javascript'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        // {
        //     name: 'C.N. Blog',
        //     image: './assets/img/projects/cn-blog.png',
        //     link : 'https://chimenaij.blogspot.com/',
        //     category: [
        //         'Blogger'
        //     ],
        //     group: [
        //         this.groups['Web apps']
        //     ]
        // },
        {
            name: 'Dirassa Plus Blog',
            image: './assets/img/projects/dirassaplus-blog.png',
            link : 'http://dirassaplus.blogspot.com/',
            category: [
                'Blogger'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Ubuntu Themes',
            image: 'https://cn.opendesktop.org/img/2/a/e/a/83bf56f927c7e7fa33e0995fd91e72ffeced.png',
            link: 'https://github.com/AXeL-dev/ubuntu-themes',
            category: [
                'Linux'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'QChat',
            image: './assets/img/projects/QChat.png',
            link: 'https://github.com/AXeL-dev/QChat',
            category: [
                'C++',
                'Qt Framework'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'SufoBot',
            image: './assets/img/projects/SufoBot.png',
            link: 'https://github.com/AXeL-dev/SufoBot',
            category: [
                'C++',
                'wxWidgets',
                'Linux'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Pixus Bot',
            image: './assets/img/projects/pixus-bot.png',
            link: 'https://github.com/AXeL-dev/Pixus-Bot',
            category: [
                'C#'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Steganography App',
            image: './assets/img/projects/steganography-app.png',
            link: 'https://github.com/AXeL-dev/app_steganographie',
            category: [
                'C#'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Customer Management',
            image: './assets/img/projects/customer-management.png',
            link: 'https://github.com/AXeL-dev/Gestion-Client',
            category: [
                'C#'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'WinSk',
            image: './assets/img/projects/winsk.png',
            link: 'https://github.com/AXeL-dev/WinSk',
            category: [
                'C',
                'Windows API',
                'Java',
                'Android'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Super Naruto',
            image: './assets/img/projects/super-naruto.jpg',
            link: 'https://github.com/AXeL-dev/super-naruto',
            category: [
                'C',
                'SDL'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'ImpScreen',
            image: './assets/img/projects/ImpScreen.png',
            link: 'https://github.com/AXeL-dev/ImpScreen',
            category: [
                'C',
                'Windows API'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'TimeToShutdown',
            image: './assets/img/projects/timetoshutdown.png',
            link: 'https://github.com/AXeL-dev/TimeToShutdown',
            category: [
                'C',
                'Windows API'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'WebSiteBlocker',
            image: './assets/img/projects/websiteblocker.png',
            link: 'https://github.com/AXeL-dev/WebSiteBlocker',
            category: [
                'C',
                'Windows API'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Locker',
            image: './assets/img/projects/locker.png',
            link: 'https://github.com/AXeL-dev/Locker',
            category: [
                'C',
                'Windows API'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'WinIDE',
            image: './assets/img/projects/WinIDE.png',
            link: 'https://github.com/AXeL-dev/WinIDE',
            category: [
                'C',
                'Windows API'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'MP3 Player',
            image: './assets/img/projects/mp3-player.png',
            link: 'https://github.com/AXeL-dev/Lecteur-mp3',
            category: [
                'C',
                'SDL'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'SyncPainter',
            image: './assets/img/projects/syncpainter.png',
            link: 'https://github.com/AXeL-dev/syncpainter',
            category: [
                'C',
                'SDL'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        }
    ];

    getProjects() {
        return this.projects.slice();
    }
}