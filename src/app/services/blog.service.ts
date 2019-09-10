export class BlogService {

    posts = [
        {
            id: 15,
            title: 'I fall in ❤️ with Vue.js',
            date: 'August 3, 2019',
            author: 'AXeL',
            image: './assets/img/posts/vuejs.jpg',
            text: `
            <p>
                As a web developer i was really struggling to choose which front-end technology to work with, especially since there are thousands of javascript libraries & frameworks, and honnestly choose among all these libraries is not that easy (every library has benefits & cons).
            </p>
            <p class="mgt-10">
                So i first started with <a href="https://jquery.com/">jQuery</a> which <b>was</b> really popular, known by its simplicity & easy to use API, having a large amount of plugins to choose from, i really liked it! Then, arrives the jQuery fall! jQuery was loosing performance especially with the new versions of web browsers & was outdated somehow, in addition that some developers write "spaghetti code" with jquery (i don't do like so 🙄, don't trust me xD), and that gave the opportunity to the new generation of frameworks & libraries to take more place on the market.
            </p>
            <p class="mgt-10">
                I still remember when i first heard about <b>Angular</b>, <b>Backbone.js</b> & <b>Ember.js</b>, i was so curious to know what they have to offer but i never had time or ambition to satisfy my curiosity. Time passed & then i decided to start at least with Angular, i tried Angular 2 which i found great but not so easy to master (need a lot of time & practice). I decided then to look at <b>React</b> which was more simpler somehow but wasn't enough convincing... Okay, till here my last choice was <b>Vue.js</b> right? but i didn't try to look at it! 😅, i thought that it was like the others & i said: "okay, let's wait until i get a job position then i'll choose depending on the job prerequisites."
            </p>
            <p class="mgt-10">
                I also tried some other libraries like <a href="https://riot.js.org/">RiotJS</a> (which i used on my portfolio by the way) & <a href="https://preactjs.com/">Preact</a> (which seems to be a pretty good alternative for React), but they wasn't enough powerful/feature-rich even if they was easy to learn & use.
            </p>
            <p class="mgt-10">
                Once i had a job, i was disappointed 😞 because they wasn't caring about the used technologies more than the results.. In addition that we was mainly working on some old open source projects which certainly use old technologies.. Days passed and i finally got a front-end project to work on! the project was mainly written in AnuglarJS (the 1st & old version of Angular) & was doing some calls to an API to retrieve data, so i started learning <a href="https://angularjs.org/">AngularJS</a>! it was really simple (compared to the others), in less than a week i was able to understand the whole code of the project & in the next week the modifications on the project was done! <b>Happy end!</b> don't you think so? in fact, no.. AngularJS was outdated since Angular 2++ took his place, so continuing to use such a library may be only a waste of time & effort.
            </p>
            <p class="mgt-10">
                Then comes the day when i decided to look at <a href="https://vuejs.org/">Vue.js</a>, i was so impressed how much it was similiar to both AngularJS & React, in fact Vue is practically a merge between Angular & React with a simple advantage that there is no restrictions about the way you want to write your code, so if you are an Angular developer you can still use the old way of AngularJS & if you are coming from the React world you might use the ES2015 syntax & the JSX power. That's just <b>awesome</b> & <b>lovely</b>!
            </p>
            `,
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
            text: `
            <p>
                <a href="https://www.phoenixos.com/" target="_blank">Phoenix OS</a> is a free, Android™ based project operating system that can be installed on tablets, laptops and desktop computers. It is an "enhanced" version of Android focused on bringing Windows features such as the well-known "Start Menu" and "Task Bar".
            </p>
            <p class="mgt-10">
                <img src="./assets/img/posts/phoenix-os-desktop.jpg" alt="Phoenix OS" />
            </p>
            <p class="mgt-10">
                To try Phoenix OS simply download it & follow the installation steps on the <a href="http://www.phoenixos.com/en/download_x86">official website</a>.
            </p>
            <p class="mgt-10">
                <a href="https://www.fosshub.com/Phoenix-OS.html">Source</a>
            </p>
            `,
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
            text: `
            <p>
                <a href="https://github.com/osTicket" target="_blank">osTicket</a> is a widely-used open source support ticket system brought to you by <a href="https://osticket.com/" target="_blank">osticket.com</a>. It seamlessly integrates inquiries created via email and web-based forms into a simple easy to use multi-user web interface. Easily manage, organize and archive all your support requests and responses in one place while providing your clients with accountability and responsiveness they deserve.
            </p>
            <p class="mgt-10">
                <img src="./assets/img/posts/osticket-theme.png" alt="osTicket" />
            </p>
            <p class="mgt-10">
                <span class="bold-text">(*) Note:</span> the above image shows a paid theme for osTicket client side. Check this <a href="https://osticketthemes.com/demo/">demo</a> for more details.
            </p>
            <p class="mgt-10">
                You can download osTicket for free <a href="https://osticket.com/download/">here</a>. You can also enhance it with your own set of <a href="https://github.com/clonemeagain/awesome-osticket">plugins & themes</a>.
            </p>
            <p class="mgt-10">
                <a href="http://www.ostickethacks.com/demo/demo_info.php">Source</a>
            </p>
            `,
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
            text: `
            <p>
                <a href="https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol" target="_blank">LDAP</a> is an internet protocol mainly used to centralise data. A good use case example of LDAP is centralised authentication, which simply consist on using the same username & password to access any sort of application inside the LDAP circle. Surely, this is not the only purpose of LDAP, it could even be used to centralise any kind of data so you can access them anytime & anywhere right in the same place.
            </p>
            <p class="mgt-10">
                <img src="./assets/img/posts/ldap-auth.jpg" alt="LDAP" />
            </p>
            <p class="mgt-10">
                If you are interested in LDAP & you want to give it a try, the links below could help you:
            </p>
            <ul class="disc-list mgt-10">
                <li><a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-openldap-and-phpldapadmin-on-ubuntu-16-04">Install and Configure OpenLDAP on Ubuntu</a></li>
                <li><a href="https://github.com/leenooks/phpLDAPadmin">phpLDAPadmin</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Active_Directory">Active Directory</a></li>
            </ul>
            `,
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
            text: `
            <p>
                Have you ever tried moving from windows to linux but you couldn't find your favorite softwares..? well, this was past! Now with <a href="https://www.winehq.org/">wine</a>, you can run a bunch of windows apps on linux like if you were on windows.
            </p>
            <p class="mgt-10">
                So, to install Photoshop CS6 on a debian distribution (Ubuntu, etc..), please follow the instructions below:
            </p>
            <blockquote>
                sudo apt install wine
            </blockquote>
            <blockquote>
                wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
            </blockquote>
            <blockquote>
                sudo mv winetricks /usr/bin/winetricks
            </blockquote>
            <blockquote>
                winetricks atmlib gdiplus msxml3 msxml6 vcrun2005 vcrun2005sp1 vcrun2008 ie6 fontsmooth-rgb gecko
            </blockquote>
            <p class="mgt-10">
                Once all requirements installed, you can then run the PS CS6 installer or use this <a href="http://www.mediafire.com/file/f9u3szehp7yx7zd/Photoshop+CS6+Portable.rar">portable version</a> that you can run immediately after extraction.
            </p>
            <p class="mgt-10">
                To run a <span class="bold-text">.exe</span> file with wine simply use the command:
            </p>
            <blockquote>
                wine executable_name_and_path.exe
            </blockquote>
            <p class="mgt-10">
                Enjoy!
            </p>
            `,
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
            text: `
            <p>
                <a href="https://github.com/petervanderdoes/gitflow-avh" target="_blank">Gitflow</a> is a git branching and release management workflow that helps developers keep track of features, hotfixes and releases in bigger software projects. This workflow has lot of commands to type and remember, so there’s a <a href="https://github.com/petervanderdoes/gitflow-avh#git-flow-usage">library of git subcommands</a> to help automate some parts of the flow to make working with it easier.
            </p>
            <p class="mgt-10">
                <img src="./assets/img/posts/gitflow.png" alt="Gitflow" />
            </p>
            <p class="mgt-10">
                To install the git-flow package & start using it in your projects, simply follow the instructions in the links below:
            </p>
            <ul class="disc-list mgt-10">
                <li><a href="https://github.com/petervanderdoes/gitflow-avh/wiki/Installation">Installation instructions</a></li>
                <li><a href="https://github.com/petervanderdoes/gitflow-avh#git-flow-usage">Usage</a></li>
                <li><a href="https://nvie.com/posts/a-successful-git-branching-model/">Learn more</a></li>
            </ul>
            <p class="mgt-10">
                <a href="https://jeffkreeftmeijer.com/git-flow/">Source</a>
            </p>
            `,
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
            text: `
            <p>
                Well.. this is a big discussion subject but i'll try to be short & focus on the points i wanna talk about.
            </p>
            <p class="mgt-10">
                So.. it have been 2 years now or maybe a little more since i'm doing some freelancing tasks & compared to my previous jobs career "especially in my country" i could say that i was <b>a loser</b>.. okay, so why am i saying this? what's the point?
            </p>
            <p class="mgt-10">
                The point is if you don't work hard to achieve your dreams, someone else will hire you to achieve theirs. And when it comes to dreams they could ask you to build a plane while you don't even know how to build a car.. You get me, right?
            </p>
            <p class="mgt-10">
                Okay..! so what's the benefits of freelance:
            </p>
            <ul class="disc-list mgt-10">
                <li><b>You can work at your own pace</b> == ! stress and ! hard deadlines</li>
                <li><b>You are free</b> to choose/accept the project(s) you want to work on/you feel interested about</li>
                <li><b>You can & will do/learn much things</b> (your time is yours)</li>
                <li><b>No protocols, no headaches, no wars..</b></li>
            </ul>
            <p class="mgt-10">
                Cool! what about the cons? yup, there are always some:
            </p>
            <ul class="disc-list mgt-10">
                <li><b>No guarantee</b> (it's not easy to find some tasks or projects to work on, unless you have some experience)</li>
                <li><b>Laziness</b>, wasting time sleeping or doing nothing.. (yeah i know.. so just do something ! doing some sports, yoga or any kind of activity could help)</li>
                <li><b>Depression</b>: if you feel depressed while working/being alone, it's totally normal, we "humans" are social by nature --', so just talk to someone (even if you keep talking to yourself ^^')</li>
            </ul>
            <p class="mgt-10">
                All this said, only you could define if you'll be a successful or an unsuccessful freelancer, the same as, only you can decide to be a good or bad person.. so even if you have no significant experience(s), just carry on, find some projects to work on, there is a plenty of open source projects & opportunities waiting for you out there, and show your know-how & passion to the world !
            </p>
            `,
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
            text: `
            <p>
                Web development is a diverse and ever-changing landscape. New tools and technologies are emerging regularly, making developers face a dilemma: whether to choose long-standing and mature solutions or to give newcomers a try.
            </p>
            <p class="mgt-10">
                Back-end developers often deal with a problem of choosing between Node.js and PHP. This has become a common question lately, though earlier JavaScript, which underlies Node.js, didn’t overlap with PHP. JavaScript built front-end applications, while PHP was used for server-side development. Working together, these two languages created dynamic websites.
            </p>
            <p class="mgt-10">
                Why did the situation change? This happened because JS represented by a new Node.js started entering a server-side sphere and distract back-end developers from old-fashioned PHP.
            </p>
            <p class="bold-text mgt-10">
                Comparison of Node.js and PHP
            </p>
            <div class="center-align">
                <img src="./assets/img/posts/php-vs-node-cmp.png" alt="PHP vs Node.js" />
            </div>
            <p>
                It is quite difficult to choose a winner in PHP or Node.js on the basis of their features and advantages. It would be better to build different test cases for them and carry them out against a benchmark on the same machine. This way you’ll see how they perform in equal conditions, and will be able to choose the best option for your project.
            </p>
            <p class="bold-text mgt-10">
                When should you use PHP or Node.js?
            </p>
            <p class="mgt-10">
                In spite of all the advantages and disadvantages, there’s still no ubiquitous answer as to the best solution. The technology for each backend project should be chosen individually on the basis of its specific features.
            </p>
            <p class="mgt-10">
                Choose PHP if your project includes:
            </p>
            <ul class="disc-list mgt-10">
                <li>CMS such as WordPress, Drupal, Joomla, etc</li>
                <li>Servers such as MySQL, SQL, MariaDB, Oracle, Sybase, Postgresql, etc</li>
                <li>Solution stacks such as LAMP (Linux, Apache, MySQL, PHP)</li>
            </ul>
            <p class="mgt-10">
                Choose Node.js if your project includes:
            </p>
            <ul class="disc-list mgt-10">
                <li>Streaming data transfer</li>
                <li>Real-time web development</li>
                <li>Software stacks like MEAN (mongoDB, Express.js, Angular.js, Node.js)</li>
                <li>Built-in expansion capabilities (cluster package)</li>
            </ul>
            <p class="mgt-10">
                <a href="https://www.sam-solutions.com/blog/node-js-vs-php-which-is-the-best-for-server-side-development/" target="_blank">Source</a>
            </p>
            `,
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
            text: `
            <p>
                <a href="https://magento.com/" target="_blank">Magento</a> is a platform that allows you to control your online retail store by offering multiple features that enhance the quality of your site, accessibility for users, and provide great SEO benefits. Magento CMS is one of the most widely used CMS among the top-rated eCommerce brands.
            </p>
            <div class="center-align">
                <img src="./assets/img/posts/magento-cms-1.png" alt="Magento" />
            </div>
            <p class="bold-text mgt-10">
                How does Magento differ from other CMS?
            </p>
            <p class="mgt-10">
                You may wonder in a world where the eCommerce market is quite competitive, not everyone settles on Magento CMS. Some people prefer other CMS such as Prestashop. What is it that is unique about Magento that cannot be found anywhere else?
            </p>
            <p class="mgt-10">
                Magento is the most reliable eCommerce platform among many top clients. For the past few years, Magento’s flexibility has helped gain trust from their clients. Magento can allow you to receive payments from customers through various methods. And payments can be received from all over the world without any complications. Updating your site is much easier with Magento admin panel. Another unique feature of Magento is that you can manage a number of sites with a single admin.
            </p>
            <p class="bold-text mgt-10">
                Advantages of Magento CMS
            </p>
            <ul class="mgt-10">
                <li><span class="bold-text">1</span>. Magento CMS has an easy setup process which allows amateurs to build a strong website.</li>
                <li><span class="bold-text">2</span>. They have a support team that includes over 600,000 members. Whenever you are facing difficulties due to Magento CMS, their strong support team will be right at your service during any time of the day.</li>
                <li><span class="bold-text">3</span>. Security is one of the most crucial factors during eCommerce setup. You do not want unauthorized people to access your personal information. Magento CMS offers a strongly secured service. You will have to worry less about malware and hackers. Their built-in features automatically secure your site. You do not need to put extra effort and time to protect your site.</li>
                <li><span class="bold-text">4</span>. I cannot stress it enough, more SEO benefits mean higher sales rate. Magento offers features that lead to more profits and higher sales. It reaches out to more customers.</li>
                <li><span class="bold-text">5</span>. Last but not least, Magento CMS offers great server performance. It is a high maintenance CMS that doesn’t slow down your server. Even when a large number of people are trying to access your site, you will not face difficulties. Magento allows your site to run smoothly without any interference.</li>
                <li><span class="bold-text">6</span>. It automatically updates your site when required. You do not need to run the extra mile. Your CMS can manage it all for you.</li>
                <li><span class="bold-text">7</span>. You can accept payment via multiple procedures from every corner of the world!</li>
                <li><span class="bold-text">8</span>. More available features choose from to help customize your site. More formats and functionalities available to optimize your eCommerce.</li>
            </ul>
            <img src="./assets/img/posts/magento-cms-2.png" alt="Magento" />
            <p class="bold-text mgt-10">
                Disadvantages
            </p>
            <p class="mgt-10">
                Moreover, after all the positive remarks about Magento, there are some tiny disadvantages that make people hesitant about choosing Magento CMS. Compared to other CMS, Magento is more expensive. With other CMS brands, you will have to pay less every month. Since Magento offers more benefits, it comes with a price.
            </p>
            <p class="mgt-10">
                Futhermore, Magento CMS takes a longer time to develop. Magento has a complex infrastructure that will require time to set up. Rome wasn’t built in a day. All good things take longer to develop. Magento also takes gigabytes to process. It takes up a lot of RAM. Magento is written in PHP, sometimes it cannot handle the load. This process delays and takes up more space. Another small disadvantage is that whenever Magento goes down, so will all your sites. Hence at times, your site will not function properly and it won’t be under your control.
            </p>
            <p class="bold-text mgt-10">
                Conclusion
            </p>
            <p class="mgt-10">
                Regardless of its cons, the pros cancel the cons out. Hence, Magento received the most public demand out of all eCommerce platforms in 2018. Magento CMS is a different take from the rest of the crowd. They offer benefits which other platforms are unable to offer.
            </p>
            <p class="mgt-10">
                All the advantages add up to be the best CMS there is on the market. So, you cannot possibly compare with any other CMS. If anyone who has previously used Magento knows how much sales you can make through Magento. And better sales should be the motive of any eCommerce site.
            </p>
            <p class="mgt-10">
                <a href="https://www.aspirationhosting.com/magento-cms-best-cms/" target="_blank">Source</a>
            </p>
            `,
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
            text: `
            <p>
                Some years ago jQuery was a solid solution in developing cross-browser applications and providing some fancy DOM manipulations. Things have changed a lot since then and vanilla JS has been evolving steadily. Same story with browsers since Internet Explorer mostly has turned the page too. I know jQuery dev team is moving towards their 3rd major release but i have to admit that i have been using the library even less in my projects.
            </p>
            <p class="mgt-10">
                The truth is that the nature of applications has changed. My views are connected with my data so i do not need anymore plain DOM manipulations. Now these are part of the whole UI functionality and my data flow and not the result of a key stroke. So i need sth stronger than a listener to a click event that's why i use frameworks like AngularJS and lately VueJS and PolymerJS.
            </p>
            <p class="mgt-10">
                New ECMAScript versions bring steadily even more goodies for us. New apis like <span class="bold-text">fetch()</span> shall help us run AJAX requests lightning fast. Many people still use jQuery because of the <span class="bold-text">$.ajax()</span> function but since a native alternative will gain ground i guess this shall end.
            </p>
            <p class="mgt-10">
                Vanilla js offers tons of neat selectors like <span class="bold-text">document.querySelector('myID');</span> or <span class="bold-text">document.getElementById('myID');</span> so there is no need for <span class="bold-text">$('#myID');</span> etc. I know many developers are quite experienced in using jQuery selectors and tend to ignore the vanilla js ways. In fact there are too many developers who feel that they would step outside of their comfort zone if they were asked to use the vanilla js alternatives. The truth is that most of the times vanilla js selectors cover our needs.
            </p>
            <p class="mgt-10">
                As time goes by, the most popular JS frameworks are opting to use vanilla JS instead of JQuery. In fact, the only popular JS frameworks still using JQuery are EmberJS and BackboneJS but the flow is moving away from jQuery.
            </p>
            <blockquote>
                So this is the question: Is jQuery dying?
            </blockquote>
            <p>
                <a href="https://hashnode.com/post/is-jquery-dying-ciok1zcxv01y23353nio5zfp4" target="_blank">Source</a>
            </p>
            `,
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
            text: `
            <p>
                <a href="https://www.codeigniter.com/" target="_blank">CodeIgniter</a> is one of the most popular PHP frameworks out there. Even though its activity & improvements have been too slow the last years, it stays simple, easy to learn, flexible & the most important it's blazing fast!
            </p>
            <p class="mgt-10">
                Version 4 is a complete rewrite of the framework & these are the main changes that comes with it:
            </p>
            <ul class="disc-list mgt-10">
                <li>
                    <p class="bold-text">The welcome page got a pretty new design<p>
                    <img src="./assets/img/posts/codeigniter4-welcome.png" alt="CodeIgniter4" />
                </li>
                <li>
                    <p class="bold-text">A debug bar has been introduced also</p>
                    <img src="./assets/img/posts/codeigniter4-debugbar.png" alt="CodeIgniter4" />
                </li>
                <li>
                    <p class="bold-text">The error parser has a new nice look & got some improvements</p>
                    <img src="./assets/img/posts/codeigniter4-errorparser.png" alt="CodeIgniter4" />
                </li>
                <li class="bold-text">Introduction of namespaces</li>
                <li class="bold-text">PSR-4 autoloading</li>
                <li class="bold-text">Requires PHP > 7.0</li>
            </ul>
            <p class="mgt-10">
                <span class="bold-text">Note</span>: version 4 is currently in a beta stage, wich means that it's not yet ready for production, therefore the codeigniter team promised a long term support for version 3.
            </p>
            `,
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
            text: `
            <p>
                <a href="https://riot.js.org/" target="_blank">Riot</a> is a frontend javascript library that lets you build user interfaces with custom tags using simple and enjoyable syntax. It uses a virtual DOM similar to React but faster. <span class="bold-text">Riot</span> is very tiny compared to <a href="https://reactjs.org/" target="_blank">React</a> or <a href="https://www.polymer-project.org/" target="_blank">Polymer</a>.
            </p>
            <p class="mgt-10">
                What makes Riot so interesting?
            </p>
            <ul class="disc-list mgt-10">
                <li class="bold-text">Simple to learn/use</li>
                <li class="bold-text">High performance</li>
                <li class="bold-text">Tiny size</li>
                <li class="bold-text">Stable & production ready</li>
            </ul>
            <p class="mgt-10">
                As a developer one of the main problems i face with new technologies is the significant learning curve with no guarantee that you will find some projects to work on with what you just learned, so you may be just wasting time on learning something you won't use.
                This is why i'm trying to be more consistent when it comes to choices & this is why i chose Riot ;)
            </p>
            <p class="mgt-10">
                Convinced & want to give it a try? <a href="https://riot.js.org/examples/wip/live-editor" target="_blank">here you go!</a>
            </p>
            <p class="mgt-10">
                I recently introduced Riot to my portfolio, you will find the full source code <a href="https://github.com/AXeL-dev/riotjs-portfolio" target="_blank">here</a> (note that this is not the best example of what you could do with riot).
            </p>
            `,
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
            text: `
            <p>
                <a href="https://www.dolibarr.org/" target="_blank">Dolibarr</a> is an opensource and free software package to manage companies, freelancers or foundations. It's basically a web application coded in javascript & PHP that you can use to handle your business on a local or remote server.
            </p>
            <p class="mgt-10">
                I've been working on Dolibarr for almost 3 years now and here is what i think about it.
            </p>
            <p class="mgt-10">
                Let's start with the good part:
            </p>
            <ul class="disc-list mgt-10">
                <li><span class="bold-text">Free & opensource</span> (even if the most of external modules are paid)</li>
                <li class="bold-text">Simple installation</li>
                <li class="bold-text">Ergonomic & user friendly interface</li>
                <li class="bold-text">Extensible & customisable</li>
                <li><span class="bold-text">Growing audience</span> (dolibarr is widely used in some countries like France & Greece)</li>
            </ul>
            <p class="mgt-10">
                The worst part:
            </p>
            <ul class="disc-list mgt-10">
                <li><span class="bold-text">Bugs</span> (you can easily discover a bug just by playing with your browser address bar)</li>
                <li><span class="bold-text">Spaghetti code</span> (no wonder why there is so much bugs..)</li>
                <li><span class="bold-text">Poor documentation</span> (developer documentation is really old & outdated)</li>
                <li><span class="bold-text">Slow development</span> (even if dolibarr has seen very good changes in the last years)</li>
            </ul>
            <p class="mgt-10">
                As a conclusion, i can say that a full-rewrite of dolibarr using some new web technologies is maybe needed to get a clean & easy to understand base code. Also, providing a good documentation is fundamental, especially for beginners.
            </p>
            `,
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
            text: `
            <p>
                <a href="https://www.lynda.com/" target="_blank">Lynda.com</a> is an online learning platform offering educational training courses in the fields of business, software, technology, and creative skills. It is a subsidiary of Linkedin.
            </p>
            <p class="mgt-10">
                You can get a free account by following those steps:
            </p>
            <ul class="mgt-10">
                <li><span class="bold-text">1</span>. Request a library card from <a href="https://know.freelibrary.org/MyResearch/register/policy" target="_blank">freelibrary.org</a> (or <a href="https://www.dclibrary.org/catalog/account/application" target="_blank">dclibrary.org</a>)</li>
                <li><span class="bold-text">2</span>. Accept the policy</li>
                <li><span class="bold-text">3</span>. Fill the registration form (for the Home Address i recommend you to look at <a href="https://libwww.freelibrary.org/locations/" target="_blank">locations</a>)</li>
                <li><span class="bold-text">4</span>. Check your mail after validation, and copy the login informations</li>
                <li><span class="bold-text">5</span>. Login to lynda.com with Organization Portal (<a href="https://www.lynda.com/signin/organization" target="_blank">Sign in with your organization portal</a>), type "freelibrary.org"</li>
                <li><span class="bold-text">6</span>. Fill your login informations from your mail</li>
            </ul>
            <p class="mgt-10">
                If you don't have an email you can simply use <a href="https://temp-mail.org/" target="_blank">temp-mail.org</a>. You can also use <a href="https://www.fakenamegenerator.com/" target="_blank">fakenamegenerator.com</a> to get some fake personal informations (at your own risk). Happy Learning.
            </p>
            `,
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
            text: `
            <p>
                GitHub is by far the most popular way to build and share software. That said, one weakness of the platform is that it limits who can create private repositories – that is, software projects that aren’t visible to the broader public, and are shared only with a handful of pre-defined collaborators – to paying users.
            </p>
            <p class="mgt-10">
                Fortunately, that’s no longer the case, as GitHub today announced it was <a href="https://blog.github.com/2019-01-07-new-year-new-github/" target="_blank">giving users of its free plan access to unlimited private repositories</a>. This is great news for GitHub’s users, but there is a caveat, of course.
            </p>
            <p class="mgt-10">
                Private repositories on free accounts are limited to three collaborators apiece. So, while this might work for a small project (like, for example, a team competing in a hackathon), it isn’t particularly well-suited for actual commercial usage.
            </p>
            <p class="mgt-10">
                <a href="https://thenextweb.com/dd/2019/01/05/github-now-gives-free-users-unlimited-private-repositories/" target="_blank">Source</a>
            </p>
            `,
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