---
title: Article 2
---

Lear how to use @nuxt/content
<!--more-->
# Article 2

```
js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

---