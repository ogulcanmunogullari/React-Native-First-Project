import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  Container: {
    paddingRight: 30,
    paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  Card: {
    backgroundColor: 'rgb(82, 93, 243)',
    borderRadius: 50,
    height: 200,
    flex: 1,
    justifyContent: 'space-around',
  },
  Box_Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Box: {
    width: 75,
    height: 35,
    backgroundColor: 'lightgrey',
  },
  Text_Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Text_B: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Text_S: {
    color: 'white',
  },
});
export default style;
