import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen715646Navigator from '../features/BlankScreen715646/navigator';
import BlankScreen615619Navigator from '../features/BlankScreen615619/navigator';
import BlankScreen215588Navigator from '../features/BlankScreen215588/navigator';
import BlankScreen115311Navigator from '../features/BlankScreen115311/navigator';
import BlankScreen015175Navigator from '../features/BlankScreen015175/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen715646: { screen: BlankScreen715646Navigator },
BlankScreen615619: { screen: BlankScreen615619Navigator },
BlankScreen215588: { screen: BlankScreen215588Navigator },
BlankScreen115311: { screen: BlankScreen115311Navigator },
BlankScreen015175: { screen: BlankScreen015175Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
