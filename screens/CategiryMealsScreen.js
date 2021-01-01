import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategiryMealsScreen = props => {
    const catId = props.navigation.getParam('categotyId');

    const selectedCategiry = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Meals screen!</Text>
            <Text>{selectedCategiry.title}</Text>
            <Button title='Go to Diteils!' onPress={() => {
                props.navigation.navigate({ routeName: 'MealDiteils' });
            }} />
            <Button title='Go Back' onPress={() => {
                props.navigation.pop();
            }} />
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