/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Components
import Drawer from '@containers/ui/DrawerContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Prototype from '@components/prototype/Prototype';
// TODO: create practice/record components
// import Practice from '@components/prototype/Practice';
// import Record from '@components/prototype/Record'

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth
    {AuthScenes} */}

    {/* Main App */}
    <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Drawer Side Menu
      <Scene key={'home'} component={Drawer} initial={'tabBar'}> */}
        {/* Tabbar
        {TabsScenes}
      </Scene> */}

      {/* General */}
      <Scene
        clone
        key={'prototype'}
        title={'Single-screen Prototype'}
        component={Prototype}
        analyticsDesc={'Prototype'}
      />
    </Scene>
  </Scene>,
);
