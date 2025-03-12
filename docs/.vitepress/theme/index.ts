import DefaultTheme from 'vitepress/theme';
import './style/index.css';
import { watch } from 'vue';

import { h } from 'vue';
import { useData } from 'vitepress';
import MNavLinks from './components/MNavLinks.vue';

import Mycomponent from "./components/Mycomponent.vue";
import Linkcard from "./components/Linkcard.vue";
import HomeUnderline from "./components/HomeUnderline.vue";
import DataPanel from "./components/DataPanel.vue";
import confetti from "./components/confetti.vue";
import ArticleMetadata from "./components/ArticleMetadata.vue";
import { inBrowser } from 'vitepress';

let homePageStyle: HTMLStyleElement | undefined
let umamiScript: HTMLScriptElement | null = null; // 脚本标记

export default {
  extends: DefaultTheme,

  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },

  enhanceApp({ app, router }) {
    // 注册全局组件
    app.component('Mycomponent', Mycomponent)
    app.component('Linkcard', Linkcard)
    app.component('HomeUnderline', HomeUnderline)
    app.component('DataPanel', DataPanel)
    app.component('confetti', confetti)
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('MNavLinks' , MNavLinks)

    // 彩虹背景动画
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }

    // 添加 Umami 脚本
    if (inBrowser) {
      umamiScript = document.createElement('script');
      umamiScript.defer = true;
      umamiScript.src = 'https://um.wyyan.us.kg/script.js';
      umamiScript.dataset.websiteId = '87ca9c6c-291c-4009-8bd8-8138c832f7da';
      document.head.appendChild(umamiScript);
    }
  },
}

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}