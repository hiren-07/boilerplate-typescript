/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './app/helper/i18n/config.ts'
AppRegistry.registerComponent(appName, () => App);
