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
  Dimensions,
  TouchableOpacity
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

  _onPress (navigator) {
    //var curRoutes = navigator.getCurrentRoutes();
    //var curRouteIndex = navigator.state.presentedIndex;

    //var push = false;
    //var next;

    //if (curRoutes.length < this.scenes.length) {
    //    next = curRouteIndex + 1;
    //    push = true;
    //} else {
    //    next = (curRouteIndex + 1) % this.scenes.length;
    //}

    //if (push) {
    //    navigator.push({index: curRoutes.length});
    //} else {
    //    navigator.jumpTo(curRoutes[next]);
    //}
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={(navigator) => this._onPress(this.refs.nav)}
        >
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </TouchableOpacity>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
  navigator: {
     width: Dimensions.get('window').width,
     height: 600,
  }
});

AppRegistry.registerComponent('VaiQueD', () => VaiQueD);
