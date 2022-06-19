import { StyleSheet , Image , ScrollView } from 'react-native';
import AboutInfo from '../components/About';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
const title = 'About Us';
export default function About({ navigation }: RootTabScreenProps<'About'>) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <AboutInfo/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
