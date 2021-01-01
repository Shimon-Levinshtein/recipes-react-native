import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridYile from '../components/CategoriesGridYile';


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoriesGridYile 
        color={itemData.item.color}
        title={itemData.item.title}
         onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategiryMeals', params: {
                    categotyId: itemData.item.id
                }
            });
        }} />
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};


CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default CategoriesScreen;