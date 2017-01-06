import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import axios from 'axios';

import styles from './stylesheets/map';

import MapView from 'react-native-maps';

import Header from './Header';

export default class Map extends Component {

  componentDidMount() {
    axios.get(`https://rack-it.herokuapp.com/racks/${this.props.location.latitude}/${this.props.location.longitude}`)
      .then((racksObj) => {
        const racks = racksObj.data;
        if (racks.length === 0) {
          alert('there are no bike racks within 770m');
        }
        this.props.setRacks(racks);
      })
      .catch((err) => console.log(err));
  }

  getMarkerColor(rack) {
    if (rack.thefts.length > 1) {
      return styles.warning;
    } else if (rack.thefts.length === 1) {
      return styles.caution;
    } else {
      return styles.fine;
    }
  }

  navigate(routeName, passProps) {
    this.props.navigator.push({ name: routeName, passProps });
  }

  plotRacks() {
    const markersArray = [];
    for (let i = 0; i < this.props.racks.length; i++) {
      const rack = this.props.racks[i];
      const style = this.getMarkerColor(rack);
      markersArray[i] = <MapView.Marker coordinate={{
                                        longitude: rack.location.coordinates[0],
                                        latitude: rack.location.coordinates[1]
                          }}
                        key={`#${i}_rack`}>
                  <TouchableHighlight style={[styles.marker, style]}
                        onPress={this.navigate.bind(this, 'description', rack)}>
                    <Text>
                    </Text>
                  </TouchableHighlight>
           </MapView.Marker>;
    }
    return  markersArray;
  }

  render() {
    let proximityIndex = 0;

    return (
      <View>
        <MapView style={styles.map}
                 initialRegion={{
                   latitude: this.props.location.latitude,
                   longitude: this.props.location.longitude,
                   latitudeDelta: 0.0042,
                   longitudeDelta: 0.0028}}>
            {this.plotRacks()}
            <MapView.Marker coordinate={{
                                latitude: this.props.location.latitude,
                                longitude: this.props.location.longitude}}
                            image={require('./star.png')}/>
        </MapView>
        <Header navigator={this.props.navigator}/>
        <Text style={styles.message}>Click on a marker to get more info</Text>
      </View>
    );
  }
}
