import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';


const CategoriesGridYile = props => {

        

    return (
        <TouchableOpacity 
        style={styles.gridItem}
        onPress={props.onSelect}>
            <View style={{...styles.continer, ...{backgroundColor: props.color}}}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    continer: {
        flex: 1,
    }
});

export default CategoriesGridYile;