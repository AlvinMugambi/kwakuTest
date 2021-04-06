import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  greetingTxt: {
    color: '#FFFFFF',
    fontSize: 30,
    marginBottom: 5,
  },
  fundsTxt: {
    color: '#FFFFFF',
    fontSize: 30,
    color: '#00E372',
  },
  goalsLayout: {
    borderTopColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderStyle: 'solid',
    borderTopWidth: 0.1,
    padding: 30,
    height: Platform.OS === 'ios' ? '76.5%' : '75%',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  goalBox: {
    backgroundColor: 'white',
    width: '98%',
    height: 70,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  goalInfo: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  finishGoalBtn: {
    backgroundColor: '#00E772',
    height: 25,
    width: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishGoalTxt: {
    color: 'white',
    fontSize: 12,
  },
  arrowRightView: {
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderLeftColor: '#E6E7ED',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: '15%',
  },
  snackBarBtn: {
    backgroundColor: '#00E772',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 20,
  },
  snackBarTxt: {
    color: 'white',
  },
});

export default styles;
