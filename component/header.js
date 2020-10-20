import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.txt}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title = 'Products'
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'skyblue'
  },
  txt :{
      color: '#fff',
      fontSize: 23,
      textAlign: 'center'
  }
});

export default Header;
