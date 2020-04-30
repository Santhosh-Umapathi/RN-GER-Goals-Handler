import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const MainNavigator = createStackNavigator(
{
  Home: HomeScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
  title: 'Goals Handler',
  headerTintColor: 'white', //Header button colors
  headerStyle: {
    backgroundColor: 'lightblue' // header bg color
    },
  headerTitleStyle: 
  {
    color: 'black' // header font color
  }
    }
      }
);
  

export default createAppContainer(MainNavigator);