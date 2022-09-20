import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addChar,
  insertChar,
  removeAll,
  removeChar,
  updateChar,
} from '../../store/ArrayOperation/Array-Action';
import {set} from 'immer/dist/internal';
const AppButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.btnTitle}>{props.val}</Text>
    </TouchableOpacity>
  );
};
const ArrayOperation = () => {
  const [str, setstr] = useState('');
  const [index, setindex] = useState(0);
  const dispatch = useDispatch();

  const [insert, setinsert] = useState(false);
  const [update, setupdate] = useState(false);
  let stringfromStore = [];
  stringfromStore = useSelector(state => state.ArrayReducer.user);
  const remeovefn = str => {
    debugger;
    const index = stringfromStore.findIndex(item => item.name == str);
    if (index != -1) {
      dispatch(removeChar(index));
      setstr('');
    } else {
      console.log('not found');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={[styles.textstyle, {color: 'white'}]}>Result Text</Text>
        <View style={styles.flatlistContainer}>
          <FlatList
            style={{paddingHorizontal: 15}}
            data={stringfromStore}
            renderItem={itemData => {
              return <Text style={styles.strstyle}>{itemData.item.name}</Text>;
            }}></FlatList>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textstyle}
          value={str}
          onChangeText={val => {
            setstr(val);
          }}></TextInput>
      </View>

      {insert ? (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textstyle}
              value={index}
              keyboardType="numeric"
              onChangeText={val => {
                setindex(val);
              }}></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              val="Insert at above index Index"
              onPress={() => {
                console.log(stringfromStore.length, index);
                if (stringfromStore.length > 0) {
                  if (index >= 0 && index <= stringfromStore.length - 1) {
                    dispatch(updateChar({name: str, index: index}));
                  } else {
                    alert('Index is larger than the array length');
                  }
                } else {
                  alert('List is empty');
                }
              }}></AppButton>
            <AppButton
              val="Exit"
              onPress={() => {
                setinsert(false);
              }}></AppButton>
          </View>
        </>
      ) : (
        <View style={styles.buttonContainer}>
          <AppButton
            val="ADD"
            onPress={() => {
              dispatch(addChar(str));
              setstr('');
            }}></AppButton>
          <AppButton
            val="Remove"
            onPress={() => {
              remeovefn(str);
            }}></AppButton>
          <AppButton
            val="Insert"
            onPress={() => {
              setinsert(true);
            }}></AppButton>
          <AppButton
            val="Update"
            onPress={() => {
              setinsert(true);
            }}></AppButton>
        </View>
      )}

      <AppButton
        val="Remove All"
        onPress={() => {
          // fetchCOVIDState()
          dispatch(removeAll());
        }}></AppButton>
    </SafeAreaView>
  );
};

export default ArrayOperation;
