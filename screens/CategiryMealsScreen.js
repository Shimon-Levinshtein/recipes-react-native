import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategiryMealsScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            onSelectMeal={() => { }}
        />
    };

    const catId = props.navigation.getParam('categotyId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, indx) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

CategiryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categotyId');

    const selectedCategiry = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategiry.title,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategiryMealsScreen;