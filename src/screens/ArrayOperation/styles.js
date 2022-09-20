import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultContainer: {
    height: '50%',
    backgroundColor: 'grey',
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    padding: 8,
    backgroundColor: 'pink',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  textstyle: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
    paddingVertical: 15,
    paddingHorizontal: 3,
  },
  strstyle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
  },
  flatlistContainer: {
    height: '85%',
    width: '90%',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
  },
});
