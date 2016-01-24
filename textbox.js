'use strict';
import React, {
  Component,
  StyleSheet,
  TextInput
} from 'react-native';

class Textbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
        text: props.text,
    }
  }

  _changeInput(text) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
        <TextInput
          style={[styles.input, this.props.style]}
          placeholder={this.props.text}
          //value={this.state.text}
          //onChangeText={(text) => this._changeInput(text)}
        />
    );
  }
}

Textbox.propTypes = {
    text: React.PropTypes.string
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F00',
    borderWidth: 2,
    height: 100
  },
});

export default Textbox;
