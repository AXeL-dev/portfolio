export class PortfolioService {

    // List of projects
    private projects = [
        {
            name: 'CodeIgniter Starter',
            image: './assets/img/projects/codeigniter-starter.png',
            link: 'https://github.com/AXeL-dev/CodeIgniter-Starter',
            category: [
                'PHP',
                'CodeIgniter'
            ]
        },
        {
            name: 'Dentale Care',
            image: './assets/img/projects/dentale-care.png',
            link: 'https://github.com/AXeL-dev/Dentale-Care',
            category: [
                'ASP.Net',
                'MVC'
            ]
        },
        {
            name: 'ZTE SAT Tool',
            image: './assets/img/projects/zte-sat-tool.png',
            link: 'https://github.com/AXeL-dev/ZTE-SAT-Tool',
            category: [
                'PHP',
                'Javascript',
                'Jquery'
            ]
        },
        {
            name: 'Dolibarr Modules',
            image: './assets/img/projects/revamp-my-dolibarr.png',
            link: 'https://www.dolistore.com/en/search?orderby=position&orderway=desc&search_query=axel',
            category: [
                'PHP',
                'Javascript',
                'Jquery'
            ]
        },
        {
            name: 'Dindo Bot',
            image: './assets/img/projects/dindo-bot.gif',
            link: 'https://github.com/AXeL-dev/Dindo-Bot/tree/v1.x',
            category: [
                'Python',
                'GTK'
            ]
        },
        {
            name: 'Silaty',
            image: './assets/img/projects/silaty.png',
            link: 'https://github.com/AXeL-dev/Silaty',
            category: [
                'Python',
                'GTK'
            ]
        },
        {
            name: 'Dolibase Framework',
            image: './assets/img/projects/dolibase.png',
            link: 'https://github.com/AXeL-dev/dolibase',
            category: [
                'PHP',
                'Javascript'
            ]
        },
        {
            name: 'OVH CTI Dashboard',
            image: './assets/img/projects/ovh-cti.png',
            link: '#',
            category: [
                'Javascript',
                'AngularJS'
            ]
        },
        {
            name: 'OVH CTI Dashboard Lite (for Raspberry Pi)',
            image: './assets/img/projects/ovh-rp.png',
            link: '#',
            category: [
                'Javascript',
                'AngularJS'
            ]
        },
        {
            name: 'Riot Presents',
            image: './assets/img/projects/riot-presents.png',
            link: 'https://github.com/AXeL-dev/riot-presents',
            category: [
                'Javascript',
                'Riot.js'
            ]
        },
        {
            name: 'Distract Me Not',
            image: './assets/img/projects/distract-me-not.png',
            link: 'https://github.com/AXeL-dev/distract-me-not',
            category: [
                'Javascript',
                'WebExtension'
            ]
        },
        {
            name: 'Easy Image Downloader',
            image: './assets/img/projects/easy-image-downloader.png',
            link: 'https://github.com/AXeL-dev/easy-image-downloader',
            category: [
                'Javascript',
                'WebExtension'
            ]
        },
        {
            name: 'Anime website',
            image: './assets/img/projects/anime-site.png',
            link: 'https://github.com/AXeL-dev/anime-site',
            category: [
                'PHP',
                'ASP.Net',
                'Javascript',
                'Jquery'
            ]
        },
        {
            name: 'Design Helper',
            image: './assets/img/projects/design-helper.png',
            link: 'https://github.com/AXeL-dev/design-helper-site',
            category: [
                'Javascript'
            ]
        },
        {
            name: 'Mendicity website',
            image: './assets/img/projects/mendicity-site.png',
            link: 'https://github.com/AXeL-dev/mendicity-site',
            category: [
                'Javascript'
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
            ]
        },
        {
            name: 'XAMPP Indicator',
            image: './assets/img/projects/xampp-indicator.png',
            link: 'https://github.com/AXeL-dev/xampp-indicator',
            category: [
                'Python',
                'GTK'
            ]
        },
        // {
        //     name: 'C.N. Blog',
        //     image: './assets/img/projects/cn-blog.png',
        //     link : 'https://chimenaij.blogspot.com/',
        //     category: [
        //         'Blogger'
        //     ]
        // },
        // {
        //     name: 'Dirassa Plus Blog',
        //     image: './assets/img/projects/dirassaplus-blog.png',
        //     link : 'http://dirassaplus.blogspot.com/',
        //     category: [
        //         'Blogger'
        //     ]
        // },
        {
            name: 'WinSk',
            image: './assets/img/projects/winsk.png',
            link: 'https://github.com/AXeL-dev/WinSk',
            category: [
                'C',
                'Windows API',
                'Java',
                'Android'
            ]
        },
        {
            name: 'Pixus Bot',
            image: './assets/img/projects/pixus-bot.png',
            link: 'https://github.com/AXeL-dev/Pixus-Bot',
            category: [
                'C#'
            ]
        },
        {
            name: 'Steganography App',
            image: './assets/img/projects/steganography-app.png',
            link: 'https://github.com/AXeL-dev/app_steganographie',
            category: [
                'C#'
            ]
        },
        {
            name: 'Customer Management',
            image: './assets/img/projects/customer-management.png',
            link: 'https://github.com/AXeL-dev/Gestion-Client',
            category: [
                'C#'
            ]
        },
        {
            name: 'Super Naruto',
            image: './assets/img/projects/super-naruto.jpg',
            link: 'https://github.com/AXeL-dev/super-naruto',
            category: [
                'C',
                'SDL'
            ]
        },
        {
            name: 'ImpScreen',
            image: './assets/img/projects/ImpScreen.png',
            link: 'https://github.com/AXeL-dev/ImpScreen',
            category: [
                'C',
                'Windows API'
            ]
        },
        {
            name: 'TimeToShutdown',
            image: './assets/img/projects/timetoshutdown.png',
            link: 'https://github.com/AXeL-dev/TimeToShutdown',
            category: [
                'C',
                'Windows API'
            ]
        },
        {
            name: 'WebSiteBlocker',
            image: './assets/img/projects/websiteblocker.png',
            link: 'https://github.com/AXeL-dev/WebSiteBlocker',
            category: [
                'C',
                'Windows API'
            ]
        },
        {
            name: 'Locker',
            image: './assets/img/projects/locker.png',
            link: 'https://github.com/AXeL-dev/Locker',
            category: [
                'C',
                'Windows API'
            ]
        },
        {
            name: 'WinIDE',
            image: './assets/img/projects/WinIDE.png',
            link: 'https://github.com/AXeL-dev/WinIDE',
            category: [
                'C',
                'Windows API'
            ]
        },
        {
            name: 'MP3 Player',
            image: './assets/img/projects/mp3-player.png',
            link: 'https://github.com/AXeL-dev/Lecteur-mp3',
            category: [
                'C',
                'SDL'
            ]
        },
        {
            name: 'SyncPainter',
            image: './assets/img/projects/syncpainter.png',
            link: 'https://github.com/AXeL-dev/syncpainter',
            category: [
                'C',
                'SDL'
            ]
        },
        {
            name: 'QChat',
            image: './assets/img/projects/QChat.png',
            link: 'https://github.com/AXeL-dev/QChat',
            category: [
                'C++',
                'Qt Framework'
            ]
        }
    ];

    // List of projects categories
    categories = {
        'Python': 'python',
        'C': 'c',
        'C++': 'cplusplus',
        'C#': 'csharp',
        'PHP': 'php',
        'Javascript': 'js',
        //'Blogger': 'blogger',
        'ASP.Net': 'asp'
    };

    getProjects() {
        return this.projects.slice();
    }
}