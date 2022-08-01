//  CREAR SERVIDOR

require('../src/config/config');
const express = require('express');
const morgan = require('morgan');
// colors sirve para poder imprimir en color
const colors = require('colors');
// express handlebars sirve para renderizar las vistas
const exphbs = require('express-handlebars');
// path sirve para trabajar con rutas
const path = require('path');
const app = express();
// cors sirve para que se puedan hacer peticiones desde cualquier origen
const cors = require('cors');

// Vista express-handlebars

app.set('view engine', '.hbs');

// Capturar datos de usuario

app.use(
	express.urlencoded({
		extended: true,
	})
);

// Archivos estaticos

app.use(express.static(__dirname + '/public/'));

// Configuración Express Handlebars, partials y layouts.

app.set('views', path.join(__dirname, 'views'));
app.set('partials', path.join(__dirname, 'views/partials'));
app.engine(
	'.hbs',
	exphbs({
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: [path.join(app.get('views'), 'partials')],
		defaultLayout: 'index',
		extname: '.hbs',
		// helpers: require('./lib/handlebars')
	})
);

// Midlewars para configurar el servidor
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes para el servidor

// app.use('/', require('./routes/router'));
app.use(require('./routes/router'));

// Conexión Puerto 3000

app.listen(process.env.PORT, () => {
	console.log('Escuchando el puerto: '.yellow, process.env.PORT.cyan);
});
