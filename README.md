# coderkxh-music(React18+TS)

**项目描述:** Kcm 音乐-PC Web 音乐项目
`本项目是一个基于开源Node BFF层NeteaseCloudMusicApi（网易云音乐接口）开发的Web响应式音乐播放器。它利用现代前端技术栈，为用户提供了丰富的音乐体验，包括歌曲播放、歌单管理、排行榜浏览等功能，并通过使用虚拟列表来对长列表进行性能优化`
- **技术栈:** React18，React Router，Redux Toolkit，Axios，TypeScript，styled-components，ahooks
- **页面开发:** 首页、歌曲排行榜、歌单、歌单详情、视频与视频播放、音乐播放器、播放器详情等页面及其功能的开发
- **核心功能:** 播放控制、播放模式、播放进度、播放列表、歌词展示、视频播放、主题切换等核心功能
- **统一管理API:** 使用TS + Axios进行二次封装，并统一管理API请求模块，实现了对网易云音乐接口的集中管理和调
- **性能优化:** 将长列表的展示通过虚拟列表进行dom渲染优化，提升页面渲染效率与滚动时的渲染性能
- **代码拆分将:** 经常需要重新渲染的页面，其中一些是不需要重新渲染的代码进行拆分成一些小组件，结合 useCallback 与 useMemo 来降低页面 DOM 的重新渲染率，提高页面的渲染效率
- **响应式布局:** 运用媒体查询、Flex 和 Grid 布局实现页面自适应，适配多设备

下面是项目中部分页面的截图

## 项目截图

![](./docs/screenshots/1.png)

![](./docs/screenshots/2.png)

![](./docs/screenshots/3.png)

![](./docs/screenshots/4.png)

![](./docs/screenshots/5.png)

![](./docs/screenshots/6.png)

![](./docs/screenshots/7.png)

![](./docs/screenshots/8.png)

![](./docs/screenshots/9.png)

![](./docs/screenshots/10.png)

![](./docs/screenshots/11.png)

![](./docs/screenshots/12.png)

`声明: 该项目仅为个人学习项目，不涉及任何商业用途，也禁止任何人用于商业用途`
