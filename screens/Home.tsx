import { StyleSheet , Image , ScrollView , TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import HomeInfo from '../components/Home';
import { RootTabScreenProps } from '../types';
const title = 'Astronot';
export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image style={styles.logo} source={require('../assets/images/astronots.png')} />
      <HomeInfo />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '60%',
  },
  logo: {
    height: 228,
    width: 228,
  }
});
