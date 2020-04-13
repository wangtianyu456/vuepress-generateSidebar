# vuepress-generateSidebar

vuepress 自动根据 pages 目录生成 sidebar

```bash
yarn add vuepress-generatesidebar -D
```

确保你的页面在 pages 目录下

```javascript
const generateSidebarConfig = require('vuepress-generatesidebar')

/**
 * generateSidebarConfig 接受三个参数
 * @param pagesDirPath 指的是pages目录的路径
 * @param exclude 指的是你要排除在外的目录名单
 * @param options 指的是你对sidebar中的其他额外配置
 */

const pagesDirPath = path.join(__dirname, '../pages')

const exclude = ['.DS_Store', 'assets']

const options = {
  collapsable: false,
}
const sidebarConfig = generateSidebarConfig(pagesDirPath, exclude)

module.exports = {
  title: 'your-website',
  description: 'website',
  base: '/',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // ...
  },
  // ...
  sidebar: sidebrConfig,
}
```
