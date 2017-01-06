import React, { Component } from 'react';
import {
  Picker,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import axios from 'axios';

import Header from './Header';

import styles from './stylesheets/rackForm';

export default class RackForm extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      color: 'none',
      rackCapacity: 2
    }
  }

  setAddress(address) {
    this.setState({ address });
  }

  setColor(color) {
    this.setState({ color });
  }

  setRackCapacity(rackCapacity) {
    this.setState({ rackCapacity });
  }

  submitIfCorrect() {
    if (this.state.address === '') {
      alert('this address is not valid');
      return;
    }
    const base = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const key = 'AIzaSyD__S3MjxXvboBp1-iO-jfP9qe1bLd25B0';

    axios.get(`${base}${this.state.address}&key=${key}`)
      .then((rawGeocodedAddress) => {
        const geocodedAddress = rawGeocodedAddress.data.results[0];
        if (!geocodedAddress) {
          alert('this address is not recognized');
        } else {
          const location = {
                  type: 'Point',
                  coordinates: [geocodedAddress.geometry.location.lng,
                                geocodedAddress.geometry.location.lat]
          };
          axios.post('https://rack-it.herokuapp.com/racks/', {
            address: this.state.address,
            color: this.state.color,
            location,
            rackCapacity: this.state.rackCapacity
          })
          .then((_postedRack) => {
            alert(`rack posted at ${this.state.address}`);
          })
          .catch((err) => alert('rack could not be posted'));
        }
      })
      .catch((err) => console.log(err));
  }

  render() {

    return (
      <View>
        <Header navigator={this.props.navigator}/>
        <View style={styles.belowHeader}>
          <Text style={[styles.text, styles.title]}>Add a Rack</Text>
          <Text style={styles.text}>*required</Text>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput}
                       onChangeText={this.setAddress.bind(this)}>
            </TextInput>
          </View>
          <Text style={[styles.text, styles.categoryTitle]}>*address</Text>
          <Text style={styles.row}>
            <View style={styles.col}>
              <Picker style={styles.picker}
                      itemStyle={styles.item}
                      selectedValue={this.state.color}
                      onValueChange={this.setColor.bind(this)}>
                <Picker.Item label="none" value="none" />
                <Picker.Item label="black" value="black" />
                <Picker.Item label="blue" value="blue" />
                <Picker.Item label="green" value="green" />
                <Picker.Item label="orange" value="orange" />
                <Picker.Item label="purple" value="purple" />
                <Picker.Item label="red" value="red" />
                <Picker.Item label="white" value="white" />
                <Picker.Item label="yellow" value="yellow" />
              </Picker>
              <Text style={[styles.text, styles.categoryTitle]}>*color</Text>
            </View>
            <View style={styles.col}>
              <Picker style={styles.picker}
                      itemStyle={styles.item}
                      mode="dropdown"
                      selectedValue={this.state.rackCapacity}
                      onValueChange={this.setRackCapacity.bind(this)}>
                <Picker.Item label='2' value='2' style={styles.pickerItem}/>
                <Picker.Item label='4' value='4' style={styles.pickerItem}/>
                <Picker.Item label='6' value='6' style={styles.pickerItem}/>
                <Picker.Item label='8' value='8' style={styles.pickerItem}/>
                <Picker.Item label='10' value='10' style={styles.pickerItem}/>
                <Picker.Item label='10+' value='10+' style={styles.pickerItem}/>
              </Picker>
              <Text style={[styles.text, styles.categoryTitle]}>
                *rack capacity
              </Text>
            </View>
          </Text>
          <TouchableHighlight style={styles.button}
                              onPress={this.submitIfCorrect.bind(this)}>
            <Text style={[styles.text, styles.buttonText]}>submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
