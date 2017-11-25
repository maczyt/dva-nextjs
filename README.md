## bug

1. 无法import外部css

``` js
// .babelrc plugins
[
  "inline-import",
  {
    "extensions": [".css"]
  }
]
```

2. 路由切换

> 使用dispatch来控制

**页面手动刷新会有bug**