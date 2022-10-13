export default defineAppConfig({
  pages: [
    'pages/index/index',
    "pages/community/index",
    "pages/life/index",
    "pages/housekeeper/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: "#999999",
    selectedColor: "#20BA54",
    backgroundColor: "#fff",
    position: "bottom",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "images/组 3.png",
      },
      {
        pagePath: "pages/community/index",
        text: "社区",
        iconPath: "images/组 114.png",
      },
      {
        pagePath: "pages/life/index",
        text: "生活",
        iconPath: "images/组 115.png",
      },
      {
        pagePath: "pages/housekeeper/index",
        text: "管家",

        iconPath: "images/组 116.png",
      },
    ]
  }
})
