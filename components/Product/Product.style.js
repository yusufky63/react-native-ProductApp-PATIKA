import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: Dimensions.get('screen').width / 2.3,
    height: Dimensions.get('screen').height / 2.8,
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 5,
    margin: 5,
  },
  photo: {
    width: Dimensions.get('screen').width / 2.6,
    height: Dimensions.get('screen').height / 4.5,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',

  },
  main_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  noStok: {
    color: "red",
    fontWeight: "bold",
    fontSize: 14,
  }
});
