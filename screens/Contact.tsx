import { StyleSheet , Image , ScrollView } from 'react-native';
import ContactInfo from '../components/Contact';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
const title = 'Contact Us';
export default function Contact({ navigation }: RootTabScreenProps<'About'>) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/astronots.png')} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ContactInfo/>
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
  },
  logo: {
    height: 128,
    width: 128,
  }
});
