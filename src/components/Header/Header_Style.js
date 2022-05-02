import {StyleSheet} from 'react-native';

const Header_Style = StyleSheet.create({
  H_Container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    flex: 0.5,
    justifyContent: 'center',
  },
  H_Center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
  },
  H_B_Selected: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  H_B_N_Selected: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  T_Selected: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  T_N_Selected: {
    textAlign: 'center',
    color: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default Header_Style;
