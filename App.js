import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import product_data from './components/Product/product_data.json';
import Product from './components/Product/Product';

export default function App() {
  const renderItem = ({item}) => <Product product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.HeaderText}>PATIKASTORE</Text>
      <TextInput placeholder="Ara..." style={styles.Input} />
      <FlatList
        
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}
        data={product_data}
        style={styles.main_container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    margin: 10,
  },
  HeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  Input: {
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    padding: 10,
  },
});
