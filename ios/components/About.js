import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Header from './Header';

import styles from './stylesheets/about';

export default class About extends Component {
  render() {
    return (
      <View>
        <Header navigator={this.props.navigator}/>
        <View style={styles.belowHeader}>
          <Text>About</Text>
          <Text>Blah, blah, blah</Text>
        </View>
      </View>
    );
  }
}
