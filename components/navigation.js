'use strict';
import React, {
    Component,
    Dimensions,
    Navigator,
    StyleSheet,
    Text,
    View
} from 'react-native';

import events from 'events';

const eventEmitter = new events.EventEmitter();

const NAVIGATOR_WILL_FOCUS = 'willfocus:';
const NAVIGATOR_DID_FOCUS = 'didfocus:';

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'nothing...',
      loaded: false
    };
  }

  componentDidMount() {
    eventEmitter.on(NAVIGATOR_DID_FOCUS + this.props.name, this._onDidFocus.bind(this));
    eventEmitter.on(NAVIGATOR_WILL_FOCUS + this.props.name, this._onWillFocus.bind(this));
  }

  componentWillUnmount() {
    console.log(this.props.name + ' will unmount');
  }

  _onDidFocus() {
    this.setState({
      text: 'LOL....',
      loaded: true
    });
  }

  _onWillFocus() {
    this.setState({
      text: '\_o_/',
      loaded: false
    });
  }

  render() {
    return (
      <View style={[styles.scenes, {backgroundColor: this.props.color}]}>
        <Text style={{fontSize: 50}}>{ this.state.text }</Text>
      </View>
    );
  }
}


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.routes = [
      {name: 'search', color: '#C429A2'},
      {name: 'home', color: '#C02920'},
      {name: 'product', color: '#C08742'}
    ];
  }

  componentDidMount() {
    this.refs.nav.navigationContext.addListener('willfocus',
                                               this._sceneWillFocus);
    this.refs.nav.navigationContext.addListener('didfocus',
                                               this._sceneDidFocus);
  }

  _sceneWillFocus(event) {
    eventEmitter.emit(NAVIGATOR_WILL_FOCUS + event.data.route.name);
  }

  _sceneDidFocus(event) {
    eventEmitter.emit(NAVIGATOR_DID_FOCUS + event.data.route.name);
  }

  _renderScene(route, navigator) {
    return (
      <Scene name={route.name} color={ route.color } />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator ref='nav'
                   initialRoute={this.routes[1]}
                   initialRouteStack={this.routes}
                   renderScene={this._renderScene}
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
  },
  scenes: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Navigation;

