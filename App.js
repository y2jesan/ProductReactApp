import React,{useState} from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import {uuid} from 'uuidv4';

import Header from './component/header';
import ProductList from './component/productList';
import AddProduct from './component/addProduct';


const App = () => {
  const [products,SetProducts] = useState([
    {
      id: uuid(), name: 'ball'
    },{
      id: uuid(), name: 'egg'
    },{
      id: uuid(), name: 'bread'
    }
  ]);

  const deleteProduct = (id) => {
    SetProducts(prevProducts => {
      return prevProducts.filter(products => products.id != id);
    });
  }
  const addProduct = (name) => {
    SetProducts(prevProducts => {
      return [{id:uuid(),name:name},...prevProducts];
    });
  }
  return (
    <View style={styles.container}>
      <Header title='Product List'/>
      <AddProduct addProduct={addProduct}/>
      <FlatList data={products} renderItem={({product}) =>(
        <ProductList product={item} deleteProduct={deleteProduct} />
      )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50
  }
});

export default App;
