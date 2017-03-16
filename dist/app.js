'use strict';

var _sayHello = require('./lib/sayHello');

var _sayHello2 = _interopRequireDefault(_sayHello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById('app').innerHTML = '<h1>' + (0, _sayHello2.default)() + '</h1>'; //document.getElementById('app').innerHTML = "It Works!"

//const sayHello = (name = 'Muhammad') => `Hello ${ name }`
//# sourceMappingURL=app.js.map