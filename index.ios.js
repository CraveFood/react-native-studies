/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions
} from 'react-native';



import Textbox from './textbox';

class VaiQueD extends Component {

  constructor(props) {
    super(props);
    this.scenes = [
        {0: <Textbox text='Batman' key='batman'/>},
        {0: <Textbox text='Robin' key='robin'/>},
        {0: <Textbox text='Superman' key='superman'/>},
        {0: <Textbox text='Hahaha' key='opa' style={{backgroundColor: '#0f0'}}/>}
    ];

  }

  _renderScene(route, navigator) {
    console.log(route);
    return route[0];
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator ref='nav'
                   initialRouteStack={this.scenes}
                   renderScene={this._renderScene.bind(this)}
                   configureScene={() => ({
                     ...Navigator.SceneConfigs.HorizontalSwipeJump,
                   })}
                   style={styles.navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 20,
    borderTopColor: '#D95b43'
  },
  navigator: {
     width: Dimensions.get('window').width
  }
});

AppRegistry.registerComponent('VaiQueD', () => VaiQueD);
