import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategiryMealsScreen from '../screens/CategiryMealsScreen';
import MealDiteilsScreen from '../screens/MealDiteilsScreen';
import Colors from '../constans/Colors';

const MealsNavigetor = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategiryMeals: {
        screen: CategiryMealsScreen,
    },
    MealDiteils: MealDiteilsScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
    }
});

export default createAppContainer(MealsNavigetor);