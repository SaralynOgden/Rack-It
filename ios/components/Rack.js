import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './Header';

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>I'm going to be an image</Text>
        <Text>I'm going to be a list</Text>
      </View>
    );
  }
}
