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
import Practice from '@components/prototype/Practice';
import Record from '@components/prototype/Record';
import Feedback from '@components/prototype/Feedback';

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
        key={'prototype'}
        title={'Single-screen Prototype'}
        component={Prototype}
        analyticsDesc={'prototype'}
      />

      <Scene
        key={'practice'}
        title={'Practice'}
        component={Practice}
        analyticsDesc={'practice'}
      />

      <Scene
        key={'record'}
        title={'Record'}
        component={Record}
        analyticsDesc={'record'}
      />

      <Scene
        key={'feedback'}
        title={'Feedback'}
        component={Feedback}
        analyticsDesc={'feedback'}
      />
    </Scene>
  </Scene>,
);
