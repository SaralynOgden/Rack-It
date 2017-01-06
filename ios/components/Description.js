import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import moment from 'moment';

import styles from './stylesheets/description.js';

import Header from './Header';

export default class Description extends Component {

  getMostRecentTheft(thefts) {
    if (thefts.length === 0) {
      return 'N/A';
    }
    let mostRecentDate;
    let mostRecentDateIndex = -1;
    for(let i = 0; i < thefts.length; i++) {
      if (thefts[i].hasOwnProperty('occurred_date_range_end')) {
        const theftDate = Date.parse(thefts[i].occurred_date_range_end);
        if (theftDate > mostRecentDate || !mostRecentDate) {
              mostRecentDate = theftDate;
              mostRecentDateIndex = i;
            }
      } else {
        const theftDate = Date.parse(thefts[i].occurred_date_range_start);
        if (theftDate > mostRecentDate || !mostRecentDate) {
          mostRecentDate = theftDate;
          mostRecentDateIndex = i;
        }
      }
    }
    const startDate = moment(thefts[mostRecentDateIndex]
                      .occurred_date_range_start).format('MMMM Do YYYY, ha');
    if (thefts[mostRecentDateIndex].hasOwnProperty('occurred_date_range_end')) {
      const endDate = moment(thefts[mostRecentDateIndex]
                      .occurred_date_range_end).format('MMMM Do YYYY, ha');
      return `between ${startDate} and ${endDate}`;
    } else {
      return startDate;
    }
  }

  render() {

    return (
      <View>
        <Header navigator={this.props.navigator}/>
        <View style={styles.belowHeader}>
          <Text style={[styles.text, styles.title]}>Rack Description</Text>
          <View style={styles.table}>
            <Text style={styles.row}>
              <Text style={styles.rackPropertyTitle}>Rack Capacity: </Text>
              <Text style={styles.rackPropertyDesc}>
                {this.props.rack_capacity}
              </Text>
            </Text>
            <Text style={styles.row}>
              <Text style={styles.rackPropertyTitle}>Address: </Text>
              <Text style={styles.rackPropertyDesc}>
                {this.props.address}
              </Text>
            </Text>
            <Text style={styles.row}>
              <Text style={styles.rackPropertyTitle}>Color: </Text>
              <Text style={styles.rackPropertyDesc}>
                {this.props.color}
              </Text>
            </Text>
            <Text style={styles.row}>
              <Text style={styles.rackPropertyTitle}>Thefts Within 100m:</Text>
              <Text style={styles.rackPropertyDesc}>
                {this.props.thefts.length}
              </Text>
            </Text>
            <Text style={styles.row}>
              <Text style={styles.rackPropertyTitle}>Most Recent Theft:</Text>
              <Text style={styles.rackPropertyDesc}>
                {this.getMostRecentTheft(this.props.thefts)}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
