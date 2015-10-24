'use strict';

function App(name){
  this.name = name;
}

App.prototype.bootstrap = function(express, context, __basedir, callback) {
    var fs = require('fs'),
        path = require('path'),
        Converter = require("csvtojson").Converter,
        datasource = require('./datasource');

    var converter = new Converter({});

    context.set('views', path.join(__basedir, 'www'));
    context.use(express.static(path.join(__basedir, 'www')));

    converter.on("end_parsed", function (data) {
       datasource.init(data);
       if(callback) callback();
    });

    fs.createReadStream(path.join(__basedir, "codingdojo.csv")).pipe(converter);

    context.get('/', function(req, res) {
      res.render('index');
    });

    context.use('/api/v1', require('./routes'));
}

exports.App = App;
