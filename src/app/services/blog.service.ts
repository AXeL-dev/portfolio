import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { SlugifyPipe } from '../pipes/slugify.pipe';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  constructor(private slugifyPipe: SlugifyPipe) {
    this.init();
  }

  private authors: { [key: string]: Author } = {
    AXeL: {
      name: 'AXeL',
      image: './assets/img/avatar.jpg',
      email: 'contact.axel.dev@gmail.com',
      bio: 'A full-stack developer and freelancer with a passion for thoughtful coding, collaboration, and open-source. I spend my days coding, reading mangas, watching animes or playing video games.',
    },
  };

  private posts: Post[] = [
    {
      title: 'React: Build a detachable component with Dnd-kit',
      date: '2022/02/06',
      author: this.authors['AXeL'],
      image: './assets/img/posts/dnd-kit.png',
      content: './assets/blog/dnd-kit-detachable-component.md',
      tags: ['React', 'Typescript', 'DnD', 'Dnd-kit'],
    },
    {
      title:
        'A handy tip to get your saved passwords without revealing them 🔒',
      date: '2021/09/30',
      author: this.authors['AXeL'],
      image: './assets/img/posts/password.png',
      content: './assets/blog/copy-password-tip.md',
      tags: ['Tip', 'Javascript'],
    },
    {
      title: 'YouTube viewer got a new look 🎉',
      date: '2021/09/26',
      author: this.authors['AXeL'],
      image: './assets/img/posts/youtube-viewer/home-dark.jpg',
      content: './assets/blog/youtube-viewer-new-look.md',
      tags: ['Teasing', 'Typescript', 'React', 'Material-UI', 'Web extension'],
    },
    {
      title: 'Material-UI 5 is out!',
      date: '2021/09/16',
      author: this.authors['AXeL'],
      image: './assets/img/posts/mui-v5.jpeg',
      content: './assets/blog/mui-v5.md',
      tags: ['Javascript', 'React', 'Material-UI'],
    },
    {
      title: 'Best Drag & Drop libraries for React',
      date: '2021/08/20',
      author: this.authors['AXeL'],
      image: './assets/img/posts/react-dnd.jpg',
      content: './assets/blog/react-dnd.md',
      tags: ['Javascript', 'React', 'DnD'],
    },
    {
      title: 'Linux distributions you should try!',
      date: '2021/08/10',
      author: this.authors['AXeL'],
      image: './assets/img/posts/best-linux-distros.png',
      content: './assets/blog/best-linux-distros.md',
      tags: ['Linux', 'Ubuntu'],
    },
    {
      title:
        'VirtualBox: Setup a shared network between your Guest & Host machines',
      date: '2021/08/07',
      author: this.authors['AXeL'],
      image: './assets/img/posts/virtualbox.jpg',
      content: './assets/blog/virtualbox-setup-shared-network.md',
      tags: ['Linux', 'VirtualBox'],
    },
    {
      title: 'My list of top 10 animes that worth watching',
      date: '2021/07/30',
      author: this.authors['AXeL'],
      image: './assets/img/posts/top-10-animes.jpg',
      content: './assets/blog/top-10-animes.md',
      tags: ['Anime', 'Top 10'],
    },
    {
      title: 'Emote: A modern emoji picker for Linux 🚀',
      date: '2021/07/01',
      author: this.authors['AXeL'],
      image: './assets/img/posts/emoji-linux.jpg',
      content: './assets/blog/emote-emoji-picker.md',
      tags: ['Linux', 'Emoji'],
    },
    {
      title: 'React: Cancel axios requests the right way!',
      date: '2021/06/19',
      author: this.authors['AXeL'],
      image: './assets/img/posts/request.jpg',
      content: './assets/blog/react-cancel-axios-requests.md',
      tags: ['Javascript', 'React', 'Axios'],
    },
    {
      title: 'Distract Me Not v2 is coming soon!',
      date: '2021/01/01',
      author: this.authors['AXeL'],
      image: './assets/img/posts/distract-me-not-v2.jpg',
      content: './assets/blog/distract-me-not-v2.md',
      tags: ['Teasing', 'Javascript', 'React', 'Web extension'],
    },
    {
      title: 'Shared state management in React',
      date: '2020/12/20',
      author: this.authors['AXeL'],
      image: './assets/img/posts/react-state.jpg',
      content: './assets/blog/shared-state-management-in-react.md',
      tags: ['Javascript', 'React'],
    },
    {
      title: 'Typescript decorators: Some practical examples',
      date: '2020/12/03',
      author: this.authors['AXeL'],
      image: './assets/img/posts/ts.jpg',
      content: './assets/blog/typescript-decorators.md',
      tags: ['Typescript', 'Javascript'],
      // syntaxHighlighting: {
      //     showLineNumbers: true
      // }
    },
    {
      title: 'Codingame: A tricky question',
      date: '2020/11/28',
      author: this.authors['AXeL'],
      image: './assets/img/posts/codingame.jpg',
      content: './assets/blog/codingame-tricky-question.md',
      tags: ['Codingame', 'Javascript'],
    },
    {
      title: 'Are you a lion or a hedgehog? 🤔',
      date: '2020/11/06',
      author: this.authors['AXeL'],
      image: './assets/img/posts/lionhog.jpg',
      content: './assets/blog/lion-or-hedgehog.md',
      tags: ['Story', 'Memory'],
    },
    {
      title: 'Ionic vs NativeScript',
      date: '2020/06/06',
      author: this.authors['AXeL'],
      image: './assets/img/posts/ionic-vs-native-script.png',
      content: './assets/blog/ionic-vs-native-script.md',
      tags: [
        'Comparison',
        'Javascript',
        'Mobile Apps',
        'Ionic',
        'NativeScript',
        'Angular',
      ],
    },
    {
      title: 'Ant Design',
      date: '2019/11/30',
      author: this.authors['AXeL'],
      image: './assets/img/posts/ant-design.png',
      content: './assets/blog/ant-design.md',
      tags: ['Design', 'Front-end', 'Angular', 'React'],
    },
    {
      title: 'React, Vue or Angular?',
      date: '2019/11/29',
      author: this.authors['AXeL'],
      image: './assets/img/posts/R-V-A.jpg',
      content: './assets/blog/react-vue-or-angular.md',
      tags: [
        'Comparison',
        'Javascript',
        'Front-end',
        'Angular',
        'React',
        'Vue',
      ],
    },
    {
      title: '!! (not not) operator in JavaScript',
      date: '2019/10/25',
      author: this.authors['AXeL'],
      image: './assets/img/posts/javascript.png',
      content: './assets/blog/not-not-operator-in-javascript.md',
      tags: ['Javascript', 'Front-end'],
    },
    {
      title: 'Some useful design patterns',
      date: '2019/09/28',
      author: this.authors['AXeL'],
      image: './assets/img/posts/design-patterns.jpeg',
      content: './assets/blog/some-useful-design-patterns.md',
      tags: ['Design patterns', 'Architecture', 'Back-end', 'PHP'],
    },
    {
      title: 'Why i switched to Angular',
      date: '2019/09/21',
      author: this.authors['AXeL'],
      image: './assets/img/posts/angular.jpg',
      content: './assets/blog/why-i-switched-to-angular.md',
      tags: ['Angular', 'Front-end', 'Framework', 'Javascript'],
    },
    {
      title: '10 interview questions around Symfony',
      date: '2019/09/20',
      author: this.authors['AXeL'],
      image: './assets/img/posts/symfony.jpg',
      content: './assets/blog/symfony-interview-questions.md',
      tags: ['Interview', 'Symfony', 'Framework', 'Back-end'],
    },
    {
      title: 'Frontend vs Backend',
      date: '2019/09/11',
      author: this.authors['AXeL'],
      image: './assets/img/posts/frontend-vs-backend.jpg',
      content: './assets/blog/frontend-vs-backend.md',
      tags: ['Comparison', 'Front-end', 'Back-end'],
    },
    {
      title: 'I fall in ❤️ with Vue.js',
      date: 'August 3, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/vuejs.jpg',
      content: './assets/blog/vuejs.md',
      tags: ['Front-end', 'Javascript', 'Vue.js'],
    },
    {
      title: 'Phoenix OS: use Android as a desktop OS',
      date: 'June 29, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/phoenix-os.jpg',
      content: './assets/blog/phoenix-os.md',
      tags: ['OS', 'Desktop', 'Phoenix OS'],
    },
    {
      title: 'osTicket: An open source ticket manager',
      date: 'June 23, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/osticket.png',
      content: './assets/blog/osticket.md',
      tags: ['osTicket', 'PHP'],
    },
    {
      title: 'Discover LDAP',
      date: 'June 22, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/ldap.png',
      content: './assets/blog/ldap.md',
      tags: ['LDAP'],
    },
    {
      title: 'Run Photoshop CS6 on Linux',
      date: 'June 15, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/photoshop.jpg',
      content: './assets/blog/photoshop-on-linux.md',
      tags: ['Software', 'Photoshop', 'Linux', 'Wine'],
    },
    {
      title: 'Gitflow: A successful branching model',
      date: 'May 25, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/gitflow-mini.png',
      content: './assets/blog/gitflow.md',
      tags: ['Workflow', 'Git'],
    },
    {
      title: 'Why being a freelancer is better !',
      date: 'May 18, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/freelancer.jpg',
      content: './assets/blog/freelancer.md',
      tags: ['Discussion', 'Freelance'],
    },
    {
      title: 'PHP vs node.js',
      date: 'March 27, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/php-vs-node.jpg',
      content: './assets/blog/php-vs-node.md',
      tags: ['Comparison', 'PHP', 'node.js'],
    },
    {
      title: 'Magento CMS: Presentation',
      date: 'March 27, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/magento.jpg',
      content: './assets/blog/magento.md',
      tags: ['CMS', 'e-commerce', 'Magento', 'PHP'],
    },
    {
      title: 'Is jQuery dying?',
      date: 'March 27, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/jquery.png',
      content: './assets/blog/jquery.md',
      tags: ['Javascript', 'jQuery'],
    },
    {
      title: "CodeIgniter 4: What's new",
      date: 'March 26, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/codeigniter.png',
      content: './assets/blog/codeigniter.md',
      tags: ['Back-End', 'Framework', 'PHP', 'CodeIgniter'],
    },
    {
      title: 'Riot JS: Simple yet Powerful',
      date: 'March 25, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/riot-js.png',
      content: './assets/blog/riot-js.md',
      tags: ['Front-End', 'Javascript', 'Riot.js'],
    },
    {
      title: 'Dolibarr.. My opinion',
      date: 'March 25, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/dolibarr.png',
      content: './assets/blog/dolibarr.md',
      tags: ['ERP', 'CRM', 'PHP', 'Dolibarr'],
    },
    {
      title: 'Get a free account on lynda.com',
      date: 'March 25, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/lynda.com.jpg',
      content: './assets/blog/lynda.md',
      tags: ['e-learning'],
    },
    {
      title: 'GitHub: Free unlimited private repos',
      date: 'January 7, 2019',
      author: this.authors['AXeL'],
      image: './assets/img/posts/github.png',
      content: './assets/blog/github-private-repos.md',
      tags: ['Git', 'Github'],
    },
  ];

  private init() {
    let currentId = this.posts.length;
    this.posts.forEach((post) => {
      // Generate post id
      post.id = currentId--;
      // Generate slug
      if (!post.slug) {
        post.slug = this.slugifyPipe.transform(post.title);
      }
    });
  }

  getPosts() {
    return this.posts.slice();
  }

  getPostBySlug(slug: string) {
    return this.posts.find((p) => p.slug == slug);
  }

  getPostById(id: number) {
    return this.posts.find((p) => p.id == id);
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
  shortname: 'axel-dev',
};
