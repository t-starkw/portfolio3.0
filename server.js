const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ defaultLayout: 'main' });


const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT} `));
