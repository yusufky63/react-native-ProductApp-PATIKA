import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { styles } from './Product.style';
function Product({ product }) {
  return (
    <View style={styles.main_container}>
      <View style={styles.card}>
        <Image
          style={styles.photo}
          source={{
            uri: product.imgURL,
          }}
        />
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && <Text style={styles.noStok}>STOKTA YOK</Text>}
      </View>
    </View>
  );
}

export default Product;
