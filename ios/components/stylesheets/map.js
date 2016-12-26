import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: 670,
    width: 400
  },
  marker: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#006400',
    width: 24,
    height: 24
  },
  markerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900'
  },
  warning: {
    backgroundColor: '#ff2424'
  },
  caution: {
    backgroundColor: 'yellow'
  },
  message: {
    position: 'absolute',
    top: 600,
    left: 0,
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    fontWeight: '500'
  }
});

export default styles;
