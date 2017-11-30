import {TabNavigator} from 'react-navigation'
import Home from './Home';

const MyNavigation = TabNavigator({
    Home: {
        screen: Home
    }
}, {
    // tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63'
    }
})

export default MyNavigation


