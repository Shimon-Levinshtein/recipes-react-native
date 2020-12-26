import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategiryMealsScreen from '../screens/CategiryMealsScreen';
import MealDiteilsScreen from '../screens/MealDiteilsScreen';

const MealsNavigetor = createStackNavigator({
    Categories: CategoriesScreen,
    CategiryMeals: {
        screen: CategiryMealsScreen
    },
    MealDiteils: MealDiteilsScreen
});

export default createAppContainer(MealsNavigetor);