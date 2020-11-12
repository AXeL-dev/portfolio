import { Author } from '../models/author.model';
import { SocialLink } from '../models/social-link.model';
import { Service } from '../models/service.model';
import { Skill } from '../models/skill.model';
import { Technology } from '../models/technology.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Reference } from '../models/reference.model';
import { Tool } from '../models/tool.model';

export class HomeService {

    author: Author = {
        name: 'Denna Anass',
        image: './assets/img/coder.jpg',
        job: 'Full Stack Developer',
        bio: 'My name is Anass or just call me AXeL. I started coding when i was 17, since then, i have acquired a good taste in areas like front-end & back-end development, database management, devOps, ethical hacking & network security.<br> I like challenges, discovering new stuff and contributing to open source on my free time.',
        age: this.calculateAge('1995-02-25'),
        location: 'Rabat, Morocco',
        email: 'contact.axel.dev@gmail.com',
        website: 'https://axel-dev.github.io/'
    };

    socials: SocialLink[] = [
        { icon: 'github', link: 'https://github.com/AXeL-dev' },
        { icon: 'gitlab', link: 'https://gitlab.com/AXeL-dev' },
        { icon: 'youtube-play', link: 'https://www.youtube.com/channel/UCctMROLcvkiqpOyF98_WUYg' },
        { icon: 'twitter', link: 'https://twitter.com/AXeL87749763' },
        { icon: 'facebook', link: '#' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/anass-denna' }
    ];

    services: Service[] = [
        { title: 'Front End Development', icon: 'desktop', description: 'Angular, React, Jquery, VanillaJS, HTML5, CSS / SASS, JavaScript / ES6, TypeScript, SPA, PWA, Web Sockets' },
        { title: 'Back End Development', icon: 'cubes', description: 'PHP (CodeIgniter, Symfony), MySQL / SQL Server / MongoDB, CMS (Wordpress, Drupal), Python, Node.js, C#, ASP.NET, Rest API, OOP' },
        { title: 'Mobile Development', icon: 'mobile', description: 'Ionic, PhoneGap, Android SDK' },
        { title: 'Web Hosting', icon: 'server', description: 'FTP, SSH, cPanel, Linux shell' },
        { title: 'Data Mining', icon: 'search-plus', description: 'CasperJS, PhantomJS, Puppeteer, Web Scraper' },
        { title: 'DevOps', icon: 'code-fork', description: 'Git / Github / Gitlab, CI / CD, Gulp, Webpack, npm' }
    ];

    skills: Skill[] = [
        { name: 'Javascript / ES6', progress: 90 },
        { name: 'PHP', progress: 95 },
        { name: 'SQL / NoSQL', progress: 85 },
        { name: 'Node.js', progress: 70 },
        { name: 'Python', progress: 70, position: 'right' },
        { name: 'C', progress: 80, position: 'right' },
        { name: 'C++', progress: 60, position: 'right' },
        { name: '.NET / C#', progress: 50, position: 'right' }
    ];

    tools: Tool[] = [
        { name: 'Visual Studio Code', image: './assets/img/tools/vs-code.png' },
        { name: 'Sublime Text', image: './assets/img/tools/sublime-text.png' },
        { name: 'PHP Storm', image: './assets/img/tools/php-storm.png' },
        { name: 'Android Studio', image: './assets/img/tools/android-studio.png' },
        { name: 'Trello', image: './assets/img/tools/trello.png' },
        { name: 'Git', image: './assets/img/tools/git.png' },
        { name: 'NPM', image: './assets/img/tools/npm.png' },
        { name: 'Meld', image: './assets/img/tools/meld.png' },
        { name: 'FileZilla', image: './assets/img/tools/filezilla.png' },
        { name: 'GIMP', image: './assets/img/tools/gimp.png' }
    ];

    technologies: Technology[] = [
        // { name: 'HTML', image: './assets/img/tech/html.png' },
        // { name: 'CSS', image: './assets/img/tech/css.png' },
        { name: 'Bootstrap', image: './assets/img/tech/bootstrap.png' },
        // { name: 'Semantic UI', image: './assets/img/tech/semantic-ui.png' },
        // { name: 'Materialize', image: './assets/img/tech/materialize-css.png' },
        { name: 'Sass', image: './assets/img/tech/sass.png' },
        { name: 'Jekyll', image: './assets/img/tech/jekyll.png' },
        // { name: 'PHP', image: './assets/img/tech/php.png' },
        { name: 'Symfony', image: './assets/img/tech/symfony.png' },
        { name: 'CodeIgniter', image: './assets/img/tech/codeigniter.png' },
        { name: 'Wordpress', image: './assets/img/tech/wordpress.png' },
        { name: 'Drupal', image: './assets/img/tech/drupal.png' },
        { name: 'MySQL', image: './assets/img/tech/mysql.png' },
        { name: 'mongoDB', image: './assets/img/tech/mongodb.png' },
        // { name: 'Javascript', image: './assets/img/tech/js.png' },
        { name: 'jQuery', image: './assets/img/tech/jquery.png' },
        // { name: 'Ajax', image: './assets/img/tech/ajax.png' },
        { name: 'TypeScript', image: './assets/img/tech/ts.png' },
        { name: 'Gulp', image: './assets/img/tech/gulp.png' },
        { name: 'Angular', image: './assets/img/tech/angular.png' },
        { name: 'Firebase', image: './assets/img/tech/firebase.png' },
        { name: 'Ionic', image: './assets/img/tech/ionic.png' },
        { name: 'Vue.js', image: './assets/img/tech/vue.png' },
        { name: 'React', image: './assets/img/tech/react.png' },
        { name: 'Riot JS', image: './assets/img/tech/riot.png' },
        { name: 'Node.js', image: './assets/img/tech/nodejs.png' },
        { name: 'GSAP', image: './assets/img/tech/gsap.png' },
        { name: '.Net', image: './assets/img/tech/dotnet.png' },
        { name: 'SQL Server', image: './assets/img/tech/sql-server.png' },
        // { name: 'Docker', image: './assets/img/tech/docker.png' },
        // { name: 'Qt Framework', image: './assets/img/tech/qt.png' },
        // { name: 'GTK', image: './assets/img/tech/gtk.png' },
        // { name: 'Android', image: './assets/img/tech/android.png' },
        // { name: 'Electron', image: './assets/img/tech/electron.png' },
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
            tag: 'eCapital',
            title: 'Full Stack Developer',
            description: [
                '✔ Developing & maintaining web apps/websites using Symfony, Wordpress, Angular & Firebase.',
                '✔ Building mobile apps with Ionic.'
            ],
            period: 'September 2019 - present'
        },
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
            period: 'April 2019 - July 2019',
            position: 'right'
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
            period: '2017 - present'
        },
        {
            tag: 'NAMYR Communication',
            title: 'Full Stack Developer',
            description: [
                '✔ Creation of an e-commerce website using the CodeIgniter PHP framework.',
                '✔ Web scraping data for analysis purpose using <a href="http://casperjs.org/" target="_blank">CasperJS</a>.'
            ],
            period: 'October 2017 - November 2017',
            position: 'right'
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
            period: 'February 2016 - June 2016'
        },
        {
            tag: 'ZTE CORPORATION',
            title: 'Traineeship',
            description: [
                'Creating a web application in PHP to simplify script generation and execution from Excel sheets.'
            ],
            period: 'February 2015 - April 2015',
            position: 'right'
        }
    ];

    funFact: Reference[] = [
        {
            title: 'Baka.. 🙄',
            content: 'In my childhood, i often mixed ⬅️ directions ➡️'
        },
        {
            title: 'Nerd or Geek? 🤓',
            content: 'I spent too much time coding in <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a> (2012 to 2018). It was my first-class meths.. 💊'
        },
        {
            title: 'Lazy 🤫',
            content: 'Failed my 1st year of University because of laziness 👀'
        }
    ];

    private calculateAge(dateString) {
        const birthday = new Date(dateString);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getFullYear() - 1970);
    }
}