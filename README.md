# mount2

## 约定目录

```shell
$ tree . -L 3
├── src
│   ├── detail
│   │   ├── index.art
│   │   └── router.js
│   └── index
│       ├── index.art
│       └── router.js
......
```

## 安装

```
$ npm i -S mount2
```

## 用法

```
// routes 
const mount = require('mount2')
mount(app, {})
```
