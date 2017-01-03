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

import axios from 'axios';

import styles from './stylesheets/landing';

export default class Landing extends Component {

  goToAddressIfItExists() {
    const base = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const key = 'AIzaSyD__S3MjxXvboBp1-iO-jfP9qe1bLd25B0';
    axios.get(`${base}${this.props.userAddress}&key=${key}`)
      .then((rawGeocodedAddress) => {
        const geocodedAddress = rawGeocodedAddress.data.results[0];
        if (!geocodedAddress) {
          alert('this address is not recognized');
        } else {
          const location = {
            latitude: geocodedAddress.geometry.location.lat,
            longitude: geocodedAddress.geometry.location.lng };
          this.props.setLocation(location);
          this.navigate('map');
        }
      })
      .catch((err) => console.log(err));
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('here');
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.props.setLocation(location);
        this.navigate('map');
      },
      (error) => alert('permissions for geolocation are turned off'),
    );
  }

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
          <Image source={require('./images/bike.png')}
                 style={styles.bike}/>
          <TouchableHighlight style={styles.button}
                              onPress={this.navigate.bind(this, 'about')}>
            <Text style={styles.buttonText}>about</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                              onPress={this.getCurrentPosition.bind(this)}>
            <Text style={styles.buttonText}>use current location</Text>
          </TouchableHighlight>
          <View style={styles.addressInput}>
            <TextInput style={styles.textInput}
              placeholder="Type location..."
              onChangeText={(text) => this.props.setUserAddress(text)}
              autoCapitalize="none"
              autoCorrect={false}></TextInput>
            <TouchableHighlight style={styles.submitButton}
                      onPress={this.goToAddressIfItExists.bind(this)}>
              <Text style={styles.buttonText}>submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
