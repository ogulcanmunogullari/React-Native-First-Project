import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Text: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  BoxBlue: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'blue',
  },
  BoxPurple: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'purple',
  },
  BoxYellow: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'yellow',
  },
  BoxRed: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  BoxLightBlue: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'lightblue',
  },
  Box_Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Box: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgb(20, 20, 20)',
    borderColor: 'white',
    borderWidth: 1,
  },
});
export default style;
