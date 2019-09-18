import { Author } from '../models/author.model';
import { SocialLink } from '../models/social-link.model';
import { Service } from '../models/service.model';
import { Skill } from '../models/skill.model';
import { Technology } from '../models/technology.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';

export class HomeService {

    author: Author = {
        name: 'Denna Anass',
        image: './assets/img/coder.jpg',
        job: 'Full Stack Developer',
        age: this.calculateAge('1995-02-25'),
        address: 'Rabat, Morocco',
        email: 'contact.axel.dev@gmail.com',
        website: 'https://axel-dev.github.io/',
        description: 'My name is Anass or just call me AXeL. I was 17 when i took my first steps into the fascinating world of programming. Since then, I have acquired good taste in areas like front-end development, back-end development, database management, dev-ops and graphic design. I like challenges, discovering new stuff and contributing to open source.'
    };

    socials: SocialLink[] = [
        { icon: 'github', link: 'https://github.com/AXeL-dev' },
        { icon: 'gitlab', link: 'https://gitlab.com/AXeL-dev' },
        { icon: 'youtube-play', link: 'https://www.youtube.com/channel/UCctMROLcvkiqpOyF98_WUYg' },
        { icon: 'twitter', link: 'https://twitter.com/AXeL87749763' },
        { icon: 'facebook', link: '#' },
        { icon: 'linkedin', link: '#' }
    ];

    services: Service[] = [
        { title: 'Front End Development', icon: 'desktop', description: 'AnuglarJS, Angular 6+, Vue.js, Jquery, VanillaJS, HTML5, CSS / SASS, JavaScript / ES6, TypeScript, SPA, PWA, Web Sockets' },
        { title: 'Back End Development', icon: 'cubes', description: 'PHP (CodeIgniter, Symfony), MySQL / SQL Server / MongoDB, CMS (Wordpress, Drupal), Python, C#, ASP.NET, Rest API, OOP' },
        { title: 'Mobile Development', icon: 'mobile', description: 'Java, PhoneGap, Android Studio' },
        { title: 'Web Hosting', icon: 'server', description: 'FTP, SSH, FileZilla, cPanel, Linux / Unix, VM, Cloud' },
        { title: 'Data Mining', icon: 'search-plus', description: 'CasperJS, PhantomJS, Web Scraper' },
        { title: 'Dev-ops', icon: 'code-fork', description: 'Git / Github / Gitlab, CI / CD, Gulp, Webpack, NPM' }
    ];

    skills: Skill[] = [
        { name: 'PHP', progress: 95 },
        { name: 'SQL', progress: 85 },
        { name: 'Python', progress: 70 },
        { name: 'Javascript / ES6', progress: 80 },
        { name: 'C', progress: 80, position: 'right' },
        { name: 'C++', progress: 60, position: 'right' },
        { name: 'Java', progress: 40, position: 'right' },
        { name: '.NET / C#', progress: 50, position: 'right' }
    ];

    technologies: Technology[] = [
        //{ name: 'HTML', image: './assets/img/tech/html.png' },
        //{ name: 'CSS', image: './assets/img/tech/css.png' },
        { name: 'Bootstrap', image: './assets/img/tech/bootstrap.png' },
        { name: 'Semantic UI', image: './assets/img/tech/semantic-ui.png' },
        { name: 'Materialize', image: './assets/img/tech/materialize-css.png' },
        { name: 'Sass', image: './assets/img/tech/sass.png' },
        { name: 'Jekyll', image: './assets/img/tech/jekyll.png' },
        //{ name: 'PHP', image: './assets/img/tech/php.png' },
        { name: 'Symfony', image: './assets/img/tech/symfony.png' },
        { name: 'CodeIgniter', image: './assets/img/tech/codeigniter.png' },
        { name: 'Wordpress', image: './assets/img/tech/wordpress.png' },
        { name: 'Drupal', image: './assets/img/tech/drupal.png' },
        { name: 'MySQL', image: './assets/img/tech/mysql.png' },
        { name: 'mongoDB', image: './assets/img/tech/mongodb.png' },
        //{ name: 'Javascript', image: './assets/img/tech/js.png' },
        { name: 'jQuery', image: './assets/img/tech/jquery.png' },
        { name: 'Ajax', image: './assets/img/tech/ajax.png' },
        //{ name: 'TypeScript', image: './assets/img/tech/ts.png' },
        { name: 'Angular', image: './assets/img/tech/angular.png' },
        { name: 'Vue.js', image: './assets/img/tech/vue.png' },
        { name: 'Riot JS', image: './assets/img/tech/riot.png' },
        { name: '.Net', image: './assets/img/tech/dotnet.png' },
        { name: 'SQL Server', image: './assets/img/tech/sql-server.png' },
        //{ name: 'Docker', image: './assets/img/tech/docker.png' },
        //{ name: 'Qt Framework', image: './assets/img/tech/qt.png' },
        //{ name: 'GTK', image: './assets/img/tech/gtk.png' },
        //{ name: 'Android', image: './assets/img/tech/android.png' },
        //{ name: 'Electron', image: './assets/img/tech/electron.png' },
        { name: 'Visual Studio Code', image: './assets/img/tech/vs-code.png' },
        { name: 'Trello', image: './assets/img/tech/trello.png' },
        { name: 'Git', image: './assets/img/tech/git.png' },
        { name: 'NPM', image: './assets/img/tech/npm.png' },
        { name: 'GIMP', image: './assets/img/tech/gimp.png' }
    ];

