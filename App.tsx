import EditMapScreen from '@components/screens/CreateMaps/EditMapScreen';
import SelectMapScreen from '@components/screens/CreateMaps/SelectMapScreen';
import EditCodeScreen from '@components/screens/MakeCodes/EditCodeScreen';
import SelectCodeScreen from '@components/screens/MakeCodes/SelectCodeScreen';
import AdvCardSettingScreen from '@components/screens/RememberCards/AdvCardSettingScreen';
import AnswerCardScreen from '@components/screens/RememberCards/AnswerCardScreen';
import CardSettingScreen from '@components/screens/RememberCards/CardSettingScreen ';
import RememberCardScreen from '@components/screens/RememberCards/RememberCardScreen';
import ResultCardScreen from '@components/screens/RememberCards/ResultCardScreen';
import TopSceen from '@components/screens/TopSceen';
import EditPinScreen from '@components/screens/DropPinsOnAMap/EditPinScreen';
import SelectEditPinScreen from '@components/screens/DropPinsOnAMap/SelectEditPinScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectCheckMapScreen from '@components/screens/CheckYourMap/SelectCheckMapScreen';
import CheckMapScreen from '@components/screens/CheckYourMap/CheckMapScreen';
import { customColor } from '@styles/customStyles';
import { useFonts, Oswald_400Regular, Oswald_700Bold } from '@expo-google-fonts/oswald';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: customColor.fifth,
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTitle: 'Memory-map',
            headerBackTitle: 'Back',
            headerTintColor: '#fff',
          }}
          initialRouteName='TopScreen'
        >
          {/* Top */}
          <Stack.Screen name='TopScreen' component={TopSceen} />

          {/* Create map */}
          <Stack.Screen name='SelectMapScreen' component={SelectMapScreen} />
          <Stack.Screen name='EditMapScreen' component={EditMapScreen} />

          {/* Drop pins on a map */}
          <Stack.Screen name='SelectEditPinScreen' component={SelectEditPinScreen} />
          <Stack.Screen name='EditPinScreen' component={EditPinScreen} />

          {/* Make codes */}
          <Stack.Screen name='SelectCodeScreen' component={SelectCodeScreen} />
          <Stack.Screen name='EditCodeScreen' component={EditCodeScreen} />

          {/* RememberCards */}
          <Stack.Screen name='CardSettingScreen' component={CardSettingScreen} />
          <Stack.Screen name='AdvCardSettingScreen' component={AdvCardSettingScreen} />
          <Stack.Screen name='RememberCardScreen' component={RememberCardScreen} />
          <Stack.Screen name='AnswerCardScreen' component={AnswerCardScreen} />
          <Stack.Screen name='ResultCardScreen' component={ResultCardScreen} />

          {/* Make codes */}
          <Stack.Screen name='SelectCheckMapScreen' component={SelectCheckMapScreen} />
          <Stack.Screen name='CheckMapScreen' component={CheckMapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
