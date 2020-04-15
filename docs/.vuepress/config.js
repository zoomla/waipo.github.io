module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '外婆王占才女',
      description: '荷尽已无擎雨盖，菊残犹有傲霜枝。'
    }
  },
    base: '/',     // 仓库名字是press
    // title: '外婆王占才女',
    // description: ' 世界上只有一种真正的英雄主义,那就是认清生活真相依旧热爱生活。-罗曼·罗兰Romain Rolland',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './dist',
    ga: '',
    evergreen: true,
    // 主题配置
    theme: 'reco',
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '生平', link: '/ShengPing' },
        { text: '日志', link: '/categories/日志/' },
        { text: '祭文', link: '/categories/祭文/' },
        { text: 'TimeLine', link: '/TimeLIne', icon: 'reco-date' },
        // {
        //   text: 'Languages',
        //   items: [
        //     { text: 'Chinese', link: '/language/chinese' },
        //     { text: 'English', link: '/language/english' }
        //   ]
        // },
        { text: '逐浪CMS', link: 'http://www.z01.com' },
      ],
        blogConfig: {
          category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: '分类' // 默认文案 “分类”
          },
          tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: '关键字'      // 默认文案 “标签”
          }
        }        
    },
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: ['/guide/']
      }         
    ],
    thirdPartyComponents: {
  },    
}