    education: Education[] = [
        {
            tag: 'University of Science and Technology Settat',
            title: 'Professional license in application design and development',
            period: '2015 - 2016'
        },
        {
            tag: 'ISTA NTIC Hay Salam Sale',
            title: 'Software development specialized technician',
            period: '2013 - 2015',
            position: 'right'
        },
        {
            tag: 'University of Rabat',
            title: '1st year in physics-chemistry branch',
            period: '2012 - 2013'
        },
        {
            tag: 'Abderrahim Bouabid High School',
            title: 'Bachelor\'s degree in physics',
            period: '2009 - 2012',
            position: 'right'
        }
    ];

    experience: Experience[] = [
        {
            tag: 'Blue Mango Software',
            title: 'Analyst/Programmer',
            description: [
                '✔ Customizing open-source projects such as: Dolibarr, osTicket, Alfresco, VICIdial.',
                '✔ Creating websites, dashboards & plugins using technologies like Wordpress, AngularJS, PHP, Javascript ...',
                '✔ Documenting projects using <a href="https://docsify.js.org/" target="_blank">docsify</a>.',
                '✔ Setting up an OpenLDAP server to centralise third parties data.',
                '✔ Doing server administration & backup stuff (ssh, ftp, vnc).'
            ],
            period: 'April 2019 - July 2019'
        },
        {
            tag: 'Freelance',
            title: 'Freelancer',
            description: [
                '✔ Developing custom <a href="https://www.dolistore.com/en/search?orderby=position&orderway=desc&search_query=axel" target="_blank">modules</a> for Dolibarr.',
                '✔ Publishing some of my own projects like <a href="https://github.com/AXeL-dev/Dindo-Bot" target="_blank">Dindo Bot</a>, <a href="https://github.com/AXeL-dev/distract-me-not" target="_blank">Distract Me Not</a>, <a href="https://github.com/AXeL-dev/dolibase" target="_blank">Dolibase</a>, <a href="https://github.com/AXeL-dev/riot-presents" target="_blank">Riot Presents</a>.',
                '✔ Contributing to open-source community. <a href="https://github.com/Jessewb786/Silaty/graphs/contributors" target="_blank">#Silaty</a> <a href="https://github.com/Dolibarr/dolibarr/graphs/contributors" target="_blank">#Dolibarr</a>',
                '✔ Learning & discovering new technologies, design patterns, best code practices.'
            ],
            period: '2017 - present',
            position: 'right'
        },
        {
            tag: 'NAMYR Communication',
            title: 'Full Stack Developer',
            description: [
                '✔ Creation of an e-commerce website using the CodeIgniter PHP framework.',
                '✔ Web scraping data for analysis purpose using <a href="http://casperjs.org/" target="_blank">CasperJS</a>.'
            ],
            period: 'October 2017 - November 2017'
        },
        {
            tag: 'Kenitra Negoce Technology',
            title: 'Software Developer',
            description: [
                '✔ Bug fixes and modules development on SaturnERP (a copy of Dolibarr ERP).',
                '✔ Redesigning the graphical interface of the cloning tool CLONEWise (based on FOG Project).',
                '✔ Using tools like <a href="https://www.atlassian.com/software/jira" target="_blank">Jira</a> for tasks management & <a href="https://git-scm.com/" target="_blank">git</a> for source code commits.',
                '✔ Administering servers/virtual machines using ssh & VMware.'
            ],
            period: 'February 2016 - June 2016',
            position: 'right'
        },
        {
            tag: 'ZTE CORPORATION',
            title: 'Traineeship',
            description: [
                'Creating a web application in PHP to simplify script generation and execution from Excel sheets.'
            ],
            period: 'February 2015 - April 2015'
        }
    ];

    private calculateAge(dateString) {
        const birthday = new Date(dateString);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getFullYear() - 1970);
    }
}