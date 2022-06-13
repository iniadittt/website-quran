const express = require('express');
const appRouter = require('./routes/quranRouter');
const BodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(BodyParser.urlencoded({ extended: true }));


app.use(appRouter);

app.listen(port, () => console.log(`Server berjalan diport ${port}`));