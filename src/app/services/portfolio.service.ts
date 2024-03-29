import { Project } from '../models/project.model';

export class PortfolioService {
  // List of projects groups
  groups = {
    Websites: 'websites',
    'Web apps': 'web-apps',
    'Desktop apps': 'desktop-apps',
    'Mobile apps': 'mobile-apps',
    Games: 'games',
    'Web extensions': 'web-extensions',
  };

  // List of projects
  private projects: Project[] = [
    {
      name: 'FireAdmin',
      image: './assets/img/projects/FireAdmin.png',
      link: 'https://github.com/FirebaseGoodies/FireAdmin',
      category: ['Angular', 'Firebase'],
      group: ['Web apps'],
    },
    {
      name: 'Firestore Manager',
      image: './assets/img/projects/firestore-manager.png',
      link: 'https://github.com/FirebaseGoodies/firestore-manager',
      category: ['Angular', 'Firebase'],
      group: ['Web apps', 'Web extensions'],
    },
    {
      name: 'YouTube Viewer',
      image: './assets/img/projects/youtube-viewer.jpg',
      link: 'https://github.com/AXeL-dev/youtube-viewer',
      category: ['React', 'Typescript'],
      group: ['Web apps', 'Web extensions'],
    },
    {
      name: 'Distract Me Not',
      image: './assets/img/projects/distract-me-not.png',
      link: 'https://github.com/AXeL-dev/distract-me-not',
      category: ['React', 'Javascript'],
      group: ['Web extensions'],
    },
    {
      name: 'Anime Tracker',
      image: './assets/img/projects/anime-tracker.png',
      link: 'https://github.com/AXeL-dev/anime-tracker',
      category: ['Angular'],
      group: ['Web extensions'],
    },
    {
      name: 'ngx-diff2html',
      image: './assets/img/projects/ngx-diff2html.png',
      link: 'https://github.com/AXeL-dev/ngx-diff2html',
      category: ['Angular'],
      group: ['Web apps'],
    },
    {
      name: 'Dolibarr Modules',
      image: './assets/img/projects/revamp-my-dolibarr.png',
      link: 'https://www.dolistore.com/en/search?orderby=position&orderway=desc&search_query=axel',
      category: ['PHP', 'MySQL', 'Jquery'],
      group: ['Web apps'],
    },
    {
      name: 'Dindo Bot',
      image: './assets/img/projects/dindo-bot.gif',
      link: 'https://github.com/Gamerium/Dindo-Bot',
      category: ['Python', 'GTK'],
      group: ['Desktop apps'],
    },
    {
      name: 'Silaty',
      image: './assets/img/projects/silaty.png',
      link: 'https://github.com/LinuxForGeeks/Silaty',
      category: ['Python', 'GTK'],
      group: ['Desktop apps'],
    },
    {
      name: 'Process Watch',
      image: './assets/img/projects/process-watch.png',
      link: 'https://app.process.watch',
      category: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      group: ['Web apps'],
    },
    {
      name: 'OVH CTI Dashboard',
      image: './assets/img/projects/ovh-cti.png',
      link: 'https://github.com/ovh/telephony-example-cti-dashboard',
      category: ['AngularJS', 'OVH API'],
      group: ['Web apps'],
    },
    {
      name: 'OVH CTI Dashboard Lite (for Raspberry Pi)',
      image: './assets/img/projects/ovh-rp.png',
      link: '#',
      category: ['AngularJS', 'OVH API'],
      group: ['Web apps'],
    },
    {
      name: 'Firestore Pentest',
      image: './assets/img/projects/firestore-pentest.png',
      link: 'https://github.com/FirebaseGoodies/firestore-pentest',
      category: ['Angular', 'Firebase'],
      group: ['Web apps'],
    },
    {
      name: 'Riot Presents',
      image: './assets/img/projects/riot-presents.png',
      link: 'https://github.com/AXeL-dev/riot-presents',
      category: ['Riot.js'],
      group: ['Web apps'],
    },
    {
      name: 'Easy Image Downloader',
      image: './assets/img/projects/easy-image-downloader.png',
      link: 'https://github.com/AXeL-dev/easy-image-downloader',
      category: ['Javascript'],
      group: ['Web extensions'],
    },
    {
      name: 'Guepard Group',
      image: './assets/img/projects/guepard.png',
      link: 'https://guepardgroup.com',
      category: ['HTML', 'CSS', 'jQuery'],
      group: ['Websites'],
    },
    {
      name: 'APlus Communication',
      image: './assets/img/projects/aplus.png',
      link: 'http://agence-aplus.fr',
      category: ['HTML', 'CSS', 'jQuery'],
      group: ['Websites'],
    },
    {
      name: 'Enty Beauty',
      image: './assets/img/projects/enty-beauty.png',
      link: 'https://shop.entybeauty.com',
      category: ['PHP', 'CSS', 'JS', 'Google Sheets API'],
      group: ['Websites'],
    },
    {
      name: 'FM6E',
      image: './assets/img/projects/fm6e.png',
      link: 'https://fm6e.org/en/',
      category: ['PHP', 'Wordpress', 'GSAP'],
      group: ['Websites'],
    },
    {
      name: 'FM6E Prize',
      image: './assets/img/projects/fm6e-prize.png',
      link: 'https://prize-fm6e.org/home',
      category: ['Angular', 'Firebase', 'GSAP'],
      group: ['Websites'],
    },
    {
      name: 'T.L. Chasse',
      image: './assets/img/projects/tlchasse.jpg',
      link: 'https://tlchasse.com',
      category: ['PHP', 'CSS', 'jQuery'],
      group: ['Websites'],
    },
    {
      name: 'CodeIgniter Starter',
      image: './assets/img/projects/codeigniter-starter.png',
      link: 'https://github.com/AXeL-dev/CodeIgniter-Starter',
      category: ['PHP', 'CodeIgniter', 'MySQL'],
      group: ['Web apps'],
    },
    {
      name: 'Dental Care',
      image: './assets/img/projects/dental-care.png',
      link: 'https://github.com/AXeL-dev/Dental-Care',
      category: ['ASP.Net MVC', 'Entity Framework'],
      group: ['Websites'],
    },
    // {
    //   name: 'City Checker.ma',
    //   image: './assets/img/projects/city-checker.png',
    //   link: 'https://github.com/AXeL-dev/City-Checker.ma',
    //   category: ['HTML', 'CSS'],
    //   group: ['Websites'],
    // },
    // {
    //   name: 'MM Portfolio',
    //   image: './assets/img/projects/mm-portfolio.png',
    //   link: '#',
    //   category: ['HTML', 'CSS', 'Javascript'],
    //   group: ['Websites'],
    // },
    // {
    //   name: 'C.N. Blog',
    //   image: './assets/img/projects/cn-blog.png',
    //   link: 'https://chimenaij.blogspot.com/',
    //   category: ['Blogger'],
    //   group: ['Websites'],
    // },
    // {
    //   name: 'Dirassa Plus Blog',
    //   image: './assets/img/projects/dirassaplus-blog.png',
    //   link: 'http://dirassaplus.blogspot.com/',
    //   category: ['Blogger'],
    //   group: ['Websites'],
    // },
    {
      name: 'ZTE SAT Tool',
      image: './assets/img/projects/zte-sat-tool.png',
      link: 'https://github.com/AXeL-dev/ZTE-SAT-Tool',
      category: ['PHP', 'Jquery'],
      group: ['Web apps'],
    },
    {
      name: 'Anime website',
      image: './assets/img/projects/anime-site.png',
      link: 'https://github.com/AXeL-dev/anime-site',
      category: ['Javascript', 'Jquery'],
      group: ['Websites'],
    },
    {
      name: 'Angular WebExtension Starter',
      image: './assets/img/projects/webextension.jpg',
      link: 'https://github.com/AXeL-dev/angular-webextension-starter',
      category: ['Javascript', 'Gulp'],
      group: ['Web extensions'],
    },
    {
      name: 'Nightlight Indicator',
      image: './assets/img/projects/nightlight-indicator.png',
      link: 'https://github.com/LinuxForGeeks/nightlight-indicator',
      category: ['Python', 'GTK'],
      group: ['Desktop apps'],
    },
    {
      name: 'XAMPP Indicator',
      image: './assets/img/projects/xampp-indicator.png',
      link: 'https://github.com/LinuxForGeeks/xampp-indicator',
      category: ['Python', 'GTK'],
      group: ['Desktop apps'],
    },
    {
      name: 'Dolibase Framework',
      image: './assets/img/projects/dolibase.png',
      link: 'https://github.com/DolibarrLabs/dolibase',
      category: ['PHP', 'Javascript'],
      group: [
        //'Web apps'
      ],
    },
    // {
    //   name: 'Design Helper',
    //   image: './assets/img/projects/design-helper.png',
    //   link: 'https://github.com/AXeL-dev/design-helper-site',
    //   category: ['Javascript'],
    //   group: ['Web apps'],
    // },
    // {
    //   name: 'Mendicity website',
    //   image: './assets/img/projects/mendicity-site.png',
    //   link: 'https://github.com/AXeL-dev/mendicity-site',
    //   category: ['Javascript'],
    //   group: ['Websites'],
    // },
    {
      name: 'TCP server',
      image: './assets/img/projects/tcpserver.jpg',
      link: 'https://github.com/PowerOfC/WinSk/tree/master/android',
      category: ['Java', 'Android SDK'],
      group: ['Mobile apps'],
    },
    {
      name: 'QR code scanner',
      image: './assets/img/projects/qr-code-scanner.jpg',
      link: '#',
      category: ['Ionic'],
      group: ['Mobile apps'],
    },
    // {
    //   name: 'Ubuntu Themes',
    //   image: 'https://cn.opendesktop.org/img/2/a/e/a/83bf56f927c7e7fa33e0995fd91e72ffeced.png',
    //   link: 'https://github.com/LinuxForGeeks/ubuntu-themes',
    //   category: ['Linux'],
    //   group: ['Desktop apps'],
    // },
    {
      name: 'QChat',
      image: './assets/img/projects/QChat.png',
      link: 'https://github.com/AXeL-dev/QChat',
      category: ['C++', 'Qt Framework'],
      group: ['Desktop apps'],
    },
    {
      name: 'SufoBot',
      image: './assets/img/projects/SufoBot.png',
      link: 'https://github.com/Gamerium/SufoBot',
      category: ['C++', 'wxWidgets', 'Linux'],
      group: ['Desktop apps'],
    },
    {
      name: 'Pixus Bot',
      image: './assets/img/projects/pixus-bot.png',
      link: 'https://github.com/Gamerium/Pixus-Bot',
      category: ['C#'],
      group: ['Desktop apps'],
    },
    {
      name: 'Steganography App',
      image: './assets/img/projects/steganography-app.png',
      link: 'https://github.com/AXeL-dev/app_steganographie',
      category: ['C#'],
      group: ['Desktop apps'],
    },
    {
      name: 'Customer Management',
      image: './assets/img/projects/customer-management.png',
      link: 'https://github.com/AXeL-dev/Gestion-Client',
      category: ['C#'],
      group: ['Desktop apps'],
    },
    {
      name: 'Super Naruto',
      image: './assets/img/projects/super-naruto.jpg',
      link: 'https://github.com/Gamerium/super-naruto',
      category: ['C', 'SDL'],
      group: ['Games'],
    },
    {
      name: 'Shooting Game',
      image: './assets/img/projects/shooting-game.jpg',
      link: 'https://github.com/Gamerium/Shooting-Game',
      category: ['C', 'SDL'],
      group: ['Games'],
    },
    {
      name: 'Open The Box',
      image: './assets/img/projects/open-the-box.png',
      link: 'https://github.com/Gamerium/Open-The-Box',
      category: ['C', 'SDL'],
      group: ['Games'],
    },
    {
      name: 'WinSk',
      image: './assets/img/projects/winsk.png',
      link: 'https://github.com/PowerOfC/WinSk',
      category: ['C', 'Windows API'],
      group: ['Desktop apps'],
    },
    {
      name: 'Alice',
      image: './assets/img/projects/alice.png',
      link: 'https://github.com/PowerOfC/Alice',
      category: ['C', 'Windows API'],
      group: ['Desktop apps'],
    },
    {
      name: 'ImpScreen',
      image: './assets/img/projects/ImpScreen.png',
      link: 'https://github.com/PowerOfC/ImpScreen',
      category: ['C', 'Windows API'],
      group: ['Desktop apps'],
    },
    {
      name: 'TimeToShutdown',
      image: './assets/img/projects/timetoshutdown.png',
      link: 'https://github.com/PowerOfC/TimeToShutdown',
      category: ['C', 'Windows API'],
      group: ['Desktop apps'],
    },
    {
      name: 'WebSiteBlocker',
      image: './assets/img/projects/websiteblocker.png',
      link: 'https://github.com/PowerOfC/WebSiteBlocker',
      category: ['C', 'Windows API'],
      group: ['Desktop apps'],
    },
    {
      name: 'Locker',
      image: './assets/img/projects/locker.png',
      link: 'https://github.com/PowerOfC/Locker',
      category: ['C', 'Windows API'],
      group: ['Desktop apps'],
    },
    {
      name: 'WinIDE',
      image: './assets/img/projects/WinIDE.png',
      link: 'https://github.com/PowerOfC/WinIDE',
      category: ['C', 'Windows API'],
      group: ['Desktop apps'],
    },
    {
      name: 'MP3 Player',
      image: './assets/img/projects/mp3-player.png',
      link: 'https://github.com/PowerOfC/Lecteur-mp3',
      category: ['C', 'SDL'],
      group: ['Desktop apps'],
    },
    {
      name: 'SyncPainter',
      image: './assets/img/projects/syncpainter.png',
      link: 'https://github.com/PowerOfC/syncpainter',
      category: ['C', 'SDL'],
      group: ['Desktop apps'],
    },
  ];

  getProjects() {
    return this.projects.slice().map((project: Project) => ({
      ...project,
      group: project.group.map((group: string) => this.groups[group] || group),
    }));
  }
}
