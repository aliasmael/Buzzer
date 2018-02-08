import { DrawerNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const Navigator = DrawerNavigator(
  {
    Home: { screen: HomeScreen }
  }
)
export default Navigator