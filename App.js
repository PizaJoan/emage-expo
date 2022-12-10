import { useFonts } from 'expo-font';
import * as eva from '@eva-design/eva';
import { ActivityIndicator, StatusBar } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import HomeScreen from './screens/home';
import SettingsScreen from './screens/settings';
import EditorScreen from './screens/editor';
import MainLayout from './layouts/mainLayout';

import { default as theme } from './theme.json';

const { Navigator, Screen } = createNativeStackNavigator();

const screens = [
    { name: 'Home', component: HomeScreen },
    { name: 'Settings', component: SettingsScreen },
    { name: 'Editor', component: EditorScreen }
]

export default function App() {

    const [ fontsLoaded ] = useFonts({
        'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    return (<>
        <StatusBar 
            backgroundColor={theme['color-primary-700']}
        />
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
            {
                fontsLoaded ?
                    (
                        <NavigationContainer>
                            <Navigator screenOptions={{ headerShown: false }} style={{ fontFamily: 'Roboto-Regular' }}>
                                {screens.map(screen => (
                                    <Screen 
                                        key={screen.name}
                                        name={screen.name}
                                        component={screen.component}
                                    />
                                ))}
                            </Navigator>
                        </NavigationContainer>
                    ) :
                    (
                        <SafeAreaView style={{ flex: 1 }}>
                            <MainLayout style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <ActivityIndicator
                                    style={{ flex: 1, transform: [{ scale: 4.5 }] }}
                                />
                            </MainLayout>
                        </SafeAreaView>
                    )
            }
        </ApplicationProvider>
    </>);
}
