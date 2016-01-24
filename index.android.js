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
import Torrada from './torradeira';

class VaiQueD extends Component {
  render() {
    return <Navigation />;
  }

  _chamaTorradeira() {
    Torrada.queimada('Será Renan? Será?', Torrada.LONG);
  }

  componentDidMount() {
    setTimeout(this._chamaTorradeira, 3000);
  }
}

AppRegistry.registerComponent('VaiQueD', () => VaiQueD);
