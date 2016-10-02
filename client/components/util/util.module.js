'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('angularFullStack01App.util', [])
  .factory('Util', UtilService)
  .name;
