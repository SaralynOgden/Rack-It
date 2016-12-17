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

export default class Landing extends Component {
  navigate(routeName) {
    this.props.navigator.push({ name: routeName });
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
                                onPress={this.navigate.bind(this, 'map')}>
              <Text style={styles.buttonText}>submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    color: 'green',
    fontSize: 45,
    fontFamily: 'Heiti SC'
  },
  bike: {
    marginTop: 10,
    width: 160,
    height: 80,
    marginVertical: 10
  },
  button: {
    backgroundColor: 'green',
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  buttonText: {
    fontFamily: 'Heiti SC',
    color: 'white',
    fontSize: 16
  },
  addressInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 30,
    marginTop: 15,
    flexDirection: 'row'
  },
  textInput: {
    fontSize: 16,
    width: 225,
    height: 30,
    paddingLeft: 5
  },
  submitButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});
