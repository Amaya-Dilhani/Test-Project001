'use strict';

import angular from 'angular';

export default angular.module('angularFullStack01App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
