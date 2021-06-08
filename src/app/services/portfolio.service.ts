import { Project } from '../models/project.model';

export class PortfolioService {

    // List of projects groups
    groups = {
        'Websites': 'websites',
        'Web apps': 'web-apps',
        'Desktop apps': 'desktop-apps',
        'Mobile apps': 'mobile-apps',
        'Games': 'games',
        'Web extensions': 'web-extensions'
    };

    // List of projects
    private projects: Project[] = [
        {
            name: 'FireAdmin',
            image: './assets/img/projects/FireAdmin.png',
            link: 'https://github.com/FirebaseGoodies/FireAdmin',
            category: [
                'Angular',
                'Firebase'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'Firestore Manager',
            image: './assets/img/projects/firestore-manager.png',
            link: 'https://github.com/FirebaseGoodies/firestore-manager',
            category: [
                'Angular',
                'Firebase'
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
                'React',
                'Typescript'
            ],
            group: [
                this.groups['Web apps'],
                this.groups['Web extensions']
            ]
        },
        {
            name: 'Distract Me Not',
            image: './assets/img/projects/distract-me-not.png',
            link: 'https://github.com/AXeL-dev/distract-me-not',
            category: [
                'React',
                'Javascript'
            ],
            group: [
                this.groups['Web extensions']
            ]
        },
        {
            name: 'Anime Tracker',
            image: './assets/img/projects/anime-tracker.png',
            link: 'https://github.com/AXeL-dev/anime-tracker',
            category: [
                'Angular'
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
                'Angular'
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
            link: 'https://github.com/AXeL-dev/Dindo-Bot',
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
            link: 'https://github.com/LinuxForGeeks/Silaty',
            category: [
                'Python',
                'GTK'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Process Watch',
            image: './assets/img/projects/process-watch.png',
            link: '#',
            category: [
                'React',
                'node.js',
                'socket.io'
            ],
            group: [
                this.groups['Web apps']
            ]
        },
        {
            name: 'OVH CTI Dashboard',
            image: './assets/img/projects/ovh-cti.png',
            link: 'https://github.com/ovh/telephony-example-cti-dashboard',
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
            name: 'Firestore Pentest',
            image: './assets/img/projects/firestore-pentest.png',
            link: 'https://github.com/FirebaseGoodies/firestore-pentest',
            category: [
                'Angular',
                'Firebase'
            ],
            group: [
                this.groups['Web apps']
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
            name: 'Guepard Group',
            image: './assets/img/projects/guepard.png',
            link: 'https://guepardgroup.com',
            category: [
                'HTML',
                'CSS',
                'jQuery'
            ],
            group: [
                this.groups['Websites']
            ]
        },
        {
            name: 'APlus Communication',
            image: './assets/img/projects/aplus.png',
            link: 'http://agence-aplus.fr',
            category: [
                'HTML',
                'CSS',
                'jQuery'
            ],
            group: [
                this.groups['Websites']
            ]
        },
        {
            name: 'Enty Beauty',
            image: './assets/img/projects/enty-beauty.png',
            link: 'https://shop.entybeauty.com',
            category: [
                'PHP',
                'CSS',
                'JS',
                'Google Sheets API'
            ],
            group: [
                this.groups['Websites']
            ]
        },
        {
            name: 'Nightlight Indicator',
            image: './assets/img/projects/nightlight-indicator.png',
            link: 'https://github.com/LinuxForGeeks/nightlight-indicator',
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
            link: 'https://github.com/LinuxForGeeks/xampp-indicator',
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
            link: 'https://github.com/DolibarrLabs/dolibase',
            category: [
                'PHP',
                'Javascript'
            ],
            group: [
                //this.groups['Web apps']
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
            name: 'Dental Care',
            image: './assets/img/projects/dental-care.png',
            link: 'https://github.com/AXeL-dev/Dental-Care',
            category: [
                'ASP.Net MVC',
                'Entity Framework'
            ],
            group: [
                this.groups['Websites']
            ]
        },
        {
            name: 'City Checker.ma',
            image: './assets/img/projects/city-checker.png',
            link: 'https://github.com/AXeL-dev/City-Checker.ma',
            category: [
                'HTML',
                'CSS'
            ],
            group: [
                this.groups['Websites']
            ]
        },
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
                this.groups['Websites']
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
        //         this.groups['Websites']
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
                this.groups['Websites']
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
            name: 'Anime website',
            image: './assets/img/projects/anime-site.png',
            link: 'https://github.com/AXeL-dev/anime-site',
            category: [
                'Javascript',
                'Jquery'
            ],
            group: [
                this.groups['Websites']
            ]
        },
        {
            name: 'Angular WebExtension Starter',
            image: './assets/img/projects/webextension.jpg',
            link: 'https://github.com/AXeL-dev/angular-webextension-starter',
            category: [
                'Javascript',
                'Gulp'
            ],
            group: [
                this.groups['Web extensions']
            ]
        },
        // {
        //     name: 'Design Helper',
        //     image: './assets/img/projects/design-helper.png',
        //     link: 'https://github.com/AXeL-dev/design-helper-site',
        //     category: [
        //         'Javascript'
        //     ],
        //     group: [
        //         this.groups['Web apps']
        //     ]
        // },
        // {
        //     name: 'Mendicity website',
        //     image: './assets/img/projects/mendicity-site.png',
        //     link: 'https://github.com/AXeL-dev/mendicity-site',
        //     category: [
        //         'Javascript'
        //     ],
        //     group: [
        //         this.groups['Websites']
        //     ]
        // },
        {
            name: 'TCP server',
            image: './assets/img/projects/tcpserver.jpg',
            link : 'https://github.com/PowerOfC/WinSk/tree/master/android',
            category: [
                'Java',
                'Android SDK'
            ],
            group: [
                this.groups['Mobile apps']
            ]
        },
        {
            name: 'QR code scanner',
            image: './assets/img/projects/qr-code-scanner.jpg',
            link : '#',
            category: [
                'Ionic'
            ],
            group: [
                this.groups['Mobile apps']
            ]
        },
        // {
        //     name: 'Ubuntu Themes',
        //     image: 'https://cn.opendesktop.org/img/2/a/e/a/83bf56f927c7e7fa33e0995fd91e72ffeced.png',
        //     link: 'https://github.com/LinuxForGeeks/ubuntu-themes',
        //     category: [
        //         'Linux'
        //     ],
        //     group: [
        //         this.groups['Desktop apps']
        //     ]
        // },
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
            link: 'https://github.com/LinuxForGeeks/SufoBot',
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
            name: 'Super Naruto',
            image: './assets/img/projects/super-naruto.jpg',
            link: 'https://github.com/PowerOfC/super-naruto',
            category: [
                'C',
                'SDL'
            ],
            group: [
                this.groups['Games']
            ]
        },
        {
            name: 'Shooting Game',
            image: './assets/img/projects/shooting-game.jpg',
            link: 'https://github.com/PowerOfC/Shooting-Game',
            category: [
                'C',
                'SDL'
            ],
            group: [
                this.groups['Games']
            ]
        },
        {
            name: 'Open The Box',
            image: './assets/img/projects/open-the-box.png',
            link: 'https://github.com/PowerOfC/Open-The-Box',
            category: [
                'C',
                'SDL'
            ],
            group: [
                this.groups['Games']
            ]
        },
        {
            name: 'WinSk',
            image: './assets/img/projects/winsk.png',
            link: 'https://github.com/PowerOfC/WinSk',
            category: [
                'C',
                'Windows API'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'Alice',
            image: './assets/img/projects/alice.png',
            link: 'https://github.com/PowerOfC/Alice',
            category: [
                'C',
                'Windows API'
            ],
            group: [
                this.groups['Desktop apps']
            ]
        },
        {
            name: 'ImpScreen',
            image: './assets/img/projects/ImpScreen.png',
            link: 'https://github.com/PowerOfC/ImpScreen',
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
            link: 'https://github.com/PowerOfC/TimeToShutdown',
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
            link: 'https://github.com/PowerOfC/WebSiteBlocker',
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
            link: 'https://github.com/PowerOfC/Locker',
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
            link: 'https://github.com/PowerOfC/WinIDE',
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
            link: 'https://github.com/PowerOfC/Lecteur-mp3',
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
            link: 'https://github.com/PowerOfC/syncpainter',
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