# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# react-components

config info

1. 启用新的插件 需要关闭终端 删除.umi 重新启动
2. 开启 ssr
3. locale 要关闭
4. getInitialState 要关闭
5. devtool 开启后 副作用
6. 影响压缩移除 log js` terserOptions: { compress: { drop_console: true, }, },`
7. vConsole 影响 ssr 后页面的样式

# umi-plugin-tailwindcss

```

yarn add umi-plugin-tailwindcss -D

```

自动引用 tailwindcss@2

# node server

关闭配置，浏览器有缓存

```

hash: true, exportStatic: {},

```

# node server-static

开启配置，避免浏览器缓存

```

hash: true, exportStatic: {},

```

# 美化 braft-editor 富文本 html

```

// 美化 braft-editor 富文本 html

.braft-output-content p { min-height: 1em; } .braft-output-content .image-wrap img { max-width: 100%; height: auto; } .braft-output-content ul, .braft-output-content ol { margin: 16px 0; padding: 0; } .braft-output-content blockquote { margin: 0 0 10px 0; padding: 15px 20px; background-color: #f1f2f3; border-left: solid 5px #ccc; color: #666; font-style: italic; } .braft-output-content pre { max-width: 100%; max-height: 100%; margin: 10px 0; padding: 15px; overflow: auto; background-color: #f1f2f3; border-radius: 3px; color: #666; font-family: monospace; font-size: 14px; font-weight: normal; line-height: 16px; word-wrap: break-word; white-space: pre-wrap; } .braft-output-content pre pre { margin: 0; padding: 0; }

<div className='braft-output-content'  dangerouslySetInnerHTML={{__html: outputContent}}></div>
```

# stylelint 格式化 less 影响提交
