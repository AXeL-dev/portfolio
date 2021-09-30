Oh yeah, finally a new release of YouTube viewer but that's not all! This release comes with a new design, some exciting features & so many improvements ✨.

<blockquote><h4>Motivation 🔥</h4></blockquote>

YouTube viewer is a useful piece of app that i use daily to keep tracking my favorite youtube channels, but recently i started noticing some slowness/performance issues while using it. I tried then to get a look on the existing code to see if it could be improved, but the answer was "Hell, no..", the codebase was somehow outdated & even "badly coded 👀" since it was one of my first projects using React.. So yeah, in the end i decided to restart it from scratch, with a main goal in mind: Performance! 🚀 (& a little bit of freshness 👀).

Cool! Let's now discover what has been added, but also what was removed.

<blockquote><h4>Main changes</h4></blockquote>

- A fresh & elegant new design (highly inspired from the [videoder](https://www.videoder.com/) app).
- [Redux](https://redux.js.org/) for state management (replaces [jotai](https://github.com/pmndrs/jotai)).
- [Redux RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for data fetching/caching.
- [Dnd-kit](https://dndkit.com/) replaces [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for channels reordering using drag & drop.
- Added an embedded video player (so videos can now be played right from the app).
- Added a Dark mode 🕶️ .

<blockquote><h4>Dropped features</h4></blockquote>

- Popup mode on the webextension is not available anymore due to 2 main reasons:

  - on Firefox the drag-n-drop was not working on the popup mode.
  - Data import using a file input wasn't working as well.

- Useless settings removed, which also reduces the complexity of the app for users.

<blockquote><h4>Remaining tasks</h4></blockquote>

- Translations (for now the app is only available in English)
- Unit tests (should help on detecting bugs/regressions)
- ... You can leave your suggestions in the comment section below!

Finally, let's take a closer look on the new app design.

- Home page (old vs new):

<img-comparison-slider class="custom-comparison-slider">
  <img  slot="first" src="./assets/img/posts/youtube-viewer/home-before.jpg" width="100%">
  <img  slot="second" src="./assets/img/posts/youtube-viewer/home.jpg" width="100%">
  <span slot="handle" class="custom-comparison-handle"></span>
</img-comparison-slider>

- Channels page:

<img-comparison-slider class="custom-comparison-slider">
  <img  slot="first" src="./assets/img/posts/youtube-viewer/channels-before.jpg" width="100%">
  <img  slot="second" src="./assets/img/posts/youtube-viewer/channels.jpg" width="100%">
  <span slot="handle" class="custom-comparison-handle"></span>
</img-comparison-slider>

- Settings page:

<img-comparison-slider class="custom-comparison-slider">
  <img  slot="first" src="./assets/img/posts/youtube-viewer/settings-before.jpg" width="100%">
  <img  slot="second" src="./assets/img/posts/youtube-viewer/settings.jpg" width="100%">
  <span slot="handle" class="custom-comparison-handle"></span>
</img-comparison-slider>

- New settings page (Dark mode):

![settings-dark-mode](./assets/img/posts/youtube-viewer/settings-dark.jpg)

- Video player popup:

![video-player-popup](./assets/img/posts/youtube-viewer/video-player.jpg)

**Note:** The webextension release will be available in the next few weeks (since some of the webextension functionnalities are still under testing).
