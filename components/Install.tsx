import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
const title = 'Installation Astronot Mobile';
const intro = 'How to install react native astronot mobile app';
const node = 'For first of course we need to install node to your devices, so you can download node js';
const expo = 'Then you need to install expo globally to your device using terminal npm , with run ';
const expoinstall = 'npm install --global expo-cli';
const source = 'Oke now you can download astronot mobile react nativce source code , clone it with';
const git = 'git clone https://github.com/mesinkasir/astronot-react-native.git';
const cmd = 'oke now you can open source code file, and run ';
const npm = 'npm install && npm start';
const press = 'then press w for open on web browser , press a for open on android, press i for open on ios';
const emulator = 'you need emulator for open for android or ios ';
const web = 'if you press w for open web browser so you can visit on localhost:19006 ';
const success = 'and congratulations now you have successfully run astronot react native app';
const vscode = 'now you can open source code using code editor , download visual code studio';
const start = 'and get started to learn astronot mobile on react native , built web, andorid and ios app.';
const btn = 'Read Doc Astronot Mobile';
const doc = 'https://www.hockeycomputindo.com/2022/06/built-android-ios-app-and-website-with.html';
export default function Install() {
  return (
    <View style={styles.Container}>
    <Text style={styles.TitleText}>{title}</Text>
    <View style={styles.separator}/>
    <Text style={styles.IntroText}>{intro}</Text>
    <Text style={styles.ContentText}>{node}</Text>
    <Text style={styles.ContentText}>{expo}</Text>
    <Text style={styles.ContentCodeText}>{expoinstall}</Text>
    <Text style={styles.ContentText}>{source}</Text>
    <Text style={styles.ContentCodeText}>{git}</Text>
    <Text style={styles.ContentText}>{cmd}</Text>
    <Text style={styles.ContentCodeText}>{npm}</Text>
    <Text style={styles.ContentText}>{press}</Text>
    <Text style={styles.ContentText}>{emulator}</Text>
    <Text style={styles.ContentText}>{web}</Text>
    <Text style={styles.ContentText}>{success}</Text>
    <Text style={styles.ContentText}>{vscode}</Text>
    <Text style={styles.ContentText}>{start}</Text>
    <View style={styles.separator}/>
    <Text style={styles.ContentText}>{btn}</Text>
    <Text style={styles.DocText}>{doc}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  Container: {
        margin: 10,
        marginTop: 30,
        borderRadius: 5,
        boxShadow: '#383227',
        boxSizing: 'border-box',
        backgroundColor: '#f5fab5',
        padding: 20,
        textAlign: 'center',
        marginBottom: 30, 
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  separator: {
    marginVertical: 30,
    backgroundColor: '#000',
    height: 1,
    width: '100%',
  },
  TitleText: {
    fontSize: 27,
    lineHeight: 29,
    textAlign: 'center',
  },
  IntroText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  ContentText: {
    fontSize: 14,
    textAlign: 'center',
  },  
  DocText: {
    fontSize: 10,
    lineHeight: 24,
    textAlign: 'center',
  },
  ContentCodeText: {
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'white',
  },
  helpContainer: {
    borderRadius: 8,
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#de2b90',
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
    color: 'white',
  },
});
