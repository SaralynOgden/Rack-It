import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  belowHeader: {
    position: 'absolute',
    top: 60,
    left: 0,
    flex: 1,
    margin: 10
  },
  text: {
    fontSize: 16,
    fontFamily: 'Heiti SC'
  },
  title: {
    fontSize: 40,
    color: 'green',
    marginBottom: 10
  },
  bikeRack: {
    width: 50,
    height: 50
  },
  rackPropertyTitle: {
    fontSize: 18,
  },
  rackPropertyDesc: {
    fontSize: 15,
  },
  row: {
    marginVertical: 5
  }
});

export default styles;
