import { StatusBar } from 'react-native';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import { AuthProvider } from '@hooks/auth'
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';

import { Home } from '@screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if (!fontsLoaded) {
    return <></>
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ThemeProvider>
  );
}
