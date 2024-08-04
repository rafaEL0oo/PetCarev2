import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogonScreen } from './screens/LogonScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Logon">
        <Stack.Screen options={{ headerShown: false }} name="Logon" component={LogonScreen} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
