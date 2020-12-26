import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategiryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meals screen!</Text>
            <Button title='Go to Diteils!' onPress={() => {
                props.navigation.navigate({routeName: 'MealDiteils'});
            }}/>
            <Button title='Go Back' onPress={() => {
                props.navigation.pop();
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategiryMealsScreen;