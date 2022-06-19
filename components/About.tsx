import { StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';
const title = 'About Astronot Mobile';
const intro = 'Free download source code react native built modern website and android ios app';
const astronot = 'With astronot mobile web app';
const about = 'Astronot mobile app is a free source code present by axcora technology team dev ';
const source = 'With this project you can easy and fast built modern web and android ios app fastly';
const qr = 'this project built with react native with expo so you can run using qrcode expo on your devices ';
const nosh = 'Not just mobile app only but astronot is a css framework to help you built unique modern website';
const visit = 'you can visit astronot home page and use astronot css for develope your web project ';
const web = 'https://astronot.axcora.com';
const services = 'and if you need to develope your website or app project with us you can use our services';
const best = 'just contact astronot team dev for best solutions';
const wa = 'Whatsapp Now : +6285646104747';
export default function About() {
  return (
    <View style={styles.Container}>
    <Text style={styles.TitleText}>{title}</Text>
    <Image style={styles.logo} source={require('../assets/images/astronots.png')} />
    <Text style={styles.IntroText}>{intro}</Text>
    <Text style={styles.IntroText}>{astronot}</Text>
    <View style={styles.separator}/>
    <Text style={styles.IntroText}>{about}</Text>
    <Text style={styles.IntroText}>{source}</Text>
    <Text style={styles.IntroText}>{qr}</Text>
    <Text style={styles.IntroText}>{nosh}</Text>
    <Text style={styles.IntroText}>{visit}</Text>
    <Text style={styles.IntroText}>{web}</Text>
    <Text style={styles.IntroText}>{services}</Text>
    <Text style={styles.IntroText}>{best}</Text>
    <View style={styles.separator}/>
    <Text style={styles.IntroText}>{wa}</Text>
     
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
        alignItems: 'center',
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
//    fontFamily: 'Cabin',
    textAlign: 'center',
  },
  ContentText: {
    fontSize: 14,
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
  logo: {
    height: 128,
    width: 128,
    alignItems: 'center',
  }
});
