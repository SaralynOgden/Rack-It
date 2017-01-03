import { StyleSheet } from 'react-native';

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
    height: 100,
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

export default styles;
