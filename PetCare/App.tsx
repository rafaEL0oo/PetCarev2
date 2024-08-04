import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogonScreen } from './screens/LogonScreen';
import { HomePage } from './screens/HomePage';

const Stack = createNativeStackNavigator() ;


export default function App() {
  const pageOption = { headerShown: false }
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Logon">
        <Stack.Screen options={pageOption} name="Logon" component={LogonScreen} />
        <Stack.Screen options={pageOption} name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
