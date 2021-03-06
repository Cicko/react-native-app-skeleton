/**
 *
 * @author Rudolf Cicko
 * @email rudolfcickodev@gmail.com
 * @date 04.01.19
 *
 */
import { Navigation } from 'react-native-navigation';
import HomeScreen from './home';
import FavouritesScreen from './favourites';

function registerScreens () {
    Navigation.registerComponent(HomeScreen.id, () => HomeScreen.component);
    Navigation.registerComponent(FavouritesScreen.id, () => FavouritesScreen.component);
}

export {
    registerScreens,
}
