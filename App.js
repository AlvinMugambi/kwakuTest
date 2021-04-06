/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './assets/styles';
import SnackBar from './components/snackBar';

const App: () => Node = () => {
  const backgroundStyle = {
    backgroundColor: '#4A5E80',
  };

  const [showSnackBar, setShowSnackBar] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const text =
    'This is an in-app notification snackbar to show the user when they perform an action. Clicking it should change the text';
  const clickedText = 'User clicked snackbar';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <View>
        <View style={{backgroundColor: '#4A5E80', padding: 30, height: '25%'}}>
          <View style={{marginBottom: 10}}>
            <Text style={styles.greetingTxt}>
              Afternoon <Text style={{fontWeight: 'bold'}}>Jo</Text>
            </Text>
            <Text style={{color: '#FFFFFF', fontWeight: '200'}}>
              Here's the latest
            </Text>
          </View>
          <View>
            <Text style={styles.fundsTxt}>KES 42,000</Text>
            <Text style={{color: '#FFFFFF', fontWeight: '200'}}>
              Total funds
            </Text>
          </View>
        </View>
        <View style={styles.goalsLayout}>
          <Text>Your Goals</Text>
          <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <View style={styles.goalBox}>
              <View style={styles.goalInfo}>
                <View>
                  <Text>Goal 1</Text>
                  <Text style={{color: '#B5B6BD', fontSize: 10}}>
                    KES 12,000
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={styles.finishGoalBtn}>
                      <Text style={styles.finishGoalTxt}>Finish Goal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.arrowRightView}>
                <Icon name="right" />
              </TouchableOpacity>
            </View>
            <View style={styles.goalBox}>
              <View style={styles.goalInfo}>
                <View>
                  <Text>Goal 2</Text>
                  <Text style={{color: '#B5B6BD', fontSize: 10}}>
                    KES 12,000
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={styles.finishGoalBtn}>
                      <Text style={styles.finishGoalTxt}>Finish Goal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.arrowRightView}>
                <Icon name="right" />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.snackBarBtn}
            onPress={() => {
              setShowSnackBar(!showSnackBar);
              setIsClicked(false);
            }}>
            <Text style={styles.snackBarTxt}>Show Snackbar</Text>
          </TouchableOpacity>
        </View>
        <SnackBar
          action={() => setIsClicked(!isClicked)}
          text={isClicked ? clickedText : text}
          showSnackBar={showSnackBar}
          setShowSnackBar={setShowSnackBar}
          isClicked={isClicked}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
