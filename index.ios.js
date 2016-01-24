/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import Navigation from './components/navigation';

class VaiQueD extends Component {
  render() {
    return <Navigation />;
  }
}

AppRegistry.registerComponent('VaiQueD', () => VaiQueD);
