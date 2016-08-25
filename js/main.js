/**
 * Created by kerovieux on 16/8/26.
 */
require('../bower_components/lodash/lodash');
require('expose?$!expose?jQuery!../bower_components/jquery/dist/jquery.min');
require('../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
require('script!../bower_components/handlebars/handlebars.min');
require('script!../bower_components/swag/lib/swag');
require('../bower_components/localforage/dist/localforage.min');
require('./jquery.loadFromTemplate');
require('script!./common');
Swag.registerHelpers();
class Student {
  constructor(arg) {
    this.name = arg.name;
  }

  hello() {
    console.log('Hello, ' + this.name + '!');
  }
}
$(function () {
  //It's a test for ensure the ES6 could be working , If you like , you can write the all code here as ES6
  let Alice = new Student({name:'Alice'});
  Alice.hello();
});