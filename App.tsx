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
import EditPinScreen from '@components/screens/WriteOnMaps/EditPinScreen';
import SelectEditPinScreen from '@components/screens/WriteOnMaps/SelectEditPinScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#467FD3',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTitle: 'Top',
            headerBackTitle: 'Back',
            headerTintColor: '#fff',
          }}
          initialRouteName='Top'
        >
          <Stack.Screen name='Top' component={TopSceen} />
          {/* Create map */}
          <Stack.Screen name='EditMapScreen' component={EditMapScreen} />
          <Stack.Screen name='SelectMapScreen' component={SelectMapScreen} />
          {/* Write on a map */}
          <Stack.Screen name='EditPinScreen' component={EditPinScreen} />
          <Stack.Screen name='SelectEditPinScreen' component={SelectEditPinScreen} />
          {/* Make codes */}
          <Stack.Screen name='EditCodeScreen' component={EditCodeScreen} />
          <Stack.Screen name='SelectCodeScreen' component={SelectCodeScreen} />
          {/* RememberCards */}
          <Stack.Screen name='CardSettingScreen' component={CardSettingScreen} />
          <Stack.Screen name='AdvCardSettingScreen' component={AdvCardSettingScreen} />
          <Stack.Screen name='RememberCardScreen' component={RememberCardScreen} />
          <Stack.Screen name='AnswerCardScreen' component={AnswerCardScreen} />
          <Stack.Screen name='ResultCardScreen' component={ResultCardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
