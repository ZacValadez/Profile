import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <img src="https://pasa.org/wp-content/uploads/2021/06/Vervet-Monkey-Foundation-credit-Kyle-.jpg"></img>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Zac Valadez</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Scrum leader</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">Hello my name is Zac and my passion is problem solving and i know this because all the things i like doing involves problem solving. My dream career is making video games, this has been my dream job since middle school</ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView> 
);
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
