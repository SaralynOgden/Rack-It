import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  belowHeader: {
    position: 'absolute',
    top: 60,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    paddingHorizontal: 10,
    fontFamily: 'Heiti SC',
    fontSize: 16
  },
  title: {
    fontSize: 40,
    color: 'green'
  },
  column: {
    marginVertical: 15
  },
  row: {
    width: 375,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  marker: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#006400',
    width: 20,
    height: 20
  },
  yellowMarker: {
    backgroundColor: '#ffc300'
  },
  redMarker: {
    backgroundColor: '#ff2424'
  },
  sectionTitle: {
    fontSize: 20,
    color: 'green'
  },
  button: {
    backgroundColor: 'green',
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  buttonText: {
    color: 'white'
  }
});

export default styles;
