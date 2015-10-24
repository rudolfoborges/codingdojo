'use strict';

var Datasource = function(){
	this.data = []
}

Datasource.prototype.init = function(data){
	this.data = data;
}

Datasource.prototype.findAll = function(){
	return this.data;
}

Datasource.prototype.findOne = function(index) {
	return this.data[index];
}

Datasource.prototype.size = function(){
	return this.data.length;
}

module.exports = new Datasource();
