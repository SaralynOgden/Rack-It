import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import About from './ios/components/About';
import Description from './ios/components/Description';
import Landing from './ios/components/Landing';
import Map from './ios/components/Map';
import Rack from './ios/components/Rack';

export default class Q4_project extends Component {
  constructor() {
    super();

    this.state = {
      location: {
        longitude: -111.579272,
        latitude: 40.155145
      },
      racks: []
    }
    this.setRacks = this.setRacks.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'about':
        return <About navigator={navigator} />
      case 'description':
        return <Description navigator={navigator}
                            {...route.passProps} />
      case 'map':
        return <Map navigator={navigator}
                    location={this.state.location}
                    setRacks={this.setRacks}
                    racks={this.state.racks} />
      case 'rack':
        return <Rack navigator={navigator} />
      default:
        return <Landing navigator={navigator} />
    }
  }

  setRacks(racks) {
    this.setState({ racks });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ location:
                          { latitude: position.coords.latitude,
                            longitude: position.coords.longitude }});
      },
      (error) => alert('error.message'),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {

    return (
      <Navigator
        initialRoute={{name: 'landing'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('Q4_project', () => Q4_project);
