import { StyleSheet, View, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export function AddPetForm(){
    return <View style={styles.container}>
    <LinearGradient
// Background Linear Gradient
colors={['transparent','#6bcfe3']}
style={styles.background}
/>
</View>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height:'100%'
    }
  });