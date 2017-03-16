//document.getElementById('app').innerHTML = "It Works!"

//const sayHello = (name = 'Muhammad') => `Hello ${ name }`

import sayHello from './lib/sayHello'

document.getElementById('app').innerHTML = `<h1>${sayHello()}</h1>`