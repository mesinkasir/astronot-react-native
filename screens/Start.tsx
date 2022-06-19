import { StyleSheet , Image , ScrollView , TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import InstallInfo from '../components/Install';
import { RootTabScreenProps } from '../types';
const title = 'Installation';
export default function Start({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <InstallInfo />
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
    fontSize: 40,
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
