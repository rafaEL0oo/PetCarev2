import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Logo } from './components/Logo';
import { WhiteButton } from './components/WhiteButton';

export default function App() {
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['transparent','#1BE9F6']}
        style={styles.background}
      />
      <Logo/>
      <WhiteButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top:100,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%'
  }
});
