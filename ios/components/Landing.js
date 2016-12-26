import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './stylesheets/landing';

//AIzaSyBosHnFZanVfTcY5hXMRUTsi64ujz5yewI

export default class Landing extends Component {
  navigate(routeName) {
    this.props.navigator.push({ name: routeName});
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logo}>
            Rack-It
          </Text>
          <Image source={{uri: 'https://files.graphiq.com/975/media/images/_5690268.png'}}
                 style={styles.bike}/>
          <TouchableHighlight style={styles.button}
                              onPress={this.navigate.bind(this, 'about')}>
            <Text style={styles.buttonText}>about</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                              onPress={this.navigate.bind(this, 'map')}>
            <Text style={styles.buttonText}>use current location</Text>
          </TouchableHighlight>
          <View style={styles.addressInput}>
            <TextInput style={styles.textInput}
              placeholder="Type location..."
              onChangeText={(text) => this.setState({text})}></TextInput>
            <TouchableHighlight style={styles.submitButton}
                      onPress={this.navigate.bind(this, 'map', this.setThefts)}>
              <Text style={styles.buttonText}>submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
