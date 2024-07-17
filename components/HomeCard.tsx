import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';

import categories from '@/assets/data/categories';

interface HomeCardProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}

const HomeCard = (props: HomeCardProps) => {
    const {category} = props;
    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList data={category.movies} renderItem={({ item }) => (
                <Image style={styles.image} source={{ uri: item.poster }}></Image>
            )} horizontal></FlatList>


        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

export default HomeCard;