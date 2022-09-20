import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
  _CovidReport,
  _decrementCount,
  _incrementCount,
} from '../../store/cart/cart-Actions';
import styles from './styles';
const AppButton = props => {
  return (
    <TouchableOpacity style={styles.buttonsContainer} onPress={props.onPress}>
      <Text style={styles.btnTitle}>{props.val}</Text>
    </TouchableOpacity>
  );
};
const index = () => {
  const dispatch = useDispatch();
  //store.cart here cart is reducer name
  const cart = useSelector(state => state.cart.count);

  // console.log(cart.count);
  const COVID = useSelector(state => state.cart.COVID);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.CountValueStyle}>{cart + 'Value'}</Text>
        <View style={styles.buttonContainer}>
          <AppButton
            val={5}
            onPress={() => {
              dispatch(_incrementCount(5));
            }}></AppButton>
          <Text style={styles.CountValueStyle}>
            {COVID ? COVID.length : '' + 'Value'}
          </Text>
          <AppButton
            val={'Fetch Data'}
            onPress={() => {
              // fetchCOVIDState()
              dispatch(_decrementCount());
            }}></AppButton>
          <AppButton
            val={15}
            onPress={() => {
              let params = {
                firstName: 'zia',
                lastName: 'mohe uddin ',
                email: 'ziamoheuddin675@gmail.com',
                password: '1234',
                aboutUs: 'about us',
                role: 'admin',
              };
              dispatch(
                _CovidReport(params, res => {
                  debugger;
                  if (res.status) {
                    alert(res.txt);
                  } else {
                    alert(res.txt);
                  }
                }),
              );
            }}></AppButton>
          <AppButton val={20}></AppButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
