# 架构

React + Next.js + TypeScript，feature-based 入口为 src/features/site-templates/catalog/revento。config.ts 维护品牌和素材键；content/data.ts 维护服务、八项作品、流程、价格、FAQ 和统计；content/page-copy.ts 集中页面双语文案；content/service-content.json 是六项服务的七阶段营销正文；content/reference.json 维护八篇文章、九名成员、十条评价和作品图片；content/work-article.ts 维护原站共用案例正文。

components/Shell.tsx 提供导航、菜单、语言上下文与页脚，Motion.tsx 管理整体入场和计数，Carousel.tsx 管理横向与纵向轮播，WorkShowcase.tsx 组合原站五帧作品展示，Sections.tsx 管理流程、列表、FAQ 等公共区块。页面只组合区块；meta.ts 注册 33 个页面。

host.tsx 是可选宿主身份边界。独立路由入口为 src/app/[[...slug]]/page.tsx，未知路径返回真实 404。routing.ts 使语言切换保留深层路径、查询参数和锚点。没有后端、持久化、支付或真实发送。

原站显式 /404 入口已注册，并复用 NotFound 页面；独立站 /404 与未知路径返回真实 HTTP 404。共享包消费方可用此入口预览模板错误页，消费方自身路由决定其 HTTP 状态。页面清单为 33 个业务页与一项错误页展示入口，均支持双语。

Carousel.tsx 的手势层与分页内容层分离，禁止重新把归零约束加在已偏移的轨道上；原生图片拖动在轮播边界取消。
