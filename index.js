/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
/** MODIFICATION TO BASE REACT-NATIVE INIT **/
import Exponea from 'react-native-exponea-sdk';

if (!Exponea.isConfigured()) {
  Exponea.configure({
    projectToken: 'project-token',
    authorizationToken: 'auth-token',
  }).catch((error) => console.log(error));
}
/** MODIFICATION TO BASE REACT-NATIVE END**/

AppRegistry.registerComponent(appName, () => App);
