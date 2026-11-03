# 修改指南

品牌、Logo、联系方式和标语：src/features/site-templates/catalog/revento/config.ts；服务、作品、报价、统计与 FAQ：content/data.ts；页面中英文：content/page-copy.ts；服务阶段正文：content/service-content.json；文章、成员与评价：content/reference.json；共用案例正文：content/work-article.ts。所有文案中英文一起维护。

主题、玻璃卡片、字体、圆角、间距和滚动条在 theme.css。动画入口为 components/Motion.tsx、Carousel.tsx 与 pages/Home.tsx；流程与 FAQ 在 Sections.tsx。页面结构在 pages/，路由和页面标题在 meta.ts。新增页面同时更新 .tpl/template.json 的页面清单。

替换图片应更新 public/templates/revento/sources.json 的真实来源、许可和 SHA256。布局改动后更新真实三端截图和实际解码尺寸。轮播和图库的方向控件保留可访问名称，不新增装饰箭头。表单只做本地校验。
