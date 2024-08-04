import React from 'react';
import { Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export function HomePage({ navigation }){
    return <CustomButton text="Back" onButtonClick={()=>{navigation.navigate('Logon')}}/>
}