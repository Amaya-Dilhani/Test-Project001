'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('angularFullStack01App.admin', ['angularFullStack01App.auth',
    'ui.router'
  ])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
