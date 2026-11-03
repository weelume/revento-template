# Revento · 数字营销

## 能力与限制

响应式双语品牌站，33 个页面；无后端、支付、账户或持久化。联系表单仅在浏览器中校验。作品、团队与统计为参考站演示内容。政策已按演示行为调整。

## 环境与运行

使用 .nvmrc 固定的 Node 24.16.0、pnpm 9.15.4。无必须填写的环境变量；PORT 可改变服务端口，默认 3063。安装：pnpm install --frozen-lockfile。开发：pnpm dev；浏览器打开 http://localhost:3063 。构建：pnpm build；生产预览：pnpm start。前台服务按 Ctrl+C 停止，只终止自己启动的进程。

## 验证与修改

pnpm typecheck、pnpm lint、pnpm test、pnpm build。协议检查：pnpm tpl:check。动效、语言切换、菜单、FAQ、轮播和表单需要在浏览器实际验证。未验证项见 reports/verification.json 和 docs/VERIFICATION.md。修改入口见 docs/CUSTOMIZATION.md 与 customization.json。

## 交付与许可

源码仓库地址见 template.json。pnpm bundle 生成不含依赖、缓存或秘密的固定运行包，要求源码工作树已提交并干净，且在本地 Linux 文件系统执行。不要提交 node_modules、.next、日志、真实配置或私密资料。源码、图片、字体、工具的权利分别说明；见 docs/LICENSE.md。阅读本文件不触发安装、发送或发布。
