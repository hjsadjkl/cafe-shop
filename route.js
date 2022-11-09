const express = require('express')
const route = express()
const port = 4000

route.get('/', (req, res) => {
  res.send('Hello World!')
})

route.get('/test', function(req, res, next) {
  res.render('index', {title: 'Express'})
});

route.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`{localhost:${port}}`);
})

