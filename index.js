/**
 * @copyright to Prashad Dey
 * Author Name: Prashad Dey
 * Author URI: http://prashaddey.com | http://prashaddey.xyz | https://facebook.com/prashad.dey
 */

import { AppRegistry } from 'react-native';
import App from './App';

//To stop showing warning message - isMounted() is deprecated
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


AppRegistry.registerComponent('projectGUB', () => App);
