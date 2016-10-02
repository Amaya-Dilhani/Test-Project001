'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('angularFullStack01App.login', [])
  .controller('LoginController', LoginController)
  .name;
