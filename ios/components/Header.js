import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './stylesheets/header.js'

export default class Header extends Component {
  navigate(routeName) {
    const stack = this.props.navigator.state.routeStack;
    if (stack[stack.length - 1].name !== 'about') {
      this.props.navigator.push({ name: 'about' });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.menu}>
          <TouchableHighlight onPress={() => {this.props.navigator.pop();}}
                              style={styles.backArrow}
                              underlayColor="green">
            <Text style={styles.backArrowText}>&#8592;</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.navigate.bind(this)}
                              style={styles.about}
                              underlayColor="green">
            <Text style={styles.aboutText}>?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
