import React from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Platform, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Linking from 'expo-linking';

import { Navigation } from './src/Navigation';
import { store, persistor } from './src/Store/configureStore';
import FlashMessage from './src/utils/flashMessage';
import { EXPO_FIREBASE_URL_PREFIX, EXPO_FIREBASE_DOMAIN_URI } from '@env';
import theme from './src/styles/theme.style';

const App = (props) => {
  const linking = {
    prefixes: [Linking.makeUrl('/'), EXPO_FIREBASE_URL_PREFIX],
    config: {
      initialRouteName: 'HomePage',
      screens: {
        PlayImporterPage: 'customPlays/:uuid', // Legacy, keeping it because there are generated URL out there
        DrillImporterPage: 'custom/:source/:uuid', // source can be drill or play
        DrillPage: 'drills/:id',
      },
    },
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer
            linking={linking}
            fallback={<ActivityIndicator animating color={theme.MAIN_COLOR} style={{ top: '45%' }} size="large" />}
          >
            <Navigation />
          </NavigationContainer>
          <FlashMessage position="bottom" />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
