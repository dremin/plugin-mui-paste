import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { CustomizationProvider } from "@twilio-paste/core/customization";

import CustomTaskList from './components/CustomTaskList/CustomTaskList';

const PLUGIN_NAME = 'MuiPastePlugin';

export default class MuiPastePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    flex.setProviders({
      CustomProvider: (RootComponent) => (props) => {
        return (
          <StylesProvider generateClassName={createGenerateClassName({
            productionPrefix: PLUGIN_NAME,
            seed: PLUGIN_NAME
          })}>
              <RootComponent {...props} />
            </StylesProvider>
        );
      },
      PasteThemeProvider: CustomizationProvider
    });
    
    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="MuiPastePlugin-component" />, options);
  }
}
