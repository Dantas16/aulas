const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
//app.set('views', './views');

app.get('/', (req, resp) => {
  resp.render('pages/home')
})


app.listen(port, () => {
  console.log('Express started at: ' + port);
})