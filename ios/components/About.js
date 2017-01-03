import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Header from './Header';

import styles from './stylesheets/about';

export default class About extends Component {
  navigate(routeName) {
    this.props.navigator.push({ name: routeName});
  }

  render() {
    return (
      <View>
        <Header navigator={this.props.navigator}/>
        <View style={styles.belowHeader}>
          <Text style={[styles.text, styles.title]}>About</Text>
          <Text style={[styles.text, styles.description]}>Rack-It was made to
          help you figure out where to lock up your bicycle. Submit an address
          and you'll see markers indicating where the nearest bike racks are.
          The markers are color coded for safety, indicating how many bike
          thefts have been reported within 100m (109yd).</Text>
          <Text style={styles.column}>
            <View style={styles.row}>
              <View style={styles.marker}></View>
              <View style={[styles.marker, styles.yellowMarker]}></View>
              <View style={[styles.marker, styles.redMarker]}></View>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>0 thefts</Text>
              <Text style={styles.text}>1 theft</Text>
              <Text style={styles.text}>2+ thefts</Text>
            </View>
          </Text>
          <Text style={[styles.text, styles.sectionTitle]}>
            Found a bike rack not on our map?
          </Text>
          <Text style={styles.text}>The bike racks on this app are for
          bicycle racks maintained by the city. Click below if you would like
          to add an outdoor rack available to the public.</Text>
          <TouchableHighlight style={styles.button}>
            <Text style={[styles.text, styles.buttonText]}
                  onPress={this.navigate.bind(this, 'rackForm')}>
              add a rack
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
