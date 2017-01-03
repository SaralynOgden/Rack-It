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
    borderColor: 'black',
    backgroundColor: '#006400',
    width: 20,
    height: 20
  },
  warning: {
    backgroundColor: '#ff2424'
  },
  caution: {
    backgroundColor: '#ffc300',
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
