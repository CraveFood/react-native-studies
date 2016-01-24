'use strict';
import React, {
    Component,
    StyleSheet,
    View,
    Navigator,
    Dimensions
} from 'react-native';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.scenes = [
      {0: <View style={{ width: 300, height: 300, backgroundColor: '#C02942'}}/>},
      {0: <View style={{ width: 300, height: 300, backgroundColor: '#C02920'}}/>},
      {0: <View style={{ width: 300, height: 300, backgroundColor: '#C08742'}}/>}
    ];
  }

  _renderScene(route, navigator) {
    return route[0];
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator ref='nav'
                   initialRouteStack={this.scenes}
                   renderScene={this._renderScene.bind(this)}
                   configureScene={() => ({
                      ...Navigator.SceneConfigs.HorizontalSwipeJump
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
    borderTopColor: '#D95B43'
  },
  navigator: {
    width: Dimensions.get('window').width
  }
});

export default Navigation;

