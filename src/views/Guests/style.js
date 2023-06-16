const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    borderWidth: 1,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  submitButton: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default styles;
