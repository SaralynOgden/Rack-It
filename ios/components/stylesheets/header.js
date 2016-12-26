import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menu: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  circleButton: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    width: 30,
    height: 30,
    marginLeft: 10
  },
  backArrow: {
    position: 'absolute',
    top: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    width: 30,
    height: 30,
    marginLeft: 10
  },
  about: {
    position: 'absolute',
    top: 20,
    left: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    width: 30,
    height: 30,
    marginLeft: 10
  },
  backArrowText: {
    position: 'absolute',
    top: 3,
    left: 1.5,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold'
  },
  aboutText: {
    position: 'absolute',
    top: 3,
    left: 3.5,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
