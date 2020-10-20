import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddProduct = (props) => {
  const [name, setName] = useState('');

  const onChange = (txt) => setName(txt);
  return (
    <View>
      <TextInput
        placeholder="Add Product"
        style={styles.Input}
        onChangeText={onChange}></TextInput>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.addProduct(name);
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 15,
  },
  btn: {
    backgroundColor: 'grey',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddProduct;
