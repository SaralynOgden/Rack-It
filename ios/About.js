import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Header from './Header';

export default class About extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>About</Text>
        <Text>Blah, blah, blah</Text>
      </View>
    );
  }
}
