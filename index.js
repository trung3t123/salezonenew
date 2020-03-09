/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
export * from './components/CustomHeader'
import Login from './components/Login/Login';
import Startup from './components/StartupAppPage/Startup';


AppRegistry.registerComponent(appName, () => Startup);
