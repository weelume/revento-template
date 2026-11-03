# Revento 使用规则

先读取 .tpl/README.md、.tpl/template.json、.tpl/project.json。保留已有修改，不新增未经批准的依赖。

品牌配置、双语内容、主题、公共交互、页面组合和路由分层维护；通用源码不包含消费方环境。链接基于 basePath。所有文案同时维护中英文。样式限定 .revento 与 data-revento-page 标记，卸载时恢复根属性。

表单只做本地校验，不发送或保存数据；不得记录个人输入。尊重减少动态效果设置。不增加装饰箭头。动效修改须实际触发验证，静态截图不能替代。检查按 typecheck、lint、test、build 执行，真实报告绑定当前源码。不得将未验证内容标记为完成。
