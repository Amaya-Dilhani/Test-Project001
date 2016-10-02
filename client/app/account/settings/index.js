'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('angularFullStack01App.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
