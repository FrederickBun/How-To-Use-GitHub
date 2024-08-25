import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GitHub 非官方使用指南",
  description: "初来 GitHub？不管你是一名开发者，还是一名白嫖者，都可以通过本文档找到属于你的Github使用方式！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '基本', link: '/start' }
    ],

    sidebar: [
      {
        text: '基本',
        items: [
          { text: '从一个“/”开始', link: '/start' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FrederickBun/How-To-Use-GitHub/' }
    ],

    editLink: {
      pattern:
        "https://github.com/FrederickBun/How-To-Use-GitHub/edit/dev/docs/:path",
      text: "在 GitHub 上编辑此页",
    }
  }
})
