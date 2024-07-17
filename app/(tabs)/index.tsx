import { StyleSheet, Image, FlatList } from 'react-native';

import { Text, View } from '@/components/Themed';

import categories from '@/assets/data/categories';
import HomeCard from '@/components/HomeCard';

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={categories.items}
      renderItem={({item}) => <HomeCard category={item}/> }
      ></FlatList>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 100,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5,
  }
});

