import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';


const CategoriesGridYile = props => {

    const TouchableCom = TouchableOpacity

    if (Platform.os === 'android' && Platform.Version >= 21) {
        TouchableCom = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCom
                style={{flex: 1}}
                onPress={props.onSelect}>
                <View style={{ ...styles.continer, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCom>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 15,
        overflow: 'hidden',
    },
    continer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sens-bold',
        fontSize: 22,
        textAlign: 'right',
    },
});

export default CategoriesGridYile;