import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// 默认配置
export default defineConfig({
  lang: 'zh-CN', //语言，可选 en-US
  title: "YY の 主页",
  description: "A VitePress Site",
  base: "/home/",
  head: [
    ['script', 
      { 
        defer: '', 
        async: '',
        src: 'https://cn.vercount.one/js' // 直接引入 Vercount 脚本
      },
    ],
    // Umami 脚本
    // ['script',
    //   { 
    //     type: 'text/javascript',
    //     src: "https://home.wyyan.us.kg/script.js",
    //     "data-website-id":"87ca9c6c-291c-4009-8bd8-8138c832f7da",
    //     defer: '',
    //   },
    // ],
    //fav图标
    ['link', { rel: 'icon', href: '/home/logo.svg'}],
    //谷歌字体
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }]
],
  //启用深色模式
  appearance:'dark', 
  //markdown配置
  markdown: {
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    }
  },


  // 主题配置
  themeConfig: {
    // 404页面的配置
    notFound: {
      title: "页面施工中（写点什么呢？🤔）",
      quote: "",
      linkText: "回首页看雪花咯~"
      },
    //自定义上下页名 //
    docFooter: { 
      prev: '再看看', 
      next: '继续看', 
    }, 
    outline: { 
      level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    // outline:false, // 关闭标题显示
    //返回顶部文字修改 //
    returnToTopLabel:'返回顶部', 
    //侧边栏文字更改(移动端) //
    sidebarMenuLabel:'目录', 
    //页脚 
    footer: {
      message: `基于<a href="https://github.com/vuejs/vitepress/blob/main/LICENSE"> MIT 许可发布</a> | 
                <span id="vercount_container_site_pv" style="display:none">总访问量 <span id="vercount_value_site_pv">Loading</span> 次</span>`,
      copyright: `Copyright © 2024-2025 YY`
  },
    //本地搜索
    search: {
      provider: 'local',
      options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
    //手机端深浅模式文字修改 //
    darkModeSwitchLabel: '切换主题', 
    //左上角logo
    logo: '',
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/nav/index.md' },
      { text: '文档', link: '/介绍' },
      { text: '监控', link: 'https://kuma.wyyan.us.kg' },
      { text: '统计',
        items: [
          { text: '主页', link: 'https://um.wyyan.us.kg/share/8rTWC8f8D65WOW9e/home.wyyan.us.kg' },
          { text: '小站', link: 'https://um.wyyan.us.kg/share/2NZh4OtgMqfilVg4/pan.wyyan.us.kg' },
        ] 
      },
      {
        text: '指南',
        items: [
            { text: 'VitePress', link: 'https://vitepress.dev/' },
            { text: '快速上手', link: 'https://vitepress.yiov.top/getting-started.html' }
        ]
    }
    ],
    // 侧边栏
    sidebar: [
      {
        // 分组标题
        text: '写在前面',
        items: [
          { text: '介绍', link: '/介绍' },
          { text: 'VitePress 是什么？', link: '/VitePress 是什么？' }
        ]
      },
      {
        // 分组标题
        text: '教程',
        items: [
          { text: 'Markdown', link: '/Markdown' },
          { text: '施工中', link: '/施工中' }
        ]
      },
      {
        // 分组标题
        text: '施工中',
        items: [
          { text: '施工中', link: '/施工中' },
          { text: '施工中', link: '/施工中' }
        ]
      }
    ],
    // 社交链接
    socialLinks: [
      {
        icon: {
            svg: '<svg t="1741435462118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11015" width="200" height="200"><path d="M700.928 908.48H324.032v12.672c0 13.632-4.992 26.304-14.784 35.904-9.6 9.6-22.272 14.784-35.904 14.784s-26.304-5.568-35.904-14.784c-9.6-9.024-14.592-22.272-14.592-35.904v-12.672h-24.96c-91.2 0-165.12-67.968-165.12-151.872V356.48c0-83.52 73.92-151.872 165.12-151.872h181.248l-97.344-86.592c-17.664-15.744-18.816-32.448-3.072-50.112 15.744-17.664 32.448-18.816 50.112-3.072l156.48 139.776h52.608L694.784 64.64c17.664-15.744 34.368-14.784 50.112 3.072 15.744 17.664 14.784 34.368-3.072 50.112L644.48 204.992h182.4c46.656 0 91.2 18.24 122.112 49.728 27.264 26.88 42.624 63.744 42.048 102.336v400.128c0 83.52-73.92 151.872-165.12 151.872h-24.768v12.672c0 13.632-4.992 26.304-14.784 35.904-9.6 9.6-22.272 14.784-35.904 14.784s-26.304-4.992-35.904-14.784c-9.6-9.6-14.784-22.272-14.784-35.904v-13.248h1.152zM565.76 732.8c7.68 0 15.168-2.496 21.312-7.104l45.504-33.984c7.104-4.032 10.56-11.712 10.176-19.776-0.576-8.064-5.568-14.592-13.248-17.664-7.68-3.072-15.744-1.536-21.696 4.032L567.296 688.64l-29.376-35.904c-6.528-8.064-16.704-13.248-27.264-13.248s-20.736 4.608-27.264 12.672l-29.952 35.52-34.944-28.8c-5.568-4.992-13.632-6.528-20.736-4.032-7.104 2.496-12.096 8.64-13.248 16.128-0.96 7.68 2.112 15.168 7.68 19.776l39.552 32.832c15.168 12.096 37.056 10.176 49.728-4.608l28.8-34.368 28.416 34.944c6.144 8.064 16.32 13.248 27.072 13.248z m-176.832-233.472c17.28-4.032 28.8-21.312 24.768-38.4-1.536-8.64-6.528-16.128-14.208-20.736-7.104-4.608-16.128-6.144-24.768-4.608l-159.552 36.48c-17.664 3.456-28.8 21.312-24.768 38.4 3.456 17.664 21.312 28.8 38.4 24.768l160.128-35.904z m247.104 0l159.552 36.48c11.136 2.496 23.232-1.536 30.912-10.176 7.68-8.64 10.176-20.736 6.528-31.872-3.456-11.136-12.672-19.2-24.384-21.696l-159.552-36.48c-8.64-2.112-17.28-0.576-24.768 4.608-7.104 4.608-12.096 12.096-14.208 20.736-2.88 16.512 8.832 34.176 25.92 38.4z m0 0" fill="#919191" p-id="11016"></path></svg>'
        },
        link: 'https://space.bilibili.com/352337301?spm_id_from=..0.0'
    },
    {
        icon: {
            svg: '<svg t="1741436049451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23963" width="200" height="200"><path d="M153.236734 163.111422l714.763665 0c48.810633 0 88.718697 38.475467 89.332667 85.853503l-446.458679 242.518237L64.313381 249.169581C64.722694 201.689218 104.323773 163.111422 153.236734 163.111422L153.236734 163.111422zM64.313381 341.981413l-0.409313 429.062856c0 47.787349 40.215049 86.876786 89.332667 86.876786l714.763665 0c49.117618 0 89.332667-39.089437 89.332667-86.876786L957.333067 341.776756 521.311882 573.038873c-6.651344 3.581493-14.735285 3.581493-21.386629 0L64.313381 341.981413 64.313381 341.981413zM64.313381 341.981413" p-id="23964"></path></svg>'
        },
        link: 'mailto:2011795145@qq.com'
    },

      { icon: 'github', link: 'https://github.com/wyyan-gh' }
    ]
  }
})
