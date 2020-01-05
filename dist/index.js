"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Archivo principal del servidor, como va a arrancar el servidor, qué se va a necesitar.
var app = (0, _express["default"])(); //Settings
//utiliza el puerto por defecto o en caso de que no exista utiliza el 3000

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Server on port: ', app.get('port'));
});