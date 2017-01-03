import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  belowHeader: {
    position: 'absolute',
    top: 50,
    left: 0,
    flex: 1,
    width: 380,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Heiti SC'
  },
  title: {
    fontSize: 40,
    color: 'green'
  },
  categoryTitle: {
    fontWeight: 'bold'
  },
  textInputContainer: {
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 16,
    width: 250,
    height: 30,
    borderWidth: 1,
    marginTop: 15
  },
  row: {
    height: 300,
    width: 380
  },
  col: {
    height: 300,
    width: 190,
    alignItems: 'center'
  },
  picker: {
    width: 100,
    height: 200
  },
  item: {
    fontSize: 20,
    fontFamily: 'Heiti SC',
    fontWeight: 'bold',
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
