import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import About from './ios/About'
import Landing from './ios/Landing';
import Map from './ios/Map';
import Rack from './ios/Rack';

export default class Q4_project extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'about':
        return <About navigator={navigator}/>
      case 'landing':
        return <Landing navigator={navigator}/>
      case 'map':
        return <Map navigator={navigator}/>
      case 'rack':
        return <Rack navigator={navigator}/>
    }
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
