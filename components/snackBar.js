import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SnackBar = ({
  showSnackBar,
  setShowSnackBar,
  isClicked,
  text = '',
  action = () => {},
}) => {
  if (showSnackBar) {
    return (
      <View style={styles.snackBarLayout}>
        <View style={styles.snackBarContent}>
          <TouchableOpacity onPress={() => action()} style={{width: '80%'}}>
            <Text style={styles.snackBarTxt}>{text}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              setShowSnackBar(!showSnackBar);
              isClicked ? action() : null;
            }}>
            <Icon name="close" style={{fontSize: 25, color: 'white'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  snackBarLayout: {
    position: 'absolute',
    top: 5,
    backgroundColor: '#E81780',
    width: '95%',
    height: 'auto',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
  },
  snackBarContent: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  snackBarTxt: {
    color: 'white',
    width: '100%',
    fontSize: 14,
  },
  closeBtn: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SnackBar;
