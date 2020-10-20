import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ProductList = (props) => {
  return (
    <TouchableOpacity style={styles.productList}>
      <View style={styles.ProductListView}>
        <Text style={styles.ProductListText}>{props.product.name}</Text>
        <Icon
          name="remove"
          Size={20}
          color="firebrick"
          onPress={() => {
            props.deleteProduct(props.product.id);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productList: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  ProductListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProductListText: {
    fontSize: 18,
  },
});

export default ProductList;
